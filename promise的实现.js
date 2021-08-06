/*
1.实现观察者模式
2.promise类似于一个状态机，它有三种状态，pending、fulfilled、rejected，默认状态为pending，状态只能从pending改变为另两个状态，状态一旦改变不可逆。
*/

const PENDING = 'PENDING';
const FULLEILLED = 'FULLEILLED';
const REJECTED = 'REJECTED'

function Promise(fn) {
    //队列的目的，同一个实例可以反复多次调用then
    this.resolveQueue = [];
    this.rejectQueue = [];
    this.status = PENDING;
    //缓存当前的val，用于当调用then时状态非PENDING情况
    this.val = undefined;

    let resolve = (val) => {
        const run = () => {
            if (this.status !== PENDING) return;
            this.status = FULLEILLED;
            this.val = val;
            //防止多次调用resolve，每处理一个resolve，则从队列删掉一个依赖
            while (this.resolveQueue.length) {
                let callback = this.resolveQueue.shift();
                callback(val)
            }
        }
        setTimeout(run)
    }

    let reject = (err) => {
        const run = () => {
            if (this.status !== PENDING) return;
            this.status = REJECTED;
            this.val = err
            while (this.rejectQueue.length) {
                let callback = this.rejectQueue.shift();
                callback(err);
            }
        }
        setTimeout(run)
    }

    fn(resolve, reject)

}

Promise.prototype.then = function (resolveFn, rejectFn) {
    //值穿透特性处理
    if (typeof resolveFn !== 'function') {
        resolveFn = (v) => v;
    }
    if (typeof rejectFn !== 'function') {
        rejectFn = (err) => {
            throw new Error(err instanceof Error ? err.message : err);
        };
    }

    return new Promise((resolve, reject) => {
        //包装处理返回值
        let fullfilledFn = (val) => {
            try {
                let x = resolveFn(val);
                x instanceof Promise ? x.then(resolve, reject) : resolve(x);
            } catch (e) {
                reject(e)
            }

        }

        let rejectedFn = (val) => {
            try {
                let x = rejectFn(val);
                x instanceof Promise ? x.then(resolve, reject) : resolve(x);
            } catch (e) {
                reject(e)
            }
        }

        switch (this.status) {
            case PENDING:
                this.resolveQueue.push(fullfilledFn);
                this.rejectQueue.push(rejectedFn);
                break;
            case FULLEILLED:
                resolveFn(this.val);
                break
            case REJECTED:
                resolveFn(this.val);
        }
    })
}

//处理最近一次的异常
Promise.prototype.catch = function (fn) {
    return this.then(undefined, fn)
}

//无论是fulfilled或是rejected都会执行,传递上一个then的返回值，所以需要包装一层
//因为fn中可以改变promise状态，譬如resolve改为reject，所以需要传递上一个值的同时传递fn的状态
Promise.prototype.finally = function (fn) {
    return this.then(
        (val) => {
            return Promise.resolve(fn(val)).then(() => val)
        },
        (err) => {
            //reject 状态不能改变
            return Promise.resolve(fn(err)).then(() => {
                throw err
            })
        }
    )
}

Promise.resolve = function (value) {
    //resolve受传入值的影响，可以变为reject，而reject不能变为resolve
    if (value instanceof Promise) return value // 根据规范, 如果参数是Promise实例, 直接return这个实例
    return new Promise(resolve => resolve(value))
}

Promise.reject = function (reason) {
    return new Promise((resolve, reject) => reject(reason))
}




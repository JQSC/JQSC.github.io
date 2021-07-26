//对Promise的理解
/*
promie是一种异步的开发规范，最初是为了解决nodejs中的‘回调地狱’问题
它的实现需要符合promise A+规范
具体实现是定义一个构造函数，构造函数的原型包含then、resolve、reject方法
构造函数中传入回调函数，在实例化的时候执行，执行函数中传入resolve、reject方法,当执行resolve方法时
*/
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(fn) {

    console.log('new promise');
    this.state = PENDING;
    this.successFns = [];
    this.errorFns = [];

    let _this = this;

    function rsolve(data) {
        if (_this.state === PENDING) {
            _this.state = FULFILLED;
            setTimeout(() => {
                _this.successFns[0](data)
                _this.successFns[1](data)
            }, 0)
        }

    }

    function reject(data) {
        if (_this.state === PENDING) {
            _this.state = REJECTED;
            setTimeout(() => {
                _this.errorFns[0](data)
            }, 0)
        }
    }

    try {
        fn(rsolve, reject)
    } catch (error) {
        reject(error)
    }

}

Promise.prototype.then = function (successFn, errorFn) {
    if (typeof successFn == 'function') {
        this.successFns.push(successFn)
    }
    if (typeof errorFn == 'function') {
        this.errorFns.push(errorFn)
    }
    return this
}

new Promise(function (rsolve, reject) {
    console.log('promise')
    rsolve('rsolve')

}).then(
    function (data) {
        console.log('resolve1111', data)
    },
    function () {
        console.log('reject')
    }
).then(
    function (data) {
        console.log('resolve2222', data)
    },
    function () {
        console.log('reject')
    }
)
//实现apply

/*
apply的功能：改变被执行函数的this指向

apply具有两个参数：
thisArg：函数执行时使用的this值
【argsArray】：执行函数的参数数组
*/

// this代表的是当前函数的执行环境，所以显示的调用apply改变的是当前函数的执行环境，原理很简单，存储被调用的函数，这样去掉原先的执行环境，然后增加一个由apply传入的参数创建的对象，把函数放入对象中，通过对象去执行
// 这样达到了隐式调用，this指向函数调用者，也就是传入的参数对象。

Function.prototype.apply = function (thisArg, argsArray) {

    //当对象继承Function原型时候，调用apply的或许是对象而不是函数
    if (typeof this !== 'function') {
        throw new TypeError(this + ' is not a function');
    }

    //thisArg 可以传入null  undefined以外任何值，如果是原始值则返回原始值的包装器对象
    if (typeof thisArg === 'undefined' || thisArg === null) {
        throw new TypeError('d')
    }

    if (typeof argsArray === 'undefined' || argsArray === null) {
        argsArray = []
    }

    //new  Object（） 如果传入的参数本身是对象则返回参数，如果不是则返回该参数类型的包装器
    if (!argsArray instanceof Array) {
        argsArray = [argsArray]
    }

    //非严格模式下转对象
    var newObject = new Object(thisArg);
    //防止thisArg存在相同属性
    var _fn = Symbol();
    newObject[_fn] = this;
    var res = newObject[_fn](...argsArray);
    delete newObject[_fn];
    return res

}


function generateFunctionCode(){
    
    
}

//最后一个参数是逻辑

new Function('return arguments[0][arguments[1]](arguments[2][0])')




let b = {
    test: 'csq'
}

function getName() {
    console.log(this.test)
}


let c = getName.apply(b);


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

/*
1.this必须是函数
2.thisArg为null 、undefined时值为全局对象, 当它为基础数据类型的时候，返回基础类型的包装器
3.argsArray 可选的 数组或者类数组对象，可以为undefined或null
4.apply的实现：将函数作为thisArg的属性去执行
*/

function getGlobalObject() {
    return this
}

Function.prototype.apply = function (thisArg, argsArray) {
    if (typeof this !== 'function') {
        throw new TypeError('this is not a function!')
    }
    if (typeof thisArg === 'undefined' || thisArg === null) {
        thisArg = getGlobalObject();
    }
    if (typeof argsArray === 'undefined' || argsArray === null) {
        argsArray = [];
    }

    let o = new Object(thisArg);
    let p = Symbol();
    o[p] = this;

    let res = o[p](...argsArray);
    delete o[p];
    return res
}

function generateArgs(index, l) {
    var res = '';
    for (var i = 0; i < l; i++) {
        res += 'arguments[' + index + '][' + i + '],'
    }
    return res
}
//ES5版本，去掉所有ES6语法
Function.prototype.apply = function (thisArg, argsArray) {

    if (typeof this !== 'function') {
        throw new TypeError('this is not a function!')
    }
    if (typeof thisArg === 'undefined' || thisArg === null) {
        thisArg = getGlobalObject();
    }
    if (typeof argsArray === 'undefined' || argsArray === null) {
        argsArray = [];
    }

    var o = new Object(thisArg);
    var fn = new Date().getTime();
    o[fn] = this;

    //Function 创建的函数只能在全局作用域中执行，而eval是在当前作用域环节执行
    var argumentsStr = generateArgs(2, argsArray.length)
    var res = (new Function('return arguments[0][arguments[1]](' + argumentsStr + ')'))(o, fn, argsArray);
    // var argumentsStr = generateArgs(1, argsArray.length)
    // eval('o[fn]('+argumentsStr+')')
    delete o[fn];
    return res
}


let a = {
    name: 'csq'
}

function b(x, y) {
    console.log(this.name, x, y)
}

b.apply(a, [1, 2])

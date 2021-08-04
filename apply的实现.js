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
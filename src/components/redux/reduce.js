//按顺序执行
function promise1(val) {
    return new Promise((resolve) => {
        resolve(val * 1);
    })
}


function promise2(val) {
    return new Promise((resolve) => {
        resolve(val * 2);
    })
}

function promise3(val) {
    return val * 3
}

function promise4(val) {
    return new Promise((resolve) => {
        resolve(val * 4);
    })
}


let arr = [promise1, promise2, promise3, promise4];

let res = arr.reduce((acc, cur) => {
    return acc.then(cur)
}, Promise.resolve(1))
    // .then((arg) => console.log(arg))

//用reduce实现map
Array.prototype.mapUsingReduce = function (callback, thisArg) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback.call(thisArg, this[i], i, this))
    }
    return newArr
}

Array.prototype.mapUsingReduce2 = function (callback, thisArg) {
    return this.reduce((acc, cur, index, srcArr) => acc.concat(callback.call(thisArg, cur, index, srcArr)), [])
}

// console.log([1, 2, 3].mapUsingReduce2((val, i) => {
//     return val * 2
// }))


//reduce polyfill
Array.prototype.reducePolyFill = function (reducer, initial) {
    let acc = initial;

    if (!initial) {
        acc = this[0];
        this.splice(0, 1)
    }

    for (let i = 0; i < this.length; i++) {
        acc = reducer(acc, this[i], i, this)
    }

    return acc
}


let test = [1, 2, 3, 4, 5]
let res11 = test.reducePolyFill((acc, cur) => {
    return acc + cur
});
console.log(res11);
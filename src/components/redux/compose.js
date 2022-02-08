const test = [
    { name: 'chi' },
    { name: 'csq' },
]


//const res = test.reduce((acc, cur) => acc.name + cur.name);

//console.log(res)


function compose(...func) {

    //数组为空时reduce执行会报错
    if (func.length === 0) {
        return (arg) => arg
    }

    return func.reduce((acc, cur) => (...args) => cur(acc(...args)))
}


//reduce使用场景
//dan
//累加
let arr = [1, 2, 3, 4, 5]
let res = arr.reduce((acc, cur) => acc + cur);
console.log(res);
//累加对象里的值，数组长度必须大于1
let arr2 = [
    { val: 1 },
    { val: 2 },
]
let res2 = arr2.reduce((acc, cur) => { return acc + cur.val }, 0);
console.log(res2);
//扁平化
let arr3 = [[1, 2], [3, [4, 5]]]
let res3 = arr3.reduce((acc, cur) => {
    return acc.concat(cur)
});
console.log(res3);
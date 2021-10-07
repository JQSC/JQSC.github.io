//数组扁平化
//concat 合并两个或者多个数组，此方法不会更改现有数组，而是返回一个新数组。 --MDN
let arr = [1, 2, 3, [4, 5], 6]

//第一种递归实现
function flatten(arr) {
    let res = [];
    for (let key of arr) {
        res = res.concat(Array.isArray(key) ? flatten(key) : key)
    }
    return res
}

//第二种toString
//toString返回表示该对象的字符串  --MDN
function flatten2(arr) {
    return arr.toString().split(',').map((key) => Number(key))
}

//第三种reduce
//省去遍历和定义新数组的代码，核心依旧是递归
function flatten3(arr) {
    return arr.reduce(function (res, key) {
        return res.concat(Array.isArray(key) ? flatten(key) : key)
    }, [])
}


let r = flatten2([1, 2, [3, [4, 5]]]);



function flatten4(arr, deep) {
    console.log('deep',deep);
    
    if (deep <= 0) return arr
    let res = [];
    for (let key of arr) {
        console.log('key',key);
        
        res = res.concat(Array.isArray(key) ? flatten4(key, deep - 1) : key);
    }
    return res
}


let s=flatten4([1, 2, [3, [4, 5]]],1);

console.log(s);
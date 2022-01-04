let arr = [1, 2, 3]
let obj = {};

//判断是否是数组的五中方法
function isArray(val) {
    return [
        (val) => {
            return val instanceof Array
        },
        (val) => {
            return val.constructor === Array
        },
        (val) => {
            return val.__proto__ = Array.prototype
        },
        (val) => {
            return Object.prototype.toString.call(val) === '[object Array]'
        },
        (val) => {
            return Array.isArray(val)
        }
    ].every((cb) => cb(val))

}

console.log("数组：", isArray(arr))
console.log("对象：", isArray(obj))


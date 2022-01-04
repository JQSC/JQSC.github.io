//有一个大小为100的数组，里面的元素是从 1 到 100，怎样随机从里面选择 50 个数呢？不能重复。
//遍历每一个数字与随机的位置做交换 

function xp(arr) {

    for (let i = 0; i < arr.length; i++) {
        let idx = parseInt(Math.random() * arr.length);
        let v = arr[idx];
        arr[idx] = arr[i];
        arr[i] = v
    }
    return arr
}


console.log(xp([1,2,3,4,5,6,7]))
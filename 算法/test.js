//字符串去重
//abbabc-abc

//数组合并
function mergeArrar(arr1, arr2) {
    let res = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            res.push(arr1[i]);
            i++
        } else {
            res.push(arr2[j]);
            j++
        }
    }

    for (; i < arr1.length; j++) {
        res.push(arr1[i]);
    }

    for (; j < arr2.length; j++) {
        res.push(arr2[j]);
    }

    return res
}

let res=mergeArrar([1,3,5],[2,4,6])

console.log(res);
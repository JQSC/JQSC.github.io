function quickSort(arr) {
    let l = arr.length;
    if (l <= 1) return arr;

    let midIndex = parseInt(l / 2);
    let midValue = arr.splice(midIndex, 1)[0];

    let left = [], right = [];

    for (let key of arr) {
        key <= midValue ? left.push(key) : right.push(key);
    }
    return [...quickSort(left), midValue, ...quickSort(right)]
    //return quickSort(left).concat([midValue], quickSort(right))

}


// let a = quickSort([2, 3, 1, 5, 7, 2])

// console.log(a)

//选择排序
function selectSort(arr) {
    if (!arr || arr.length < 2) return arr;

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        //交换
        swap(arr, i, minIndex)
    }
    return arr
}

function swap(arr, i, j) {
    let c = arr[i];
    arr[i] = arr[j]
    arr[j] = c
}


//冒泡排序
function bubbleSort(arr) {
    if (!arr || arr.length < 2) return arr;
    //第一轮规定范围
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}


let a = bubbleSort([2, 3, 1, 5, 7, 2])

console.log(a)
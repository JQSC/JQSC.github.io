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


let a = quickSort([2, 3, 1, 5, 7, 2])

console.log(a)
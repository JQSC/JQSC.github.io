

function mp(arr) {
    if (arr.length < 2) return arr
    let left = [], right = [];
    let mid = parseInt(arr.length / 2);

    for (let i = 0; i < arr.length; i++) {
        if (i === mid) continue;
        if (arr[i] < arr[mid]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...mp(left), arr[mid], ...mp(right)]
}


console.log(mp([1, 5, 2, 4, 7, 9, 2, 8, 4]))
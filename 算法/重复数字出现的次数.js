function finds(arr, target) {

    let left = 0, right = arr.length;

    while (left <= right) {
        let mid = parseInt(left + (right - left) / 2);
        if (arr[mid] === target) {
            left = mid
            break
        }

        if (arr[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    let res = 0

    let nums = left
    while (arr[nums] === target) {
        nums--
        res++
    }

    nums = left+1
    while (arr[nums] === target) {
        nums++
        res++
    }

    return res

}

console.log('finds', finds([1, 2, 2, 3, 3, 5, 8, 9], 5))
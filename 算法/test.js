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

//let res=mergeArrar([1,3,5],[2,4,6])




var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0, l = nums.length; i < l; i++) {
        let value = nums[i];
        let mapIndex = map[target - value]
        if (mapIndex !== undefined) {
            return [mapIndex, i];
        } else {
            map[value] = i;
        }
    }
};


var twoSum2 = function (nums, target) {
    let L = 0, R = nums.length - 1;
    while (L < R) {
        const sum = nums[L] + nums[R];
        if (sum === target) {
            return [L, R];
        } else if (sum > target) {
            R--
        } else if (sum > target) {
            L++
        }
    }
};

let a = twoSum([2, 7, 11, 15], 9)

console.log(a);
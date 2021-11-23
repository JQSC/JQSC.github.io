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

//let a = twoSum([2, 7, 11, 15], 9)

//二分法
//寻找target在数组里的左右边界
//[1,2,2,4,6,7,8]目标值2

//寻找右边界大于target的位置 -1 
function getRightBoard(nums, target) {
    let l = 0, r = nums.length - 1;//区间左闭右闭

    while (l <= r) {
        const mid = l + (r - l) >>> 1;
        if (nums[mid] > target) {
            //包含mid [l,mid]
            r = mid
        } else {
            //不包含mid [mid+1,r]
            l = mid + 1
        }
    }

    return r
}

//[1,2,2,4,6,7,8]目标值2
//寻找左边界小于target的位置 +1 
function getLeftBoard(nums, target) {
    let l = 0, r = nums.length - 1;//区间左闭右闭

    while (l <= r) {
        const mid = l + (r - l) >>> 1;
        if (nums[mid] >= target) {
            //不包含mid [l,mid-1]
            r = mid - 1
        } else {
            //包含mid [mid,r]
            l = mid + 1
        }
    }

    return l
}




function searchRange() {
    let nums = [1, 2, 2, 4, 6, 7, 8];
    let target = 2;
    let l = getLeftBoard(nums, target);
    let r = getRightBoard(nums, target);
    console.log(1111111, l, r)
}



var minArray2 = function (numbers) {
    let rr = numbers.length - 1;
    let l = 0, r = numbers.length - 1

    while (l < r) {
        let mid = l + (r - l >>> 1);
        if (numbers[mid] > numbers[rr]) {
            l = mid + 1
        } else if (numbers[mid] < numbers[rr]) {
            r = mid
        } else {
            r--
        }
    }
    return numbers[l]
};

var minArray = function (numbers) {
    let rr = numbers.length - 1;
    let l = 0, r = numbers.length - 1

    while (l < r) {
        let mid = l + (r - l >>> 1);
        if (numbers[mid] > numbers[0]) {
            l = mid + 1
        } else if (numbers[mid] < numbers[0]) {
            r = mid
        } else {
            r--
        }
    }
    return numbers[l]
};


// let a = [3, 4, 5, 1, 2]   //1
// let b = [4, 5, 6, 7, 0, 1, 2];  //0
// let c = [11, 13, 15, 17]  //11
// let res = minArray(a)
// let res1 = minArray(b)
// let res2 = minArray(c)
// console.log('res', res, res1, res2);

var search2 = function (nums, target) {
    //寻找旋转点
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let mid = l + (r - l >>> 1);
        if (nums[mid] <= nums[nums.length - 1]) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    console.log('left',l);
    
    //判断区间
    if (target <= nums[nums.length - 1]) {
        r = nums.length - 1
    } else {
        r = l
        l = 0
    }

    while (l <= r) {
        let mid = l + (r - l >>> 1);
        if (nums[mid] < target) {
            l = mid + 1
        } else if (nums[mid] > target) {
            r = mid - 1
        } else {
            return mid
        }
    }
    return -1
};


var search = function (nums, target) {
    //寻找旋转点
    let l = 0, r = nums.length - 1;
    while (l < r) {
        
        let mid = l + (r - l >>> 1);

        if (nums[mid] <= nums[0]) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    console.log('left',l);
    
    //判断区间
    if (target <= nums[nums.length - 1]) {
        r = nums.length - 1
    } else {
        r = l
        l = 0
    }

    while (l <= r) {
        let mid = l + (r - l >>> 1);
        if (nums[mid] < target) {
            l = mid + 1
        } else if (nums[mid] > target) {
            r = mid - 1
        } else {
            return mid
        }
    }
    return -1
};
console.log(search([1, 3], 3))
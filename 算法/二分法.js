//左闭右开
var search2 = function (nums, target) {
    //左闭右开 [L,R)
    let L = 0, R = nums.length;
    //因为左闭右开，所以循环条件 L < R
    while (L < R) {
        const mid = L + parseInt((R - L) / 2);
        console.log('mid', mid)
        if (nums[mid] < target) {
            //不包含mid,所以[mid+1,R)
            L = mid + 1
        } else if (nums[mid] > target) {
            //不包含mid,[L,mid)
            R = mid
        } else {
            return mid
        }
    }
    return -1
};

//左闭右闭
var search = function (nums, target) {
    //左闭右开 [L,R]
    let L = 0, R = nums.length - 1;
    //因为左闭右开，所以循环条件 L <= R
    while (L <= R) {
        const mid = L + parseInt((R - L) / 2);
        if (nums[mid] < target) {
            //不包含mid,所以[mid+1,R]
            L = mid + 1
        } else if (nums[mid] > target) {
            //不包含mid,[L,mid-1]
            R = mid - 1
        } else {
            return mid
        }
    }
    return -1
};


// search([-1, 0, 3, 5, 9, 12], 9)



const arr = [1, 2, 3, 3, 5, 7, 9]
//target第一次出现的的位置
function searchLeftBoard(nums, target) {
    //区间左闭右闭 [l,r]
    let l = 0, r = nums.length - 1;

    while (l < r) {
        let mid = l + parseInt((r - l) / 2);
        //mid和mid右侧都大于target，所以下一轮区间为[l,mid-1]
        if (nums[mid] > target) {
            r = mid - 1;
        }
        //mid等于target，那么mid右侧肯定不是target第一次出现的地方，所以区间[l,mid]
        else if (nums[mid] === target) {
            r = mid
        }
        //mid小于target 所以mid和mid左侧都小于target，所以下一轮区间为[mid+1,r]
        else {
            l = mid + 1
        }
    }

    return l
}

//target最后一次出现的的位置
function searchRightBoard(nums, target) {
    //区间左闭右闭 [l,r]
    let l = 0, r = nums.length - 1;

    while (l < r) {
        let mid = l + parseInt((r - l) / 2);
        //mid大于target， mid和mid右侧都大于target，所以下一轮区间为[l,mid-1]
        if (nums[mid] > target) {
            r = mid - 1;
        }
        //mid等于target，那么mid左侧肯定不是target最后一次出现的地方，所以区间[mid,r]
        else if (nums[mid] === target) {
            l = mid
        }
        //mid小于target 所以mid和mid左侧都小于target，所以下一轮区间为[mid+1,r]
        else {
            l = mid + 1
        }
    }

    return l
}


// let leftIndex = searchLeftBoard(arr, 3)

// let rightIndex = searchRightBoard(arr, 3)

// console.log('leftIndex', leftIndex,rightIndex);



var isPerfectSquare = function (num) {
    let l = 0, r = num;
    while (l < r) {
        let mid = l + parseInt((r - l) / 2);
        console.log('mid', mid, l, r);

        if (mid * mid > num) {
            r = mid - 1
        } else if (mid * mid < num) {
            l = mid + 1
        } else {
            return true
        }
    }
    return false
};

var twoSum = function (numbers, target) {

    //固定一个数，使用二分,变成升序数组中查找目标值
    for (let i = 0; i < numbers.length; i++) {
        let v = target - numbers[i]
        let index = check(numbers, v)
        if (index) {
            return [i, index]
        }
    }
};

//twoSum([1,2,4,6,10],8)

function check(numbers, target) {
    let l = 0, r = numbers.length - 1;
    while (l <= r) {
        let mid = l + ((r - l) >>> 1);
        if (numbers[mid] > target) {
            r = mid - 1
        } else if (numbers[mid] < target) {
            l = mid + 1
        } else {
            return mid
        }
    }
}




var searchMatrix = function (matrix, target) {
    //两次二分，第一次先确定行，第二次确定目标值
    let rowLength = matrix[0].length - 1;
    let l = 0, r = matrix.length - 1;

    while (l < r) {
        let mid = l + (r - l >>> 1);
        if (matrix[mid][rowLength] > target) {
            r = mid
        } else if (matrix[mid][rowLength] < target) {
            l = mid + 1;
        } else {
            return true
        }
    }

    if (matrix[l][0] > target) {
        return false
    }

    let rowl = 0, rowr = matrix[l].length - 1;

    while (rowl <= rowr) {
        let mid = rowl + (rowr - rowl >>> 1);
        if (matrix[l][mid] > target) {
            rowr = mid - 1
        } else if (matrix[l][mid] < target) {
            rowl = mid + 1;
        } else {
            return true
        }
    }
    return false
};

var a = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
var b = 1

// console.log(searchMatrix(a, b))

var findNumberIn2DArray = function (matrix, target) {
    if (!matrix.length) return false
    let rowLength = matrix[0].length - 1, rows = matrix.length - 1;
    let l = 0, r = rows;
    while (l <= rowLength && r >= 0 && r <= rows) {
        if (matrix[r][l] > target) {
            r--
        } else if (matrix[r][l] < target) {
            l++
        } else {
            return true
        }
    }

    return false
};

// var a = [[-5]]
// var b = -10

// console.log(findNumberIn2DArray(a, b))


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//let nums = [1, 0, 1, 1, 1], target = 0
var search = function (nums, target) {
    let nl = nums.length - 1
    let l = 0, r = nl;
    while (l < r) {
        let mid = l + (r - l >>> 1);
        if (nums[mid] > nums[nl]) {
            l = mid + 1
        } else if (nums[mid] < nums[nl]) {
            r = mid
        } else {
            r--
        }
    }

    console.log('l',l);
    
    //找到旋转点
    //升序
    let l2, r2;
    if (l === 0) {
        l2 = 0, r2 = nl
    } else {
        if (nums[nl] > target) {
            l2 = l, r2 = nl
        } else if (nums[nl] < target) {
            l2 = 0, r2 = l
        } else {
            return nl
        }
    }
    while (l2 <= r2) {
        let mid = l2 + (r2 - l2 >>> 1);
        if (nums[mid] > target) {
            r2 = mid - 1
        } else if (nums[mid] < target) {
            l2 = mid + 1
        } else {
            return mid
        }
    }

    return -1
};



var search2 = function (nums, target) {
    let l = 0, r = nums.length - 1;
    //寻找旋转点
    while (l <= r) {
        let mid = l + (r - l >>> 1);
        //target在左区间
        if (target >= nums[0]) {
            //mid在左区间
            if (nums[mid] >= nums[0]) {
                //mid比target大
                if (nums[mid] > target) {
                    r = mid - 1;
                } else if (nums[mid] < target) {
                    l = l + 1
                } else {
                    return mid
                }
            } else {
                //mid 在右区间
                r = mid - 1
            }
        } else {
            //target在右区间
            //mid在左区间
            if (nums[mid] >= nums[0]) {
                l = mid + 1
            } else {
                //mid 在右区间
                //mid比target大
                if (nums[mid] > target) {
                    r = mid - 1;
                } else if (nums[mid] < target) {
                    l = l + 1
                } else {
                    return mid
                }
            }

        }
    }
    return -1
};


let nums = [1, 0, 1, 1, 1], target = 0

/**
 * 0 2 mid=1 
 * 1 2 mid=1
 * 2 2 mid =2 
 * 2 1
 * 
 */


console.log(search(nums, target))
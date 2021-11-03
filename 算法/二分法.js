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


//第一个大于=target的地方
function searchLeftBoard(nums, target) {

    //区间左闭右闭 [l,r]
    let l = 0, r = nums - 1;

    while (l <= r) {

    }

}
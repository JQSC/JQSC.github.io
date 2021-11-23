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

// let a = twoSum([2, 7, 11, 15], 9)

// console.log(a);

var l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
}

var l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    let head = null
    let next = null
    let n = 0;
    while (l1 || l2) {
        let v1 = 0, v2 = 0
        if (l1) v1 = l1.val
        if (l2) v2 = l2.val
        let val = parseInt(v1) + parseInt(v2) + parseInt(n);
        if (val >= 10) {
            n = 1
            val = val % 10
        }else{
            n=0
        }
        console.log('val', val);

        if (head) {
            next.next = new ListNode(val, null)
            next = next.next
        } else {
            head = new ListNode(val, null)
            next = head
        }
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    console.log('n',n);
    
    if (n = 1) {
        next.next = new ListNode(1, null)
    }
    
    console.log(head.next);
    return head
};


addTwoNumbers(l1, l2)
function longestPalindrome(str) {
    let m = new Map()
    let res = 0;
    for (let s of str) {
        let v = m.get(s);
        if (v && v > 0) {
            res += 2;
            m.delete(s);
        } else {
            m.set(s, 1);
        }
    }
    return res + (m.size ? 1 : 0)
}



//最长回文子串 暴力法 abcba
function longestPalindrome(str) {
    if (str.length === 1) return str;
    let maxStr = '';
    for (let i = 0; i < str.length; i++) {
        for (let y = 1; y < str.length; y++) {
            let v = str.slice(i, y + 1);
            if (verify(v)) {
                if (v.length > maxStr.length) {
                    maxStr = v;
                }
            }
        }
    }
    return maxStr
}


function verify(str) {
    return str.split('').reverse().join('') === str
}

//最长回文子串 中心扩散法  abcba
function longestPalindrome(str) {
    let left = 0, right = 0;
    let maxStart = 0;
    let maxLength = 0;
    let len = 1;
    for (let i = 0; i < str.length; i++) {
        left = i - 1;
        right = i + 1;

        //回文串偶数情况  如acca ，那么中心点就是cc，需要挪动初始的左右位置
        while (left >= 0 && str[left] === str[i]) {
            left--
            len++
        }
        while (right < str.length && str[right] === str[i]) {
            right++
            len++
        }

        //对比中心点外的左右字符
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--
            right++
            len += 2
        }

        if (len > maxLength) {
            maxLength = len;
            maxStart = left;
        }
        len = 1;
    }
    return str.slice(maxStart + 1, maxStart + 1 + maxLength)
}

// let res = longestPalindrome("cbb")

// console.log(res);




let c = [8, 8, 8, 2, 2, 4, 4, 3, 3, 6, 6]

function findOdd(arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        res = res ^ arr[i]
    }
    return res
}

let res=findOdd(c);
console.log(res);
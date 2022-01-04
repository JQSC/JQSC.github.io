//const fn = pipe(addOne, addTwo, addThree, addFour); // 传入pipe的四个函数都是已实现的
//fn(1); // 1 + 1 + 2 + 3 + 4 = 11，输出11

function pipe(addOne, addTwo, addThree, addFour) {

    const v = addOne + addTwo + addThree + addFour

    return (nums) => {
        return v + nums
    }
}


const str1 = "<html><div>123</div></html>"; // true
const str2 = "<div><div>123</div><div></div></div>"; // true
const str3 = "<html><div>123<html1></div>"; // false

function isVaild(str1) {
    var htmlRegex = /<([a-zA-Z]*)>.*<\/\1>/i   //   new RegExp("< （[A-ZA-Z] [A-ZA-Z0-9] *）\b [^>] *>（？*）< / \1>"); 
    return htmlRegex.test(str1)   
}
console.log(isVaild(str1)) 
console.log(isVaild(str2)) 
console.log(isVaild(str3)) 
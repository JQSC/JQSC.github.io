window.onerror = function (message, source, lineno, colno, error) {
    console.log('捕获到异常：', { message, source, lineno, colno, error });
}

//捕获
window.addEventListener('error', (error) => {
    console.log('捕获到addEventListener异常：', error);
}, true)


window.addEventListener("unhandledrejection", function (e) {
    console.log('捕获到unhandledrejection异常：', e);
},true);



//运行时错误
//console.log(a)

//语法错误
//const a;

//异步错误
// setTimeout(() => {
//     console.log(notdefined);
// }, 0) 

//new Image 错误
//new Image().src = 'https://yun.tuia.cn/image/lll.png'

//fetch错误
// fetch('https://tuia.cn/test')


//promise错误
new Promise((resolve, reject) => {
   //JSON.parse('')
    reject();
})
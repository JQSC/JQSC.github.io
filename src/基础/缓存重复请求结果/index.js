// 利用闭包对每个请求缓存了两个独立的变量： `isActive、cache`

// 每次异步请求前判断 `isActive` 状态，如果为 `false` 则执行异步请求，并缓存请求的返回值promise，
//如果为 `true` 则直接返回上次的缓存 `cache` 。

function request() {
    let isActive = false;
    let cache = null;
    return () => {
        console.log('执行异步请求')
        if (isActive) return cache
        isActive = true
        console.log('开始 Promise')
        cache = new Promise((rsolve) => {
            setTimeout(() => {
                console.log('返回结果')
                isActive = false;
                rsolve(8888888888)
            }, 2000)
        })
        return cache
    }
}

let server = request();

server()
    .then((data) => {
        console.log(111111, data)
    })

server()
    .then((data) => {
        console.log(2222, data)
    })
server()
    .then((data) => {
        console.log(3333, data)
    })



//export default request();
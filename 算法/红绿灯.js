/*
红灯亮a秒亮黄灯，黄灯亮b秒，亮绿灯，重复此过程。
*/

function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time * 1000)
    })
}

//亮哪个灯，亮几秒
function light(color, time) {
    return new Promise((resolve, reject) => {
        console.log('开启: ', color);
        setTimeout(() => {
            console.log('关闭: ', color)
            resolve()
        }, time * 1000)
    })
}

async function run() {
    while (true) {
        await light('红', 4);
        await light('黄', 2);
        await light('绿', 3);
    }
}

run()
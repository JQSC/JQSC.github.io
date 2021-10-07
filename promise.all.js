//所有promise都resolve
function promiseAll(arr) {
    return new Promise((resolve, reject) => {
        let res = []
        let l = arr.length;
        let nums = 0;
        for (let i = 0; i < l; i++) {
            let promise = arr[i];
            promise.then(
                (value) => {
                    res[i] = value;
                    nums++
                    if (nums === l) {
                        resolve(res)
                    }
                }),
                (err) => {
                    reject(err)
                }
        }
    })
}
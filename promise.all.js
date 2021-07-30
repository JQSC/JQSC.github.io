function promiseAll(arr) {
    return new Promise((resolve, reject) => {
        let res = []
        let l = arr.length;

        for (let i = 0; i < l; i++) {
            let promise = arr[i];
            promise.then((value) => {
                res.push(value)
                if (res.length === l) {
                    resolve(res)
                }
            })
        }
    })
}


function Observer() {

    const publisher = {};

    return {
        addEventListener(type, callback) {
            if (!publisher[type]) {
                publisher[type] = [];
            }
            if (callback) {
                publisher[type].push(callback)
            }
        },
        removeListener(type, fn) {
            let fns = publisher[type];
            if (!fns) return;
            if (!fn) fns = [];

            for (let i in fns) {
                if (fns[i] === fn) {
                    fns.splice(i, 1);
                    break;
                }
            }

        },
        click() {
            if (!publisher.click) return;
            publisher.click.map((fn) => {
                fn.apply(this, arguments)
            })
        }
    }
}


let a = Observer();
let b = function (text) {
    console.log('bbbb', text)
}
let c = function (text) {
    console.log('cccc', text)
}
a.addEventListener('click', b)
a.addEventListener('click', c)

a.removeListener('click', b)

a.click(111);

import ErrorBoundary from './ErrorBoundary'

// window.onerror = function (message, source, lineno, colno, error) {
//     console.log('捕获到异常：', { message, source, lineno, colno, error });
// }

window.addEventListener('error', (errorInfo) => {
    const { message, filename, lineno, colno, error } = errorInfo;

    const errorId = `${+new Date()}@${randomString(8)}`
    const eventId = compressString(String(message), String(colno) + String(lineno))

    const errorReport = {
        id:errorId,
        eventId,
        message,
        url:filename,
        lineno,
        colno,
        error
    }

    console.log('捕获到异常：', errorReport);
}, true)


//错误条目
function randomString(len) {
    len = len || 32;
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    let maxPos = chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

//通过message、colno与lineno进行相加计算阿斯克码值，可以生成错误的errorKey。
//错误事件，过滤重复的错误
function compressString(str, key) {
    let chars = 'ABCDEFGHJKMNPQRSTWXYZ';
    if (!str || !key) {
        return 'null';
    }
    let n = 0,
        m = 0;
    for (let i = 0; i < str.length; i++) {
        n += str[i].charCodeAt();
    }
    for (let j = 0; j < key.length; j++) {
        m += key[j].charCodeAt();
    }
    let num = n + '' + key[key.length - 1].charCodeAt() + m + str[str.length - 1].charCodeAt();
    if (num) {
        num = num + chars[num[num.length - 1]];
    }
    return num;
}


















function App(props) {

    console.log(a)

    return (
        <div>
            hello world {props.name}
        </div>
    )
}


function Index() {
    return (
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    )
}




export default Index
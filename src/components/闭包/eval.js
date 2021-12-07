function func1() {
    const text1 = 'chi'
    function func2() {
        const text2 = 'sheng'
        eval('console.log(text1)')
    }
    return func2
}

function ee(code) {
    eval(code)
}

const func2 = func1();

func2()
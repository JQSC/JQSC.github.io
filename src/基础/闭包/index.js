function fun1() {
    const text1 = 'chi'
    var text11 = 'chi11'
    console.log(text1)
    function fun2() {
        const text2 = 'sheng'
        console.log(text2)
        console.log(text1)
    }
    fun2()
    // return fun2
}


const fun2 = fun1();
// fun2();
/*
创建1个对象
对象的原型指向构造函数的原型
函数执行动态绑定this为创建的这个对象
构造函数返回值是对象则返回构造函数的返回值，如果不是则返回创建的对象
*/
function myNew() {
    let constructor = Array.prototype.shift.call(arguments);
    //let o = Object.create(constructor.prototype);
    //console.log(o.getName)
    let  o={}
    o.prototype=constructor.prototype
    let res = constructor.apply(o, arguments);
    return (res instanceof Object) ? res : o;
}

function A(name, sex) {
    this.name = name
    this.sex = sex
}

A.prototype.getName=function(){
    console.log(this.name)
}
let o = myNew(A, 'csq', 1);
o.getName()
console.log(o.name, o.sex);


// function test(){
//     this.name="csq"
// }

// test.prototype.getName=function(){
//     console.log(this.name)
// }

// var  a={}
// test.apply(a);
// console.log(a.getName)

function newObject(constructor) {
    Array.prototype.shift.call(arguments);

    let o = Object.create(constructor.prototype);

    constructor.apply(o, arguments);

    return o
}


function newObject2(constructor) {
    let o = {};
    o.__proto__ = constructor;
    Array.prototype.shift.call(arguments);

    constructor.apply(o, arguments);

    return o
}



function a() {
    this.age = "csq"
}

let b = newObject(a)

console.log(b.age);




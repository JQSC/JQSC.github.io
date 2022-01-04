
//观察者
function Observe() {}

Observe.prototype.update = function () { }

//被观察者，事件的发起者
function Subject() {
    this.observerList = []
}

Subject.prototype.addObserver = function (observer) {
    this.observerList.push(observer)
}

Subject.prototype.notify = function () {
    this.observerList.forEach(observer => {
        observer.update()
    })
}


//迷宫例子
//在已个小游戏里有一个迷宫，迷宫里有怪物、陷阱和宝物。
//一旦主角移动到怪物的有效范围，怪物会袭击主角；主角移动到陷阱的有效范围，陷阱会困住主角；主角移动到宝物的有效范围，宝物会为主角加血。

//怪物接口,继承抽象类
function Monster() {
    Observe.call(this);
}

Monster.prototype.update = function () {
    if (this.inRange()) {
        console.log("怪物 对主角攻击！")
    }
}

Monster.prototype.inRange = function () {
    return true
}

//主角需要继承Subject类
function Hero() {
    Subject.call(this);
}

Hero.prototype = Object.create(Subject.prototype);

Hero.prototype.constructor = Hero;

Hero.prototype.move = function () {
    console.log("主角向前移动")
    this.notify();
}


//初始化对象
const hero = new Hero();
const monster = new Monster();
//注册观察者
hero.addObserver(monster)
//移动事件
hero.move()

//发布订阅
function EventEmitter() {
    this.eventListener = {};
}

EventEmitter.prototype.on = function (name, callback) {
    if (!this.eventListener[name]) {
        this.eventListener[name] = [];
    }
    this.eventListener[name].push(callback);
}

EventEmitter.prototype.emit = function (name, ...args) {
    let events = this.eventListener[name] || [];
    events.forEach(callback => {
        callback(...args);
    })
}

//迷宫例子
//在已个小游戏里有一个迷宫，迷宫里有怪物、陷阱和宝物。
//一旦主角移动到怪物的有效范围，怪物会袭击主角；主角移动到陷阱的有效范围，陷阱会困住主角；主角移动到宝物的有效范围，宝物会为主角加血。
function Monster() {}

Monster.prototype.update = function () {
    if (this.inRange()) {
        console.log("怪物 对主角攻击！")
    }
}

Monster.prototype.inRange = function () {
    return true
}

function Hero() {
}
Hero.prototype.move = function (callback) {
    console.log("主角向前移动")
    callback()
}
//初始化对象
const hero = new Hero();
const monster = new Monster();
const eventEmitter = new EventEmitter();
//注册订阅者
eventEmitter.on('move', () => monster.update());
//主角移动
hero.move(() => eventEmitter.emit('move'))

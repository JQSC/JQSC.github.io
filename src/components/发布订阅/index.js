
//发布订阅
const eventEmitter = {

    cache: {},
    on: function (name, callback, isOnce) {
        if (!eventEmitter.cache[name]) {
            eventEmitter.cache[name] = [];
        }
        eventEmitter.cache[name].push({ callback, isOnce });
    },
    once: function (name, callback) {
        eventEmitter.on(name, callback, true)
    },
    remove: function (name, callback) {
        if (eventEmitter.cache[name]) {
            let index = eventEmitter.cache[name].findIndex((item) => item.callback === callback);

            if (index > -1) {
                console.log( index)
                eventEmitter.cache[name].splice(index, 1);
            }
        }
    },
    emit: function (name, ...args) {
        let events = eventEmitter.cache[name] || [];
        for (let i = 0; i < events.length; i++) {
            let event = events[i];
            event.callback(...args);
            if (event.isOnce) {
                events.splice(i, 1)
            }
        }
    }
}

eventEmitter.on("push", (str) => {
    console.log('push', str)
})

const push2=(str) => {
    console.log('push2', str)
}
eventEmitter.on("push", push2)

eventEmitter.once("push", (str) => {
    console.log('once', str)
})

eventEmitter.remove("push", push2)
eventEmitter.emit('push', "test")
eventEmitter.emit('push', "test2")
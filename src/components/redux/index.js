
const { createStore } = require('redux');

const bindActionCreators = require('./bindActionCreator')


function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

//创建数据池
let store = createStore(counterReducer)

//订阅store的变化
let unsubscribe = store.subscribe(() => console.log(store.getState()))


//绑定action 和 dispatch
bindActionCreators(store);


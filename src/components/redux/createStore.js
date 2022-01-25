
const { createStore } = require('redux');
const applyMiddleware =require('./applyMiddleware')

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

function counterReducer2(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented2':
            return { value: state.value + 1 }
        case 'counter/decremented2':
            return { value: state.value - 1 }
        default:
            return state
    }
}

function combineReducers(state = {}, action) {
    let state1 = counterReducer(state.state1, action);
    let state2 = counterReducer2(state.state2, action);

    return {
        state1,
        state2
    }
}

//创建数据池
function create() {
    let store = createStore(combineReducers,applyMiddleware());

    return store
}


module.exports = create

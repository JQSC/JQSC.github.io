
const { bindActionCreators } = require('redux');

//action 用函数包装
function incremented() {
    return { type: 'counter/incremented' }
}

function decremented() {
    return { type: 'counter/decremented' }
}

function incremented2() {
    return { type: 'counter/incremented2' }
}

function decremented2() {
    return { type: 'counter/decremented2' }
}

//store.dispatch(incremented())
// {value: 1}
//store.dispatch(incremented())
// {value: 2}
//store.dispatch(decremented())
// {value: 1}


function bindActionDispatch(store) {
    //绑定store.dispatch与actionCreator
    const incrementedAction = bindActionCreators(incremented, store.dispatch);
    const decrementedAction = bindActionCreators(decremented, store.dispatch);

    const incrementedAction2 = bindActionCreators(incremented2, store.dispatch);
    const decrementedAction2 = bindActionCreators(decremented2, store.dispatch);

    incrementedAction()
    incrementedAction()
    decrementedAction()

    incrementedAction2()
    incrementedAction2()
    decrementedAction2()
}



module.exports = bindActionDispatch;
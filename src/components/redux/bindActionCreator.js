
const { bindActionCreators } = require('redux');

//action 用函数包装
function incremented() {
    return { type: 'counter/incremented' }
}

function decremented() {
    return { type: 'counter/decremented' }
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

    incrementedAction()
    incrementedAction()
    decrementedAction()
}



module.exports = bindActionDispatch;
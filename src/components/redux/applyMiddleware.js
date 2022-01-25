// const { createStore } = require('redux');

function logger({ getState }) {
    return next => action => {
        console.log('will dispatch', action)

        // 调用 middleware 链中下一个 middleware 的 dispatch。
        const returnValue = next(action)

        console.log('state after dispatch', getState())

        // 一般会是 action 本身，除非
        // 后面的 middleware 修改了它。
        return returnValue
    }
}

// createStore(combineReducers,applyMiddleware(logger));
//enhancer(createStore)(reducer, preloadedState);
function applyMiddleware(middlewares) {
    return (createStore) => {
        return (reducer, preloadedState) => {
            const store = createStore(reducer, preloadedState);

            const middlewareAPI = {
                getState: store.getState,
                dispatch: (...args) => dispatch(...args),
            }

            const chain = middlewares(middlewareAPI);

            store.dispatch = chain(store.dispatch);

            return store
        }
    }
}



module.exports = function middleware() {
    return applyMiddleware(logger)
}
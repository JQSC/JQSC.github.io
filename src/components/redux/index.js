
const createStore = require('./createStore');

const bindActionCreators = require('./bindActionCreator')


let store = createStore();

//订阅store的变化
//let unsubscribe = store.subscribe(() => console.log(store.getState()))


//绑定action 和 dispatch
bindActionCreators(store);


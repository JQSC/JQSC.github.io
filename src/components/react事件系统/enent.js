//原生事件包装为合成事件
class SyntheticEvent {
    constructor(e) {
        this.nativeEvent = e;
    }
    stopPropagation() {
        this._stopPropagation = true;
        if (this.nativeEvent.stopPropagation) {
            this.nativeEvent.stopPropagation();
        }
    }
}


//收集事件回调
const collectPaths = (type, fiber) => {

    const paths = [];
    // 1 ClassComponent
    // 3 HostRoot
    // 5 HostComponent
    while (fiber.tag !== 3) {
        const { memoizedProps, tag } = fiber;

        if (tag === 5) {
            const eventName = ("on" + type).toUpperCase();

            if (memoizedProps && Object.keys(memoizedProps).includes(eventName)) {
                const pathNode = {};
                pathNode[type.toUpperCase()] = memoizedProps[eventName];
                paths.push(pathNode);
            }

        }
        fiber = fiber.return
    }

    return paths
}

//模拟捕获和冒泡
const triggerEventFlow = (paths, type, nativeEvent) => {
    // 从后向前遍历
    for (let i = paths.length; i--;) {
        const pathNode = paths[i];
        const callback = pathNode[type];

        if (callback) {
            // 存在回调函数，传入合成事件，执行
            callback.call(null, nativeEvent);
        }
        if (nativeEvent._stopPropagation) {
            // 如果执行了se.stopPropagation()，取消接下来的遍历
            break;
        }
    }
};


const dispatchEvent = (e, type) => {
    // 包装合成事件
    const nativeEvent = new SyntheticEvent(e);
    const ele = e.target;

    // 比较hack的方法，通过DOM节点找到对应的FiberNode
    let fiber;
    for (let prop in ele) {
        if (prop.toLowerCase().includes("fiber")) {
            fiber = ele[prop];
            console.log(prop, fiber)
        }
    }

    // 第三步：收集从根节点到触发点路径内所有该事件的“回调函数”
    const paths = collectPaths(type, fiber);

    // // 第四步：捕获阶段的实现
    // triggerEventFlow(paths, type + "CAPTURE", nativeEvent);

    // // 第五步：冒泡阶段的实现
    if (!nativeEvent._stopPropagation) {
        triggerEventFlow(paths.reverse(), type, nativeEvent);
    }
};


//绑定根节点事件
const addEvent = (container, type) => {
    container.addEventListener(type, (e) => {
        // dispatchEvent是需要实现的“根节点的事件回调”
        dispatchEvent(e, type.toUpperCase(), container);
    });
}



export default addEvent
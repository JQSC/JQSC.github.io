//深度优先遍历

//递归版
function Node(name, children) {
    this.name = name; this.children = children;
}
function dfs(node) {
    console.log('探寻阶段: ', node.name);
    node.children.forEach(child => {
        dfs(child);
    });
    console.log('回溯阶段: ', node.name);
}

//react 版
function workLoopSync(workInProgress) {
    while (workInProgress) {
        console.log('探寻阶段: ', workInProgress.name)
        //创建Fiber
        let next = beginWork(workInProgress);
        if (!next) {
            next = completeUnitOfWork(workInProgress)
            console.log('回溯阶段: ', workInProgress.name);
        }
        workInProgress = next
    }
}

function beginWork(workInProgress) {
    let children = workInProgress.children
    if (children.length) {
        return children[0]
    }
}

function completeUnitOfWork(workInProgress) {
    console.log(workInProgress.name)
}

let tree = [
    {
        name: '1', children: [
            { name: '1.1', children: [] },
            { name: '1.2', children: [] },
            { name: '1.3', children: [] }
        ]
    },
    {
        name: '2', children: [
            {
                name: '2.1', children: [
                    { name: '2.1.1', children: [] }
                ]
            },
        ]
    },
    {
        name: '3', children: []
    },

]

let node = new Node('node', tree);

workLoopSync(node)
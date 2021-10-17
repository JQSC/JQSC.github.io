const routerConfig = [
    {
        path: '/request/:processKey',
        request: request,
        text: '没有匹配的路由地址，需要异步获取path',
    },
    {
        path: '/:id(create|edit)/:id?',
        component: ComponentText,
        text: '匹配Create、Edite以及它们带id的情况'
    },
    {
        path: '*',
        component: ComponentText,
        text: '匹配不到路由显示默认页面'
    }
]


function request(processKey) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("/create")
        }, 2000)
    })
}

function ComponentText(props) {
    return <div>{props.text}</div>
}

export default routerConfig
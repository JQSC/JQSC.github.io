const routerConfig = [
    {
        path: '/request/process/:processId',
        request: request,
        text: '需要调用指定request接口的情况',
    },
    {
        path: '/task/edit/:id?',
        component: ComponentText,
        text: '创建及编辑页面'
    },
    {
        path: '/task/copy/:id?',
        component: ComponentText,
        text: '审核页面'
    },
    {
        path: '/list',
        component: ComponentText,
        text: '列表'
    },
    {
        path: '/dashboard',
        component: ComponentText,
        text: '匹配不到路由显示默认页面'
    },
    {
        path: '*',
        redirect: '/dashboard'
    }
]


function request(processKey) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: 200,
                path: "/task/edit/123"
            })
        }, 2000)
    })
}

function ComponentText(props) {
    return <div>{props.text}</div>
}


export default routerConfig
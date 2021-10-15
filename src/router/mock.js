export const menuConfig = [
    {
        url: '/', title: 'Home'
    },
    {
        url: '/create', title: 'Create'
    },
    {
        url: '/create/123', title: 'Create带id'
    },
    {
        url: '/edit', title: 'Edit'
    },
    {
        url: formatUrl('/a/b?process=2'), title: '异步加载重定向'
    },
    {
        url: '/123123213', title: '不存在的路由'
    }
]


function formatUrl(url) {
    const search = url.split('?')[1];
    if (search && search.indexOf('process') > -1) {
        //增加特定标识
        return {
            pathname: '/request/processKey123' + url
        }
    }
    return url
}



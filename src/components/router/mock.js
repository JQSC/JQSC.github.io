const menuConfig = [
    {
        url: '/', title: 'Home'
    },
    {
        url: '/task/edit?processKey=2', title: 'Create'
    },
    {
        url: '/task/copy', title: 'Check'
    },
    {
        url: '/dashboard', title: '不存在的路由'
    }
]


export const menu = menuConfig.map((item) => {
    item.url = formatUrl(item.url);
    return item
})


function formatUrl(url) {
    const search = url.split('?')[1];
    if (search && search.indexOf('processKey') > -1) {
        //增加特定标识
        return {
            pathname: `/request/process/2`
        }
    }
    return url
}



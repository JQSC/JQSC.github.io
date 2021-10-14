import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { useState, useEffect } from 'react'
import './index.styl'


const routerConfig = [
    {
        path: '/request/:processKey',
        component: RequestComp,
        text: '包含process'
    },
    {
        path: '/:id(create|edit)/:id?',
        component: ComponentText,
        text: 'create或者edite'
    },
    {
        path: '*',
        component: ComponentText,
        text: '匹配不到的情况'
    }
]


const menuConfig = [
    {
        url: '/', name: 'Home'
    },
    {
        url: '/create', name: '导航create'
    },
    {
        url: '/create/123', name: '导航create带id'
    },
    {
        url: '/edit', name: '导航edit'
    },
    {
        url: '/a/d/c?process=2', name: '异步加载'
    },
    {
        url: '/123123213', name: '不存在导航'
    }
]

function RouterComp() {

    return (
        <div className={'router'}>
            <Router>
                {
                    menuConfig.map((item, i) => {
                        const { url, name } = item;
                        return <h2 key={i}><Link to={formatUrl(url)} >{name}</Link></h2>
                    })
                }
                <Switch>
                    {
                        routerConfig.map((routeConfig, i) => {
                            const { path, component: ComponentWrapper, text } = routeConfig;
                            return <Route key={i} path={path} render={() => <ComponentWrapper text={text} />} />
                        })
                    }

                </Switch>
            </Router>
        </div>
    )
}

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

function RequestComp(props) {
    const [state, setState] = useState();
    const { processKey } = useParams()

    useEffect(() => {
        setTimeout(() => {
            setState(processKey)
        }, 2000)

    }, [])

    return <div>{state}</div>
}


function ComponentText(props) {

    return <div>{props.text}</div>
}

export default RouterComp
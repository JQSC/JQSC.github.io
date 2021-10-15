import {
    useParams,
    useHistory,
    useLocation
} from "react-router-dom";

import { useState, useEffect } from 'react'

function RouterBefore(props) {
    const { route, tabsRef } = props;
    const { component: Component, text, redirect } = route;
    const { processKey } = useParams();
    const history = useHistory();
    const location = useLocation()

    useEffect(
        () => {
            let isDestory = false;
            //无组件，则发起请求获取path，请求发生时阻止其他跳转行为
            if (redirect) {
                redirect(processKey).then((path) => {
                    //判断当前路由是否发生了跳转，如果没有在执行
                    if (isDestory) return;
                    history.push(path);
                })

            } else {
                //如果是正常组件，则创建页签
                const { panes, setPanes, setActiveKey } = tabsRef.current;
                setPanes([...panes, {
                    url: location.pathname,
                    title: 1111
                }])
                setActiveKey(panes.length)
                console.log('location', location)
            }
            return () => {
                isDestory = true;
            }
        },
        [redirect, processKey, history, tabsRef, location]
    )

    return <div>{Component ? <Component text={text} /> : 'Loading...'}</div>
}


export default RouterBefore
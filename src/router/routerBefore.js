import {
    useParams,
    useHistory,
    useLocation
} from "react-router-dom";

import { useState, useEffect } from 'react'

function RouterBefore(props) {
    const { route, tabsRef } = props;
    const { component: Component, text, request, redirect } = route;
    const { processId } = useParams();
    const history = useHistory();
    const location = useLocation()

    useEffect(
        () => {
            let isDestory = false;
            if (redirect) {
                return history.push(redirect);
            }
            //发起请求获取path
            if (request) {
                request(processId).then((res) => {
                    const { status, path } = res;
                    //根据当前组件是否被销毁判断当前路由是否发生了跳转，如果没有在执行
                    if (!isDestory) {
                        if (status === 200 && path) {
                            history.push(path);
                        } else {
                            history.push('/');
                        }
                    }
                })
            } else {
                //如果是正常组件，则创建页签
                const { createTab } = tabsRef.current;
                createTab({
                    url: location.pathname,
                    title: text
                })
            }
            return () => {
                isDestory = true;
            }
        },
        [request, processId, history, tabsRef, location]
    )

    return <div>{Component ? <Component text={text} /> : null}</div>
}


export default RouterBefore
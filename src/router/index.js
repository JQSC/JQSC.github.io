import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { useState, useRef, forwardRef } from 'react';
import { menu } from './mock'
import routerConfig from './router.config'
import RouterBefore from './routerBefore'
import Tabs from './tabs'

import './index.styl'

const TabsRef = forwardRef(Tabs);

function App() {

    const tabsRef = useRef();

    return (
        <div className={'router'}>
            <Router>
                <div className={'menu'}>
                    {
                        menu.map((item, i) => {
                            const { url, title } = item;
                            return <h2 key={i}><Link to={url} >{title}</Link></h2>
                        })
                    }
                </div>
                <div className={'content'}>
                    <TabsRef ref={tabsRef} />
                    <Switch>
                        {
                            routerConfig.map((routeConfig, i) => {
                                return <Route key={i} path={routeConfig.path} render={() => <RouterBefore route={routeConfig} tabsRef={tabsRef} />} />
                            })
                        }

                    </Switch>
                </div>

            </Router>
        </div>
    )
}


export default App
import { Tabs, Button } from 'antd';
import { useState, useImperativeHandle } from 'react';
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;


function TabsWrapper(props, ref) {

    const [panes, setPanes] = useState([]);

    const [activeKey, setActiveKey] = useState();

    const history = useHistory();

    const onChange = (activeIndex) => {
        let pane = panes[activeIndex];
        if (pane && pane.url) {
            history.push(pane.url);
        }
    }

    useImperativeHandle(ref, () => {
        return {
            panes,
            setPanes: setPanes,
            activeKey,
            setActiveKey: setActiveKey,
            createTab: (tab) => {
                const { url } = tab;
                if (!url) return;
                //判断页签是否已存在
                const isExist = panes.find((item) => item.url === url);
                if (isExist) {
                    setActiveKey(url);
                } else {
                    setPanes([...panes, tab])
                    setActiveKey(url)
                }
            }

        }
    }, [panes, activeKey])

    return (
        <Tabs
            hideAdd
            onChange={onChange}
            activeKey={activeKey}
            type="editable-card"
        >
            {panes.map((pane, index) => (
                <TabPane tab={pane.title} key={pane.url} />
            ))}
        </Tabs>
    )
}

export default TabsWrapper
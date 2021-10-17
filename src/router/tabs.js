import { Tabs, Button } from 'antd';
import { useState, useImperativeHandle } from 'react';
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;


function TabsWrapper(props, ref) {

    const [panes, setPanes] = useState([{ url: '/', title: 'Tab 1' }]);

    const [activeKey, setActiveKey] = useState(0);

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
                if (url) {
                    setPanes([...panes, tab])
                    setActiveKey(panes.length)
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
                <TabPane tab={pane.title} key={index} />
            ))}
        </Tabs>
    )
}

export default TabsWrapper
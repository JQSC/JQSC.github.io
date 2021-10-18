import { Tabs, Button } from 'antd';
import { useState, useImperativeHandle } from 'react';
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;


function TabsWrapper(props, ref) {

    const [panes, setPanes] = useState([]);

    const [activeKey, setActiveKey] = useState();

    const history = useHistory();

    const onChange = (path) => {
        let isExist = panes.find((item) => item.url === path);
        if (isExist) {
            history.push(path);
        }
    }

    const onDelete = (path) => {
        //判断当前页签个数，如果只剩一个则无法删除
        if (panes.length === 1) return;

        let paneIndex = panes.findIndex((item) => item.url === path);
        if (paneIndex > -1) {
            let newPanes = JSON.parse(JSON.stringify(panes));
            newPanes.splice(paneIndex, 1);
            setPanes(newPanes);
            //判断移除的是否是当前激活的页签
            if (path === activeKey) {
                let lastPane = newPanes[newPanes.length - 1];
                history.push(lastPane.url);
            }
        }
    }

    const createTab = (tab) => {
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

    useImperativeHandle(ref, () => {
        return {
            panes,
            setPanes: setPanes,
            activeKey,
            setActiveKey: setActiveKey,
            createTab

        }
    }, [panes, activeKey])

    return (
        <Tabs
            hideAdd
            onChange={onChange}
            onEdit={onDelete}
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
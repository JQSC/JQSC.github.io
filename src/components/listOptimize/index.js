import { Tabs } from 'antd';
import './index.styl'
import LazyRender from './LazyRender';
import ViewRender from './ViewRender';
const { TabPane } = Tabs;

function List() {

    return (
        <div className={'list'}>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="延迟渲染" key="1">
                    <LazyRender />
                </TabPane>
                <TabPane tab="可视区渲染" key="2">
                    <ViewRender />
                </TabPane>
            </Tabs>

        </div>

    )
}

export default List
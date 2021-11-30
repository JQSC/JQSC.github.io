import { Button, Tabs } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';
import FormSizeDemo from './FormSizeDemo.js'
import Iframe from './Iframe'
import './index.styl'

const { TabPane } = Tabs;

function DomToImg() {
    const [dataUrl, setDataUrl] = useState();

    const [visible, setVisible] = useState(false);

    const [activeIndex, setActiveIndex] = useState('0');

    const callback = (node) => {
        let ifr = document.getElementsByTagName('iframe')[0]
        let node2 = document.getElementsByClassName('dom')[0];
        let test = window.getComputedStyle(node2, null);
        console.log('style', test)

        return node
    }


    function convertCanvasToImage(canvas) {
        var image = new Image();
        image.src = canvas.toDataURL("image/png");
        return image;
    }

    const createImg = () => {
        let node = ''
        if (activeIndex == '1') {
            let ifr = document.getElementsByTagName('iframe')[0]
            node = ifr.contentWindow.document.getElementsByClassName('dom')[0];

        } else {
            node = document.getElementsByClassName('dom')[activeIndex];
        }

        console.log('node',node);
        
        html2canvas(node).then(function (canvas) {
            let imgWrapper = document.getElementsByClassName('component' + activeIndex)[0];
            // imgWrapper.innerHTML = ''
            let image=convertCanvasToImage(canvas)
            imgWrapper.appendChild(image);
            setVisible(true);

            

        });
    }

    const download = () => {
        //下载
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    }

    const onTabChange = (activeKey) => {
        setActiveIndex(activeKey)
    }

    const components = [
        {
            key: '0',
            title: 'from',
            component: FormSizeDemo
        },
        {
            key: '1',
            title: 'iframe',
            component: Iframe
        }
    ]

    return (
        <div className={'dom-to-img'}>
            <Button type={'primary'} onClick={createImg} className={'btn'}>指定区域生成快照</Button>
            <Button type="primary" icon={<DownloadOutlined />} onClick={download} style={{ display: visible ? 'inline-block' : 'none' }}>
                Download
            </Button>
            <div className={'dom-img-wrapper'} >
                <Tabs activeKey={activeIndex} onChange={onTabChange}>
                    {
                        components.map((item) => {
                            const { title, component: Component, key } = item;
                            return (
                                <TabPane tab={title} key={key}>
                                    <div className={'dom-img-from'}>
                                        <div className={'dom'}>
                                            {
                                                Component ? <Component /> : null
                                            }
                                        </div>
                                        <div className={'img component' + key} />
                                    </div>
                                </TabPane>
                            )
                        })
                    }
                </Tabs>
            </div>
        </div>
    )
}


export default DomToImg
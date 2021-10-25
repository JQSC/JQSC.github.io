import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import domtoimage from 'dom-to-image';
import { useEffect, useState } from 'react';
import FormSizeDemo from './FormSizeDemo.js'
import './index.styl'

function DomToImg() {
    const [dataUrl, setDataUrl] = useState();

    const [visible, setVisible] = useState(false)

    const createImg = () => {
        const node = document.getElementsByClassName('dom')[0];

        domtoimage.toPng(node)
            .then(function (dataUrl) {
                let imgWrapper = document.getElementsByClassName('img')[0];
                let img = new Image();
                img.src = dataUrl;
                imgWrapper.innerHTML = ''
                imgWrapper.appendChild(img);
                setDataUrl(dataUrl);
                setVisible(true);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    const download = () => {
        //下载
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    }

    return (
        <div className={'dom-to-img'}>
            <Button type={'primary'} onClick={createImg} className={'btn'}>指定区域生成快照</Button>
            <Button type="primary" icon={<DownloadOutlined />} onClick={download} style={{ display: visible ? 'inline-block' : 'none' }}>
                Download
            </Button>
            <div className={'dom-img-wrapper'}>
                <div className={'dom'}>
                    <FormSizeDemo />
                </div>
                <div className={'img'}></div>
            </div>
        </div>
    )
}


export default DomToImg
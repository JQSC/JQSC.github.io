import { Button, List, Input } from 'antd';
import { useState } from 'react'
import diff_match_patch from './diff-match'

import './index.styl'

function diff_prettyHtml(diffs) {
    let html = '';

    //判断文本是否存在差异
    if (diffs.length === 1 && diffs[0][0] === 0) return diffs[0][1];

    for (let item of diffs) {
        let [type, value] = item;
        switch (type) {
            case 0:
                break;
            case -1:
                value = `<del class="cg-diff-delete">${value}</del>`
                break;
            case 1:
                value = `<ins class="cg-diff-add">${value}</ins>`
                break
            default:
                break
        }
        html += value;
    }

    return `<p class="cg-diff-paragraph">${html}</p>`
}

function DiffText() {

    const [text1, setText1] = useState(11111);
    const [text2, setText2] = useState(11222)

    const [difftext, setDifftext] = useState('');

    const onClick = () => {
        const dmp = new diff_match_patch();
        const diffs = dmp.diff_main(text1.toString(), text2.toString());
        const formatDiffs = diff_prettyHtml(diffs)
        console.log('diffs', diffs)
        setDifftext(formatDiffs);
    }

    const onChange = (e) => {
        const { value } = e.target;
        setText1(value)
    }

    const onChange2 = (e) => {
        const { value } = e.target;
        setText2(value)
    }

    return (
        <div className={'diff'}>
            <Button type="primary" onClick={onClick} >
                Compare
            </Button>
            <div className={'diff-text'}>
                <List
                    className={'list'}
                    header={<div>原始文本</div>}
                    bordered
                    dataSource={[text1]}
                    renderItem={item => (
                        <List.Item>
                            <Input value={text1} onChange={onChange} />
                        </List.Item>
                    )}
                />

                <List
                    className={'list'}
                    header={<div>变动文本</div>}
                    bordered
                    dataSource={[text2]}
                    renderItem={item => (
                        <List.Item>
                            <Input value={text2} onChange={onChange2} />
                        </List.Item>
                    )}
                />
            </div>
            <List
                className={'diff-html'}
                header={<div>差异</div>}
                bordered
                dataSource={[difftext]}
                renderItem={item => (
                    <List.Item >
                        <div dangerouslySetInnerHTML={{ __html: item }}></div>
                    </List.Item>
                )}
            />
        </div>

    )
}

export default DiffText
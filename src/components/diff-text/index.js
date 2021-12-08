import { Button, List } from 'antd';
import { useState } from 'react'
import diffPath from './diff-match'

import './index.styl'

function DiffText() {

    const [text1, setText1] = useState('text1');
    const [text2, setText2] = useState('text2')

    const onClick = () => {
        console.log('diffPath',diffPath)
    }

    return (
        <div className={'diff'}>
            <Button type="primary" onClick={onClick} >
                Diff
            </Button>
            <div className={'diff-text'}>
                <List
                    className={'list'}
                    header={<div>原始文本</div>}
                    bordered
                    dataSource={[text1]}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />

                <List
                    className={'list'}
                    header={<div>差异文本</div>}
                    bordered
                    dataSource={[text2]}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>

    )
}

export default DiffText
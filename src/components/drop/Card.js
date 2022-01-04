import { Card } from 'antd'
import React, { useState } from 'react'
import Drawer from './Drawer.js'

function CardWrapper(props, ref) {

    const { draggableProps, title, component, style } = props

    const [visible, setVisible] = useState(false)

    const more = () => {
        setVisible(true)
    }

    const onClose = () => {
        setVisible(false)
    }

    return (
        <div
            className={'card'}
            ref={ref}
            {...draggableProps}
        >
            <Card
                className={'card-body'}
                style={style}
                loading={true}
                hoverable={true}
                title={title}
                bordered={false}
                extra={<a href="#" onClick={more}>More</a>}
            >
                {
                    component ? component : null
                }
            </Card>
            <Drawer
                title={title}
                visible={visible}
                onClose={onClose}
            />
        </div>

    )
}

export default React.forwardRef(CardWrapper)
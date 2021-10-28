import { Card } from 'antd'
import { useState } from 'react'
import './index.styl'
import { useEffect } from 'react';
import $ from 'jquery'
import DragDropContext from './DragDropContext.js'
import DraggableAndDroppable from './DraggableAndDroppable.js'

const data = [
    { id: 1, title: '板块1', style: { background: 'white' }, component: <div>123</div> },
    { id: 2, title: '板块2', style: { background: 'white' }, component: <div>12312</div> },
    { id: 3, title: '板块3', style: { background: 'white' }, component: null },
]

function Drop() {

    const [activeIndex, setActiveIndex] = useState();

    const [targetIndex, setTargetIndex] = useState();

 


    const markSource = (index) => {
        //清除所有标记
        $('.droppable .droppable-item').css('background', 'white');
        if (index) {
            $('.droppable .droppable-item').eq(index - 1).css('background', 'rebeccapurple')
        }
    }

    const markTarget = (index) => {
        //清除所有标记
        $('.droppable .droppable-item').css('border', 'none');
        if (index) {
            $('.droppable .droppable-item').eq(index - 1).css('border-left', '1px solid red');
        }
    }

    useEffect(() => {
        markSource(activeIndex);
    }, [activeIndex])

    useEffect(() => {
        markTarget(targetIndex);
    }, [targetIndex])


    return (
        <div className={'card-drop'}>
            <div className={'droppable'} >
                <DragDropContext>
                    {
                        data.map((item) => {
                            const { title, id } = item;
                            return (
                                <DraggableAndDroppable key={id}>
                                    {
                                        (provided) => (
                                            <Card
                                                title={title}
                                                bordered={false}
                                                className={'droppable-item'}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                            >
                                                <p>{id}</p>
                                            </Card>
                                        )
                                    }
                                </DraggableAndDroppable>

                            )
                        })
                    }
                </DragDropContext>
            </div>
        </div>
    )
}





export default Drop
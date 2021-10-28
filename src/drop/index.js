import { Card } from 'antd'
import './index.styl'
import { useEffect, useState } from 'react';
import $ from 'jquery'
import DragDropContext from './DragDropContext.js'
import DraggableAndDroppable from './DraggableAndDroppable.js'

const data = [
    { id: 1, title: '板块1', style: { background: 'white' }, component: <div>123</div> },
    { id: 2, title: '板块2', style: { background: 'white' }, component: <div>12312</div> },
    { id: 3, title: '板块3', style: { background: 'white' }, component: null },
]


function Drop() {
    const [cards, setCards] = useState(data);

    const onDragEnd = (activeIndex, targetIndex) => {
        console.log('onDragEnd', activeIndex, targetIndex);
    }

    return (
        <div className={'card-drop'}>
            <div className={'droppable'} >
                <DragDropContext onDragEnd={onDragEnd}>
                    {
                        cards.map((item) => {
                            const { title, id } = item;
                            return (
                                <DraggableAndDroppable key={id} index={id}>
                                    {
                                        (provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                            >
                                                <Card
                                                    title={title}
                                                    bordered={false}
                                                    className={'droppable-item'}
                                                >
                                                    <p>{id}</p>
                                                </Card>
                                            </div>

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
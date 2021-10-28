import { Card } from 'antd'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react'
import './index.styl'
import { useEffect } from 'react';
import $ from 'jquery'


const data = [
    { id: 1, title: '板块1' },
    { id: 2, title: '板块2' },
    { id: 3, title: '板块3' },
    { id: 4, title: '板块4' },
    { id: 5, title: '板块5' },
]


function Drop() {


    const [state, setState] = useState(data);

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (destination.index === source.index) {
            return;
        }

        const arr = Array.from(state);
        const [removed] = arr.splice(result.source.index, 1);
        arr.splice(result.destination.index, 0, removed);


        setState(arr);
    }

    useEffect(() => {

        window.resize = () => {

        }

    }, [])

    return (
        <div className={'card-drop'}>
            <DragDropContext onDragEnd={onDragEnd}>
                {/* 指定可被拖动放入的区域 */}
                <Droppable droppableId="list" direction="horizontal">
                    {provided => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className={'droppable'}>
                            {
                                state.map((item, index) => {
                                    const { id, title } = item;
                                    return (
                                        <Draggable draggableId={id + ''} index={index} key={id}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={'droppable-item'}
                                                >
                                                    <Card title="Card title" bordered={false} style={{ width: 300 }}>
                                                        <p>{title}</p>
                                                    </Card>
                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                })
                            }

                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="list2" direction="horizontal">
                    {provided => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className={'droppable'}>
                            {
                                state.map((item, index) => {
                                    const { id, title } = item;
                                    return (
                                        <Draggable draggableId={id + '1'} index={index} key={id}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={'droppable-item'}
                                                >
                                                    <Card title="Card title" bordered={false} style={{ width: 300 }}>
                                                        <p>{title}</p>
                                                    </Card>
                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                })
                            }

                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

            </DragDropContext>

        </div>
    )
}


export default Drop
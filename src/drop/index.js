import { Card } from 'antd'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import './index.styl'

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: 8 * 2,
    margin: `0 8px 0 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
});


function Drop() {

    return (
        <div className={'card-drop'}>
            <DragDropContext>
                <Droppable droppableId="list"  direction="horizontal">
                    {provided => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className={'droppable'}>

                            <Draggable draggableId={'1'} index={1}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Card title="Card title" bordered={false} style={{ width: 300 }}>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                        </Card>
                                    </div>
                                )}
                            </Draggable>
                            <Draggable draggableId={'2'} index={2}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Card title="Card title" bordered={false} style={{ width: 300 }}>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                        </Card>
                                    </div>
                                )}
                            </Draggable>
                            <Draggable draggableId={'3'} index={3}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Card title="Card title" bordered={false} style={{ width: 300 }}>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                        </Card>
                                    </div>
                                )}
                            </Draggable>
                            <Draggable draggableId={'4'} index={4}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Card title="Card title" bordered={false} style={{ width: 300 }}>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                        </Card>
                                    </div>
                                )}
                            </Draggable>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>


            </DragDropContext>

        </div>
    )
}


export default Drop
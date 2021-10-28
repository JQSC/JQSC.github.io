import React, { useEffect, useRef, useContext } from 'react';
import { DragDropContext } from './DragDropContext.js'

function DraggableAndDroppable(props) {

    const { index, children } = props;

    const innerRef = useRef()

    const [{ activeIndex, targetIndex }] = useContext(DragDropContext)

    console.log('props', pp)


    return (
        <React.Fragment>
            {
                children({
                    innerRef,
                    // onDragStart,
                    // onDragEnter,
                    // onDragEnd
                })
            }
        </React.Fragment>
    )
}

export default DraggableAndDroppable
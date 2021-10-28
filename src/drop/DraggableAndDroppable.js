import React, { useEffect, useRef, useContext } from 'react';
import { DragDropContext } from './DragDropContext.js'
import $ from 'jquery'

function DraggableAndDroppable(props) {

    const { index, children } = props;

    const innerRef = useRef()

    const [_, setSource, setTarget, setData, onDragEnd] = useContext(DragDropContext)

    const params = {
        ref: innerRef,
        index
    }

    const onDragStart = (e) => {
        setSource(params);
    }

    const onDragEnter = (e) => {
        e.dataTransfer.effectAllowed = "move"
        e.dataTransfer.dropEffect = "move"
        e.dataTransfer.setData("text/plain", "drag") // firefox fix
        setTarget(params);
    }

    useEffect(
        () => {
            setData(params);
            $(innerRef.current).attr('draggable', 'true');
        },
        []
    )

    useEffect(
        () => {
            return () => {
                if (!innerRef.current) return;
                innerRef.current.removeEventListener("dragstart", onDragStart);
                innerRef.current.removeEventListener("dragenter", onDragEnter);
                innerRef.current.removeEventListener("dragend", onDragEnd);
            }
        },
        [innerRef.current]
    )

    return (
        <React.Fragment>
            {
                children({
                    innerRef,
                    draggableProps: {
                        onDragStart,
                        onDragEnter,
                        onDragEnd
                    }
                })
            }
        </React.Fragment>
    )
}

export default DraggableAndDroppable
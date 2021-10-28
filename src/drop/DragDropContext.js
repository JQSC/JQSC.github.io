
import React, { useState, useEffect } from 'react';
import $ from 'jquery'

export const DragDropContext = React.createContext({ activeIndex: 0, targetIndex: 0 });

function DragDrop(props) {

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
        <DragDropContext.Provider value={[{ activeIndex, targetIndex }, setActiveIndex, setTargetIndex]}>
            {props.children}
        </DragDropContext.Provider>
    )

}


export default DragDrop
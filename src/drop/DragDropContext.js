
import React, { useState, useEffect, useCallback, useRef } from 'react';
import $ from 'jquery'

export const DragDropContext = React.createContext({});

function DragDrop(props) {

    const [source, setSource] = useState();

    const [target, setTarget] = useState();

    const cacheRef = useRef([]);

    const setData = (o) => {
        cacheRef.current.push(o);
    }

    const onDragEnd = (e) => {
        props.onDragEnd(source.index, target.index);
        setSource(null);
        setTarget(null);
    }

    const clearSource = () => {
        //清除所有标记
        for (let item of cacheRef.current) {
            $(item.ref.current).css('background', 'white')
        }
    }

    const clearTarget = () => {
        //清除所有标记
        for (let item of cacheRef.current) {
            $(item.ref.current).css('border', 'none')
        }
    }

    const markSource = (current) => {
        clearSource()
        $(current).css('background', 'rebeccapurple')
    }

    const markTarget = (current) => {
        clearTarget();
        $(current).css('border-left', '1px solid red');
    }

    useEffect(() => {
        if (source){
            markSource(source.ref.current);
        }else{clearSource()}
    }, [source])

    useEffect(() => {
        if (target){
            markTarget(target.ref.current);
        }else{
            clearTarget()
        }
    }, [target])


    return (
        <DragDropContext.Provider value={[{ source, target }, setSource, setTarget, setData, onDragEnd]}>
            {props.children}
        </DragDropContext.Provider>
    )

}


export default DragDrop
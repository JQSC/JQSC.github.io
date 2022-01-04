
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
        if (source && typeof source.index !== 'undefined' && target && typeof target.index !== 'undefined') {
            props.onDragEnd(source.index, target.index);
        }
        setSource(null);
        setTarget(null);
    }

    //source相关
    const clearSource = () => {
        for (let item of cacheRef.current) {
            $(item.ref.current).removeClass('drag-source')
        }
    }

    const markSource = (current) => {
        clearSource();
        $(current).addClass('drag-source')
    }

    //target相关
    const clearTarget = () => {
        $('.drag-target').remove();
        for (let item of cacheRef.current) {
            $(item.ref.current).removeClass('drag-target-border')
        }
    }

    const markTarget = (current) => {
        clearTarget();
        const sourceWidth = $(source.ref.current).width();
        $(current).before(`<div class="card drag-target" style="width:${sourceWidth}px"></div>`);
        $(current).addClass('drag-target-border');
    }

    useEffect(() => {
        if (target) {
            markSource(source.ref.current);
            markTarget(target.ref.current);
        } else {
            clearSource();
            clearTarget();
        }
    }, [target])


    return (
        <DragDropContext.Provider value={[{ source, target }, setSource, setTarget, setData, onDragEnd]}>
            {props.children}
        </DragDropContext.Provider>
    )

}


export default DragDrop
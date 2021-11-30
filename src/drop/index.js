
import { useEffect, useState } from 'react';
import DragDropContext from './DragDropContext.js'
import DraggableAndDroppable from './DraggableAndDroppable.js'
import Card from './Card'
import './index.styl'

const data = [
    { id: 1, title: '板块1', style: { background: 'white', width: 300 }, component: <div>123</div> },
    { id: 2, title: '板块2', style: { background: 'white', width: 400 }, component: <div>12312</div> },
    { id: 3, title: '板块3', style: { background: 'white', width: 300 }, component: null },
    { id: 4, title: '板块4', style: { background: 'white', width: 400 }, component: <div>12312</div> },
    { id: 5, title: '板块5', style: { background: 'white', width: 200 }, component: null },
    { id: 6, title: '板块6', style: { background: 'white', width: 300 }, component: <div>123</div> },
    { id: 7, title: '板块7', style: { background: 'white', width: 400 }, component: <div>12312</div> },
    { id: 8, title: '板块8', style: { background: 'white', width: 300 }, component: null },
    { id: 9, title: '板块9', style: { background: 'white', width: 400 }, component: <div>12312</div> },
    { id: 10, title: '板块10', style: { background: 'white', width: 200 }, component: null },
]


function Drop() {
    const [cards, setCards] = useState(data);

    const onDragEnd = (sourceIndex, targetIndex) => {
        console.log('onDragEnd', sourceIndex, targetIndex);
        if (sourceIndex === targetIndex) return;
        const newCards = [...cards];
        let sources = newCards.splice(sourceIndex, 1);
        if (sourceIndex < targetIndex) {
            newCards.splice(targetIndex - 1, 0, sources[0]);
        } else {
            newCards.splice(targetIndex, 0, sources[0]);
        }
        setCards(newCards)
    }

    return (
        <div className={'cards-wrapper'}>
            <div className={'cards'} >
                <DragDropContext onDragEnd={onDragEnd}>
                    {
                        cards.map((item, index) => {
                            const { title, id, style,component } = item;
                            return (
                                <DraggableAndDroppable key={id} index={index}>
                                    {
                                        (provided) => (
                                            <Card
                                                ref={provided.innerRef}
                                                draggableProps={provided.draggableProps}
                                                title={title}
                                                component={component}
                                                style={style}
                                            />
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
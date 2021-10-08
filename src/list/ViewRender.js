import { useEffect, useRef, useState } from 'react'

const colors = ['#FAF9DE', '#FFF2E2', '#FDE6E0', '#E3EDCD', '#DCE2F1', '#E9EBFE', '#EAEAEF']

let currentColor;

function createItem(size) {
    const list = [];
    let index
    do {
        index = parseInt(Math.random() * 7);
    } while (index === currentColor);

    const bg = colors[index];
    for (let i = 0; i < size; i++) {
        list.push({ name: i, index: i, bg })
    }
    return list
}

function View() {

    const [data, setData] = useState(createItem(1000));

    const ref=useRef();

    const [position, setPosition] = useState({
        start: 0,
        end: 15
    })

    const [currentData, setCurrentData] = useState([]);

    const onScroll = (e) => {
        const currentScrollTop = e.target.scrollTop;
        const fixedScrollTop = currentScrollTop - currentScrollTop % 60;
        const start = Math.floor(currentScrollTop / 60);
        const end = start + 15;
        ref.current.style.transform=`translate3d(0, ${fixedScrollTop}px, 0)`
        setPosition({
            start,
            end
        })


    }

    useEffect(
        () => {
            console.log(222222222);
            
            const { start, end } = position
            setCurrentData(data.slice(start, end + 1))
        },
        [data, position,]
    )


    return (
        <div className={'view-list'} onScroll={onScroll}>
            <div className={'continer-wrapper'} style={{ height: data.length * 60 }}></div>
            <div className={'continer-content'} ref={ref}>
                {
                    currentData.map((item, i) => {
                        return <div className={'view-list-item'} style={{ backgroundColor: item.bg }} key={i}>item-{item.index}</div>
                    })
                }
            </div>

        </div>
    )
}

export default View
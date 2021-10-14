import { useState, useEffect, useRef } from 'react'

function getDateNow() {
    return performance.now()
}

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


const viewHeight = 600;

//子项最低高度为60,多加载4项，防止过快滚动白屏
const minCount = parseInt(viewHeight / 60) + 4;

function LazyRender() {

    const [data, setData] = useState(createItem(50))

    const [currentIndex, setCurrentIndex] = useState(0)

    const add = () => {
        const startTime = getDateNow();
        console.log('start', startTime)
        setData(createItem(10000));
        //legacy模式下setTimeout在浏览器下一帧执行
        setTimeout(() => {
            const endTime = getDateNow();
            console.log('end', endTime, endTime - startTime);
        })
    }

    const onScroll = (e) => {
        if (currentIndex >= (data.length - 1)) return;

        const continer = e.target;
        //clientHeight包含padding
        //offsetHeight包含padding + bordr +滚动条
        const maxScrollTop = continer.scrollHeight - continer.clientHeight;
        const currentScrollTop = continer.scrollTop;

        if (maxScrollTop - currentScrollTop < 20) {
            setCurrentIndex(minCount + currentIndex);
        }
    }


    useEffect(
        () => {
            setCurrentIndex(minCount);
        },
        [data]
    )

    const currentList = data.slice(0, currentIndex);

    return (
        <div>
            <button onClick={add}>添加1000条数据计算渲染用时</button>
            <div className={'async-list'} style={{ height: viewHeight }} onScroll={onScroll}>
                {
                    currentList.map((item, i) => {
                        return <div className={'async-list-item'} style={{ backgroundColor: item.bg }} key={i}>item-{i}</div>
                    })
                }
            </div>
        </div>

    )
}

export default LazyRender
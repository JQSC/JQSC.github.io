import { useState } from 'react'

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

function LazyRender() {

    const [data, setData] = useState(createItem(20))

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
        const continer = e.target;
        //clientHeight包含padding
        //offsetHeight包含padding + bordr +滚动条
        const maxScrollTop = continer.scrollHeight - continer.clientHeight;
        const currentScrollTop = continer.scrollTop;

        if (maxScrollTop - currentScrollTop < 20) {
            setData([...data, ...createItem(20)])
        }
    }

    return (
        <div>
            <button onClick={add}>添加1000条数据计算渲染用时</button>
            <div className={'async-list'} onScroll={onScroll}>
                {
                    data.map((item, i) => {
                        return <div className={'async-list-item'} style={{ backgroundColor: item.bg }} key={i}>item-{i}</div>
                    })
                }
            </div>
        </div>

    )
}

export default LazyRender
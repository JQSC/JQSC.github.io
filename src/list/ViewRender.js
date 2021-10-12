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

function getOffsetTop(scrollTop, data) {
    let total = 0;
    for (let i = 0, l = data.length; i < l; i++) {
        const item = data[i];
        total += item.height;
        if (total >= scrollTop) {
            return total - item.height
        }
    }
    return 0
}


function findNearestItemIndex(scrollTop, data) {
    let total = 0;
    for (let i = 0, l = data.length; i < l; i++) {
        const item = data[i];
        total += item.height;
        if (total >= scrollTop || (i === l - 1)) {
            return i
        }
    }
    return 0
}

function setItemHeight(item, isSame) {
    //高度算法暂用序号加固定高度
    const itemHeight = (isSame ? item.index : 0) + 60;
    item.height = itemHeight;
    return item
}

function View() {

    const [data, setData] = useState([]);
    //可视区高度
    const viewHeight = 600;
    //可视区子项列表
    const [viewData, setViewData] = useState([]);

    //滚动高度
    const [contentHeight, setContentHeight] = useState(0)

    const [isSame, setIsSame] = useState(false);

    const ref = useRef();

    const onScroll = (scrollTop) => {
        const currentScrollTop = scrollTop//e.target.scrollTop;
        //当偏移量不是子项的整数倍时，偏移量不做改变，交由浏览器自身控制滚动
        const offsetTop = getOffsetTop(currentScrollTop, data) //currentScrollTop - currentScrollTop % 60;

        const startIndex = findNearestItemIndex(currentScrollTop, data)
        const endIndex = findNearestItemIndex(currentScrollTop + viewHeight, data)

        setViewData(data.slice(startIndex, endIndex + 1))

        ref.current.style.transform = `translate3d(0, ${offsetTop}px, 0)`

    }

    const changeMode = (bol) => {
        setIsSame(bol)
    }

    useEffect(() => {
        //模拟异步获取数据
        setTimeout(() => {
            const listData = createItem(1000);
            let scrollHeight = 0;

            for (let item of listData) {
                setItemHeight(item, isSame);
                scrollHeight += item.height;
            }

            const startIndex = 0;
            const endIndex = findNearestItemIndex(viewHeight, listData)

            setViewData(listData.slice(startIndex, endIndex + 1))
            setContentHeight(scrollHeight);
            setData(listData);
        }, 100)
    }, [isSame])

    return (
        <div className={'view-list-wrapper'}>
            <button onClick={() => changeMode(false)} style={{ marginRight: 10 }}>子项高度一致</button>
            <button onClick={() => changeMode(true)}>子项高度不一致</button>
            <div className={'view-list'} style={{ height: viewHeight }} onScroll={(e) => onScroll(e.target.scrollTop)}>
                <div className={'continer-wrapper'} style={{ height: contentHeight }}></div>
                <div className={'continer-content'} ref={ref}>
                    {
                        viewData.map((item, i) => {
                            const { bg, height, index } = item;
                            return <div className={'view-list-item'} style={{ backgroundColor: bg, height, lineHeight: height + 'px' }} key={i}>item-{index}</div>
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default View
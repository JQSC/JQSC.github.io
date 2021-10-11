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

    const [data, setData] = useState([]);
    //可视区高度
    const viewHeight = 600;
    //可视区子项列表
    const [viewData, setViewData] = useState([]);
    //可视区子项起始、终止位置；
    const [position, setPosition] = useState({
        startIndex: 0,
        endIndex: 0
    })
    //滚动高度
    const [contentHeight, setContentHeight] = useState(0)

    const ref = useRef();

    const onScroll = (e) => {
        const currentScrollTop = e.target.scrollTop;
        let startIndex = findNearestItemIndex(currentScrollTop)
        let endIndex = findNearestItemIndex(currentScrollTop + viewHeight);


        let total = 0;
        for (let i = 0, j = startIndex; i <= j; i++) {
            let item = data[i];

            if (i === j) {
               break
            }
            total += item.height;
        }


        setViewData(data.slice(startIndex, endIndex + 1))


        ref.current.style.transform = `translate3d(0, ${total}px, 0)`

    }


    function findNearestItemIndex(scrollHeight) {
        let total = 0;
        for (let i = 0, j = data.length; i < j; i++) {
            let item = data[i];
            total += item.height;
            if (total >= scrollHeight || i === j - 1) {
                return i
            }
        }
        return 0
    }


    //模拟异步获取数据
    useEffect(() => {
        setTimeout(() => {
            let resData = createItem(1000);
            //初始化viewData和contentHeight
            let totalHeight = 0;
            let startIndex = 0;
            let endIndex = 0;
            for (let item of resData) {
                //高度算法暂用序号加固定高度
                let itemHeight = item.index + 60;
                item.height = itemHeight;
                //缓存每一个子项高度到列表项中
                totalHeight += itemHeight;
                if (totalHeight > viewHeight && !endIndex) {
                    endIndex = item.index;
                }
            }
            setViewData(resData.slice(startIndex, endIndex + 1))
            setPosition({
                startIndex,
                endIndex
            })
            setContentHeight(totalHeight);
            setData(resData);
        }, 1000)
    }, [])

    return (
        <div className={'view-list'} style={{ height: viewHeight }} onScroll={onScroll}>
            <div className={'continer-wrapper'} style={{ height: contentHeight }}></div>
            <div className={'continer-content'} ref={ref}>
                {
                    viewData.map((item, i) => {
                        const { bg, height, index } = item;
                        return <div className={'view-list-item'} style={{ backgroundColor: bg, height }} key={i}>item-{index}</div>
                    })
                }
            </div>

        </div>
    )
}

export default View
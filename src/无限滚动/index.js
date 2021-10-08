import { useState } from 'react'


function getDateNow(){
   return performance.now()
}

function List() {

    const [data, setData] = useState([])

    const add = () => {
        const startTime = getDateNow();
        console.log('start', startTime)
        const list = [];
        for (let i = 0; i < 10000; i++) {
            list.push({ name: i, index: i })
        }
        setData(list);
        //legacy模式下setTimeout在浏览器下一帧执行
        setTimeout(() => {
            const endTime = getDateNow();
            console.log('end', endTime, endTime - startTime);
        })
    }

    return (
        <div>
            <button onClick={add}>添加1000条数据计算渲染用时</button>
            <ul>
                {
                    data.map((item) => {
                        return <li key={item.index}>{item.name}</li>
                    })
                }
            </ul>
        </div>

    )
}

export default List
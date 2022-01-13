import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from 'antd';
import { useEffect, useState } from "react";


function App() {

    const [nums, setNums] = useState(1)

    const renderChildren = (props) => {
        console.log('renderChildren')
        const { match } = props;
        return (
            <div style={match ? {} : { position: 'absolute', zIndex: -10 }}>
                <Test3 />
            </div>
        )
    }

    useEffect(() => {
        document.dispatchEvent(new Event('render-event'))
    }, [])

    const onClick = () => {
        setNums(nums + 1)
        console.log('nums', nums + 1)
    }

    return (
        <BrowserRouter>
            <h1>Welcome to React Router!</h1>
            <Button type={'primary'} onClick={onClick} className={'btn'}>点击{nums}</Button>
            <Link
                id={1}
                name={'导航1'}
                to={{
                    pathname: '/1',
                    state: {
                        key: '1',
                        path: '/1',
                    }
                }}
            >
                导航1
            </Link>
            <Link
                id={1}
                name={'导航2'}
                to={{
                    pathname: '/2',
                    state: {
                        key: '2',
                        path: '/2',
                    }
                }}
            >
                导航2
            </Link>
            <Routes>
                <Route path="/1" element={<Test1 />} />
                <Route path="/2" element={<Test2 />} />
                <Route path="/3" children={props => renderChildren(props)} />

            </Routes>
            {/* <Route path="/3" element={<Test3 />} /> */}
        </BrowserRouter>
    )
}


function Test1(props) {
    console.log('Test1 props:', props);
    let navigate = useNavigate();
    const onClick = () => {
        navigate("/2", { replace: true, state: { test: 'tttt' } });
    }

    let arr = []
    for (let i = 0; i < 1000; i++) {
        arr.push(1)
    }
    return <div>
        11111111
        <Button type={'primary'} onClick={onClick} className={'btn'}>跳转test2</Button>
        {
            arr.map((item, index) => <div key={index}>{item}</div>)
        }
    </div>
}

function Test2(props) {
    let location = useLocation();
    console.log('Test2 location:', location)
    return <div>2222222</div>
}


function Test3(props) {
    return <div>3333333</div>
}

export default App
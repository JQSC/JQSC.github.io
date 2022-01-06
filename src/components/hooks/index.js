import useDebounce from './useDebounce.js'
import { Button } from 'antd'

function TestHook() {
    const fn1 = () => {
        console.log('查询中1......')
    }
    const fn2 = () => {
        console.log('查询中2......')
    }

    const [run, cancel] = useDebounce(fn1, 500)

    const [run2] = useDebounce(fn2, 500)


    const search = () => {
        run()
        cancel()
        run2()
    }

    return (<div>test

        <Button type="primary" onClick={search}>
            Submit
        </Button>
    </div>)
}


export default TestHook
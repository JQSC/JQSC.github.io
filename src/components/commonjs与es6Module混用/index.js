import es6Module from './es6Module'
import commonjs from './commonjs'

function Index() {

    const onClick=()=>{
        console.log('es6Module',es6Module)
        console.log('commonjs',commonjs)
    }

    return (
        <div onClick={onClick}>111</div>
    )
}

export default Index
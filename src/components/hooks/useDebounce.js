import { useRef } from 'react';

function useDebounce(fn, delay) {

    const timer = useRef(null);

    const run = () => {
        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(() => {
            fn()
            timer.current = null
        }, delay)

    }

    const cancel = () => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = null;
    }

    return [run,cancel]

}




export default useDebounce
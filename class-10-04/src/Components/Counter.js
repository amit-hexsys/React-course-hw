import './Counter.css';
import { useState } from 'react'
const Counter = (props) => {

    const plusCounter = () => {
        setCountValue(countValue + 1);
    }

    const minusCounter = () => {
        setCountValue(countValue - 1);
    }

    const resetCounter = () => {
        setCountValue(initialValue);
    }
    let initialValue = 0;
    let [countValue, setCountValue] = useState(initialValue);

    return (
        <>
            <button onClick={minusCounter}>-</button>
            <span className="text">Counter: <span>{countValue}</span></span>
            <button onClick={plusCounter}>+</button>
            <br/>
            <button className='reset' onClick={resetCounter}>reset</button>
        </>
    )
}

export default Counter;
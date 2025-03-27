import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0)

    const handleIncrease = () =>{
        const increaseCount = count + 1;
        setCount(increaseCount)
    }

    const handleDecrease = () =>{
        const decreaseCount = count - 1;
        setCount(decreaseCount)
    }

    return(
        <div style={{border: '2px solid red ' ,padding:'10px',borderRadius: '10px', margin: '10px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}
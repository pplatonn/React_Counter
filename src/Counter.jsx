import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0)

    const Increment = () => {
        setCounter(counter + 1)
    }

    const Decrement = () => {
        setCounter(counter - 1)
    }
    const Reset = () => {
        setCounter(0)
    }
    return (
        <>
            <div>
                <h1>{counter}</h1>
                <div className="btn_container">
                <button onClick={Decrement}>decrement</button>
                <button onClick={Reset}>reset</button>
                <button onClick={Increment}>increment</button>
                </div>
            </div>
        </>
    )

}

export default Counter
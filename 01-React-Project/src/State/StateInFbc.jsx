 import { useState } from "react";
function StateInFbc(){
    // let count = 10;

    let [count,setCount] = useState(0)
    // console.log(count)
    // console.log(setCount)

    function increment(){
        console.log(count)
        setCount(count++)
    }
    return(
        <>
        <h1>State In function Based Component {count} </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}

export default StateInFbc
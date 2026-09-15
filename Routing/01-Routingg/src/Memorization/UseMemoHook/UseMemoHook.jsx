//!  2. UseMemo
//             - It is a react hook that memoizes the result of a computation, so it is not recalculated on every render.



import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {

let [count, setCount] = useState(0)
let [displayCount, setDisplayCount] = useState(0)

console.log(`DisplayCount value is ${displayCount}`)

function expensiveFn(){
    console.log("Function is re-rendering")
    let res = 0;
    for(let i=0; i<1000000; i++){
        res = count + 1
    }
    return res
}
// expensiveFn()
useMemo(expensiveFn,[count])
  return (
    <div>
     <h1>count : {count}</h1>
      <h1>displayCount : {displayCount}</h1>
      <button onClick={()=>{setCount(count + 1 )}}>Increment Count</button>
      <button onClick={()=>{setDisplayCount(displayCount + 1)}}>displayCount</button>
    </div>
  )
}

export default UseMemoHook

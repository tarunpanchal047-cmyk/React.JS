import React, { useCallback, useState } from 'react'
import UseCallbackChild from './UseMemoChild'

const UseMemoParent = () => {

let [count, setCount] = useState(0)

let expensiveFn = useCallback(function(){
console.log("Function is Re-renderig")
},[])

  return (
    <div>
      <h1>UseMemoParent : {count}</h1>
<button onClick={()=>{setCount(count+1)}}>Increment</button>
      <UseCallbackChild expensiveFn={expensiveFn}/>
    </div>
  )
}

export default UseMemoParent

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffect2 = () => {
 let [count, setCount] = useState(0)
useEffect(()=>{
   document.title = `Message${count}`
},[])

  return (
    <div>
        <h1>useEffect2 : {count}</h1>
        <button onClick={()=>{setCount(count++)}}>Increment</button>
      
    </div>
  )
}

export default UseEffect2

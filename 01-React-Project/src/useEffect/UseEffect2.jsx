import  { useEffect, useState } from 'react'

const UseEffect2 = () => {

    let [count, setCount] = useState(0)
    useEffect(() => {
     document.title = `Message${count}`
    }, [count])
    
  return (
    <div>
      <h1>useEffect2 : {count}</h1>
      <h1>useEffect2 : {count}</h1>
      <button onClick={()=>{setCount(count++)}}>Increment</button>
      <button onClick={()=>{setCount(count--)}}>Decrement</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default UseEffect2


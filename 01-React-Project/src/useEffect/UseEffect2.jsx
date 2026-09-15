//! useEffect : -------------
// ---------------
//^ useEffect is a react hook which helps us to handle side effect in our react application side-effect.
//^ like fetching the data from the API removing event lishner updating DOM etc..
//^ This hook can also be used for checking the phase of funtion based component.
//& useEffect is accept two argument first argument is the callback function which we wants to
//& execute and second arugunment in the dependency array. 



import { useEffect, useState } from 'react'

const UseEffect2 = () => {

  let [count, setCount] = useState(0)
  useEffect(() => {
    console.log("Component Loaded")
  }, [count])

  return (
    <div>
      <h1>useEffect2 : {count}</h1>
      <h1>useEffect2 : {count}</h1>
      <button onClick={() => { setCount(count++) }}>Increment</button>
      <button onClick={() => { setCount(count--) }}>Decrement</button>
      <button onClick={() => { setCount(0) }}>Reset</button>
    </div>
  )
}

export default UseEffect2


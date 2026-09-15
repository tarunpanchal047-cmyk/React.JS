import { useEffect, useState} from 'react'

const LifeCycleInFbc = () => {

let [count,setCount] = useState(0)

useEffect(()=>{
    console.log("Mounting Phase")
},[])

useEffect(()=>{
    console.log("Updation Phase")
},[count])

useEffect(()=>{
    return()=>{
        console.log("Mounting Phase")
    }
},[])


  return (
    <div>
        <h1>LifeCycleInFbc : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
  )
}

export default LifeCycleInFbc
//! Use Reducer : ----------
// ------------------------
//^ It is a react Hook which is used to handle state logic.
//& It accepts two arguments 1st argument is the reducer function and 2nd argument is the initial value.
 
//! 1. Reducer function : 
//^ It is the function that decides how state changes. It It accept two argument 1st argu is the current state and 
//^ 2nd argu is the action and it return a new updated state.
 
//! 2. Initial state : 
//^ It is also known as initial value that oue state should hold. It returns an array which consists two value 1 value is 
//^ the variable which state holds the comments and 2nd value is the function which is known as this pacher function.





import { useReducer } from 'react'

    let intialVal = {
        count : 0
    }

function reducerFn (state,action){
// console.log(state)
// console.log(action)

if (action.type === "Increment"){
    return {
        count : state.count + 1
    }
}else if (action.type === "Decrement"){
    return{
        count : state.count - 1
    }
}else if(action.type === "Reset"){
    return {
        count : 0
    }
}
}
const Reducer = () => {

    let [data,setData] = useReducer(reducerFn,intialVal)
    // console.log(data)
    // console.log(setData)
  return (
    <div>
      <h1>Reducer  : {data.count}</h1>
      <button onClick={()=>setData({type:"Increment"})}>Increment</button>
      <button onClick={()=>setData({type:"Decrement"})}>Decrement</button>
      <button onClick={()=>setData({type:"Reset"})}>Reset</button>


    </div>
  )
}

export default Reducer




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




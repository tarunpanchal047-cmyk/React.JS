import {useState} from 'react'
import MemoChild from './MemoChild'

const MemoParent = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
    <h1>MemoParent : {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <MemoChild/>
    </div>
  )
}

export default MemoParent

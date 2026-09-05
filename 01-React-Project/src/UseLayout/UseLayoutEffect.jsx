import React, {useEffect, useLayoutEffect, useState} from 'react'


const UseLayoutEffect = () => {

let [data,setData] = useState("JavaScript")
// useEffect(()=>{
//     setData("ReactJS")
// },[])


useLayoutEffect(()=>{
    setData("ReactJS")
},[])

  return (
    <div>
        <h1>UseLayoutEffect : {data}</h1>
        </div>
  )
}

export default UseLayoutEffect
//! Use layout effect : --------------------
// ---------------
//^ -->  Use layout effect is a react hook that runs synchronically after the DOM has been updated, but before the browser paints the screen.
//^ - `useLayoutEffect` is a version of `useEffect` that fires **synchronously** after React has performed all DOM mutations, but 
//  **before the browser paints the updated screen to the user**.
//^ - `useLayoutEffect` accepts the **exact same arguments** as `useEffect`:
//! - It accepts two arguments :
//?     1. CallBack Function :
//?     2. Dependency Array :
//!         1.  **Callback Function:** 
//^             1. Contains the DOM manipulation/measurement logic and optional cleanup function.
//!         2. **Dependency Array:** 
//^             1. Controls when the effect re-runs.


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
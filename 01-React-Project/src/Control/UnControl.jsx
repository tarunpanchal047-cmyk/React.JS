//! Uncontrolled Component : -------------
// ---------------------
//^  An Uncontrolled Component in whcih input element manages their on data using the browser DOM. and the react
//^  access the values only when required using ref this concepts exist because react needed away manage form data.
//^  either through it state or buy allowing the browser to hanlde it.



//! useRef : -----------
// -------------------
//^ useRef is a react hook which persists value or it is used to access DOM Elements without causing a component re-rendering.
//^ It returns an object : {current : value}



import React, { useRef } from 'react'

const UnControl = () => {
   
  let userNameRef = useRef()
  let passwordRef = useRef()


  function handleSubmit(e){
    e.preventDefault()
    // console.log("form submitted")
    let formData = {
      userName: userNameRef.current.value,
      password : passwordRef.current.value
    }
    console.log(formData)
  }
  return (
    <div>
      <h1>UnControlled</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Username' ref={userNameRef}/>
        <input type='password' placeholder='Enter password' ref={passwordRef}/>
        <button>Submit</button>

      </form>
    </div>
  )
}

export default UnControl


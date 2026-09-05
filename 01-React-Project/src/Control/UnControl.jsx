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


//!  Controlled Component : -------------
// ---------------
//^ A Controlled Component is a component in which the input element get their value from react state and any changes in the input 
//^ is handled thorugh even handler like on change.

import { useState } from 'react'

const Control = () => {
    let [formData,setFormData] = useState({
      userName:"",
      password:"",
      email:""
    })
    function handleSubmit(e){
        e.preventDefault()
        console.log("form Submitted")
    }
    function handleChange(e){
        // console.log(e.target.value)
        let [name,value] = e.target
        setFormData({...formData , [name]:value})
        console.log(formData)
        console.log("change")
    }

  return (
    <div>
      <h1>Controlled Component</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={formData.userName} onChange={handleChange} name='userName'/>
        <input type='text' value={formData.password} onChange={handleChange} name='password'/>
        <input type='text' value={formData.email} onChange={handleChange} name='email'/>
        <button>Submit</button>

      </form>
    </div>
  )
}

export default Control

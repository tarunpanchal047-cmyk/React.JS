import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  let [data, setData] = useState({
    username: "",
    phone: "",
  })
  let navigate = useNavigate()

  function handleChange(e) {
    let { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  async function handleSubmit(e) {
    e.preventDefault()
    
    let res = await axios.post("http://localhost:3030/users", data)
    if (res) {
      navigate("/")
    }
  }


  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Username' onChange={handleChange} name='username' />
        <br />
        <input type="text" placeholder='Enter Phone' onChange={handleChange} name='phone' />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Create

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpDate = () => {

let [formData,setFormData] = useState({
  id : "",
  username : "",
  phone : ""
})

let {id} = useParams()
console.log(id)

useEffect(()=>{
  async function  fetchData() {
    let {data} = await axios(`http://localhost:3030/users/${id}`)
    setFormData(data)
  }
  fetchData()
},[id])

let navigate = useNavigate()

function handleChange(e){
  let {name,value} =  e.target
  setFormData({...formData, [name]:value})
}
async function handleSubmit(e) {
  e.preventDefault()
  let res = await  axios.put(`http://localhost:3030/users/${id}`, formData)
  if(res){
    navigate("/")
  }
}

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={formData.id} onChange={handleChange} name='id'/>
        <br/>
        <input type='text' value={formData.username} onChange={handleChange} name='username'/>
        <br/>
        <input type='text' value={formData.phone} onChange={handleChange} name='phone'/>
        <br/>
          <button><Link to='/'>Back</Link></button>
          <button>Submit</button>
      </form>
    </div>
  )
}

export default UpDate

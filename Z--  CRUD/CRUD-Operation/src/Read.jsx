import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
  let [user, setUser] = useState([])
  let {id} = useParams()
console.log(id)

useEffect(()=>{
  async function fetchData() {
    let {data} = await axios(`http://localhost:3030/users/${id}`)
    setUser(data)
  }
  fetchData()
  
},[])
console.log(user)

  return (
    <div>
      Read
      <form>
<input type="text" value={user.id} />
<input type="text" value={user.phone} />
<input type="text" value={user.username} />
<button><Link to="/" >Back</Link></button>
      </form>
    </div>
  )
}

export default Read

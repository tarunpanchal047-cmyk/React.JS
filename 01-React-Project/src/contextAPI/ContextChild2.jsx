import React, { useContext } from "react"
import MyContext from "./MyContext"
const ContextChild2 = () => {

let globalData = useContext(MyContext)
console.log(globalData)

return (
    <div>
        <h1>ContextChild2 : {globalData}</h1>
    </div>
  )
}

export default ContextChild2
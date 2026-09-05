import ContextChild1 from "./ContextChild1"
import MyContext from "./MyContext"


const ContextParent = () => {

let data1 = 'Global Data'

  return (
    <div>
        <h1>ContextParent</h1>

        <MyContext.Provider value={data1}>

         <ContextChild1/>
         
        </MyContext.Provider>
        
    </div>
  )
}

export default ContextParent
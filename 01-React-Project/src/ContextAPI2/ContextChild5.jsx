import { useContext } from 'react'
import { MyContext2 } from './ContextGrandParent'

const ContextChild5 = () => {

    let contextData = useContext(MyContext2)

    let {data1,data2,data3} = contextData
    console.log(data1,data2,data3)

    return (
        <div>
            <h1>ContextChild5 : {data1},{data2},{data3}</h1>

            

        </div>
    )
}

export default ContextChild5
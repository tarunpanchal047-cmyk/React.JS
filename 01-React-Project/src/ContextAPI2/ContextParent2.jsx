import React, { useContext } from 'react'
import { MyContext2 } from './ContextGrandParent'

const ContextChild5 = () => {

    // Step 3: Consume Context
    let { data1, data2, data3 } = useContext(MyContext2)

    return (
        <div>
            <h1>ContextChild5</h1>

            <h2>{data1}</h2>
            <h2>{data2}</h2>
            <h2>{data3}</h2>
        </div>
    )
}

export default ContextChild5
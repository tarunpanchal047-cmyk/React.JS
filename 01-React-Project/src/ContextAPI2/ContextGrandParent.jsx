import { createContext } from 'react'
import ContextParent2 from './ContextParent2'

// Step 1: Create Context
export let MyContext2 = createContext()

const ContextGrandParent = () => {

    let data1 = 'GlobalData 2'
    let data2 = 'GlobalData 3'
    let data3 = 'GlobalData 4'

    return (
        <div>
            <h1>Context Grand Parent</h1>

            {/* Step 2: Provide Data */}
            <MyContext2.Provider value={{ data1, data2, data3 }}>
                <ContextParent2 />
            </MyContext2.Provider>

        </div>
    )
}

export default ContextGrandParent
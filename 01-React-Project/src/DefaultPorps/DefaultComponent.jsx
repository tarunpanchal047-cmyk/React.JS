import DefaultComponent from './DefauleProps1'
import DefaultProps from './DefauleProps1'


const DefaultComponents = () => {
    let data = "user1"
     return(
        <div>
            <h1>DefaultComponent</h1>
            <DefaultProps1 abc={data}/>
           
            <DefaultProps1/>
        </div>
    
    
    )
}

export default DefaultComponent
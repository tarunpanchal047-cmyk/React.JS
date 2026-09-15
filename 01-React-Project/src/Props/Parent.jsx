import Child from "./Child"


const Parent = (props) => {
    let {str} = props;
    return (
       <>
       <h1>Parent</h1>
       <Child data={str} />
       </> 
    
    )
}


export default Parent 
import Parent from "./Parent"

const GrandParent = () =>{
    let str = "MainUser"
     return (
        <>
        <h1>GrandParent : {str}</h1>
        <Parent str={str} />
        </>
    )
}

export default GrandParent
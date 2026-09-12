//! PROPS : ----------
// -------------------

//^ It is a component that passing the data form one component to another component is known as props.
//& Props is available in both class Base component and function base component.
//& It is passed just we passes attributes in the html.



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
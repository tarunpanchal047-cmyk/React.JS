//! Pros Drilling : --------
// -----------------

//^ Passing the data from one component to nested child component is known as props drilling.
//& The disadvantage is props drilling is unnecessary re-rendering of component to avoid this 
//& unnecessary re-rendering of component we using one hook that is use context(context API).

//? -> Props are immutable and uni-directional.






import ChildProps from "./ChildProps"


const ParentProps = () => {
    let str = "abcd"
    let skills = ["HTML", "CSS", "JS"]
    let obj = {
        id : 1,
        objName : "Tarun",
        address : {
            pin : 247776,
            street : "xyz"
        }
    }

    return (
    <div>
        <h1>ParentProps</h1>
        <ChildProps data1={str} data2={skills} data3={obj} />
    </div>
)
}

export default ParentProps
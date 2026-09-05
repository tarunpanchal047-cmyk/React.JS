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
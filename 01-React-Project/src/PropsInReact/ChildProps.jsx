const ChildProps = (props) => {
    let {data1,data2,data3} = props

    // console.log(data1)
    // console.log(data2)
    // console.log(data3)


    return (
        <div>
            <h1>CholdProps</h1>
            <h2>String : {data1}</h2>
            <h2>Array : {data2}</h2>
            <h2>Object_ID : {data3.id}</h2>
             <h2>Object_Name : {data3.objName}</h2>
        </div>
    )
}

export default ChildProps
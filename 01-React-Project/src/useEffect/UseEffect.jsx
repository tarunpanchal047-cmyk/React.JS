import React, { Fragment, useEffect, useState } from "react";

const UseEffect = () => {
//   let [data, setData] = useState([]);
//   useEffect(function () {
//     async function fetchData() {
//       let res = await fetch("https://fakestoreapi.com/products");
//       let actualRes = await res.json();
//       setData(actualRes);
//     }
//     fetchData();
//   }, []); // Mounting

//  // console.log(data)

// useEffect(()=>{
//   let count = 0
//   let clearData = setInterval(()=>{
//     console.log(count)
//     count++
//   }, 1000)
//   return ()=>{
//     clearInterval(clearData)
//   }
// }, [])



let [count,setCount] = useState(0)
useEffect(()=>{
  document.title = `Message ${count}`
}, [count])



  return (
    <div>
      <h1>UseEffect : {count}</h1>
      {/* {data.map((val) => {
        let { id, category, price, image } = val;

        // console.log(id,price,category,image)
        return (
          <Fragment key={id}>
            <h2>{id}</h2>
            <h2>{category}</h2>
            <h2>{price}</h2>
            <img src={image} alt="" height={200} width={200}></img>
          </Fragment>
        );
      })} */}

<button onClick={()=>setCount(count++)}>Increment</button>

    </div>
  );
};

export default UseEffect;

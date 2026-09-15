// **Hooks**

//^ - **Hooks are special functions provided by React that allow functional components to use React features such
//^  as state, effects, context, etc.** Hooks were introduced in **React 16.8**.


//! Use State :  -----------
// -------------------

//^ -->  useState is a react hook which helps function base component to make it form stateless to stateful.
//^  It accepts one argument that is called initial value and it returns an array. which consists two value.
//^  First value is the variable which holds the initial value. And 2nd value is the updater function which
//^  help to update initial value. 




import { useState } from "react";
function StateInFbc() {
    // let count = 10;

    let [count, setCount] = useState(0)
    // console.log(count)
    // console.log(setCount)

    function increment() {
        console.log(count)
        setCount(count++)
    }
    return (
        <>
            <h1>State In function Based Component {count} </h1>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default StateInFbc
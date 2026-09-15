import { useState } from "react";

import Cbc from "./components/Cbc";
import Fbc from "./components/Fbc";
import Navbar from "./components/Navbar";

import DefaultComponent from "./DefaultPorps/DefaultComponent";
import DefaultComponent2 from "./DefaultProps2.jsx/DefaultComponent2";
import DefaultProps2 from "./DefaultProps2.jsx/DefaultProps2";

import GrandParent from "./Props/GrandParent";
import ParentProps from "./PropsInReact/ParentProps";

import StateInCbc from "./State/StateInCbc";
import StateInFbc from "./State/StateInFbc";

import LifeCycleCbc from "./LifeCycle/LifeCycleCbc";
import LifeCycleInFbc from "./LifeCycle/LifeCycleInFbc";

import UseEffect from "./useEffect/UseEffect";
import UseLayoutEffect from "./useLayout/UseLayoutEffect";

import InlineCSS from "./inlineCSS/InlineCSS";
import InternalCSS from "./inlineCSS/InternalCSS";
import Button from "./inlineCSS/ButtonModule/Button";
import ExternalCSS from "./inlineCSS/ExternalCSS/ExternalCSS.jsx";

import Myntra from "./01.Myntra/Myntra.jsx";

import ContextParent from "./contextAPI/ContextParent.jsx";
import ContextGrandParent from "./ContextAPI2/ContextGrandParent.jsx";
import Reducer from "./useReducer/Reducer.jsx"
import Control from "./Control/Control.jsx";
import UnControl from "./Control/UnControl.jsx";
import UseEffect2 from "./useEffect/UseEffect2.jsx";




const App = () => {

  // let [toggle,setToggle] = useState(false)

  // console.log(Toggle)

  return (
    <div>
      <h1>App</h1>
          {/* <Navbar/> */}


      {/* <h1>App</h1>
      <h2>App</h2>

    <div className='card'>
      <h1>Tarun Pancahl</h1>
<p>Lorem is the big person </p>
    </div>

    <Cbc/>
    <Fbc/>
    
    <StateInFbc/>
    <StateInCbc/> */}

   {/* <ParentProps/>

<GrandParent/> */}

{/* <DefaultComponent/> */}
{/* <DefaultProps2/> */}


  {/* <button onClick={()=>setToggle(!toggle)}>Toggle</button>
{ toggle ? <LifeCycleCbc/> : "No-Component" } */}

{/* 
 <button onClick={()=>setToggle(!toggle)}>Toggle</button>
{ toggle ? <LifeCycleInFbc/> : "No-Component" } */}


 {/* <button onClick={()=>setToggle(!toggle)}>Toggle</button>
{ toggle ? <UseEffect/> : "No-Component" } */}

{/* <UseLayoutEffect/> */}

<UseEffect2/>


{/* <InlineCSS/> */}


{/* <InternalCSS/> */}
{/* <ExternalCSS/> */}

{/* <Button/> */}



{/* <Myntra/> */}




{/* <ContextParent/>*/}


{/* <ContextGrandParent/> */}


{/* <Reducer/> */}
{/* <Control/> */}

{/* <UnControl/> */}

    </div>
  )
}
export default App

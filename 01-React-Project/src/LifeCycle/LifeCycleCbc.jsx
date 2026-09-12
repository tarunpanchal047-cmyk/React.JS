//! Phases of Component or Life Cycle 
// -------------------------------------------
//^ -> React lifecycle means the different stages a component goes through. 
//! There are three phases of component :
//? 1. Mounting phase
//? 2. Updation phase 
//? 3. Unmounting phase 

//! (i) Mounting Phase :
// ----------------------------
//^  whenever any component is renders first time on UI this Phase is called Mountung phase.

//! (ii) Updation phase : 
// ---------------------------
//^ when ever any state of props of a component changes is an component gets re-rendered this
//^  phase comes under updation phase

//! (iii) Unmounting phase :
// ------------------------------
//^  whenever the component is removed from the UI this phase is known as Unmounting phase. 
//^ decides this 3 main phase there is one more phase that is error handling.

//!  Error Handing : 
// ---------------------
//^ In react life cycle is the process where react catchs the errror in component and prevents
//^  the entire app form crassing. React introduce this feature in react 16 with error boundries.


import  { Component } from "react"

export default class LifeCycleCbc extends Component {
 state = {
    count : 0
 }
 componentDidMount(){
    console.log("Mounting Phase")
 }
 componentDidUpdate(){
    console.log("Updation Phase")
 }
 componentWillUnmount(){
    console.log("Unmounting Phase")
 }
 Increment = () =>{
    this.setState({count : this.state.count + 1})
 }
 render(){
    return (
        <div>
            <h1>LifeCycleCbc : {this.state.count}</h1>
            <button onClick={this.Increment}>Increment</button>
        </div>
    )
 } 
}

 
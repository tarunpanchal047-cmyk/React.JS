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

 
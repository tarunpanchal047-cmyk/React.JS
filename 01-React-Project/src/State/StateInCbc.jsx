import React, { Component } from "react";

export default class StateInCbc extends Component {
    state = {
        count: 0,
        objName: "abc"
    }
    Increment = () => {
        console.log("function is called")
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        // console.log(this.state.count)
        return (
            <div>
                <h1>Class based component count : {this.state.count}</h1>
                <button onClick={this.Increment}>Increment</button>
            </div>
        )
    }
}
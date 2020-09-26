import React, { Component } from 'react'
import Number from "./Number"


interface IState{
  counter:number;
}


export default class App extends Component<{},IState> {
  state={
    counter:0
  }
  render() {
    const {counter} =this.state
    return (
      <div>
        <Number count={counter}></Number>

        <button onClick={this.add}>add</button>
      </div>
    )
  }

  add = ():void => {
    this.setState(prev => {
      return{counter : prev.counter + 1}
    })
  }
}

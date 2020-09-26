import React, { Component, FormEvent } from 'react'
import Number from "./Number"
import {Input, Form} from "./Input"


interface IState{
  counter:number;
  name: string
}


export default class App extends Component<{},IState> {
  state={
    counter:0,
    name:""
  }
  render() {
    const {counter,name} =this.state
    return (
      <div>

      <Form onSubmit={this.onFormSubmit}>
        <Input value={name} onChange={this.onChange}></Input>
        
      </Form>

        <Number count={counter}></Number>

        <button onClick={this.add}>add</button>
      </div>
    )
  }


  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target)
  }

  onFormSubmit=(event:React.FormEvent)=>{
    event.preventDefault()
  }

  add = ():void => {
    this.setState(prev => {
      return{counter : prev.counter + 1}
    })
  }
}

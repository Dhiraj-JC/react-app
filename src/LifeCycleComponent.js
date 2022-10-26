import React, { Component } from 'react'

export default class LifeCycleComponent extends Component {
    
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={()=> {this.setState({message: "HI everyone"})}}>Change Message</button>
      </>
    )
  }

}

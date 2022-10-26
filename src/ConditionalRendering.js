import React, { Component } from 'react'

export default class ConditionalRendering extends Component {

    constructor() {
        super();
        this.state = {
            visible: true,
        }
    }

  render() {
    //  if(this.state.visible) {
    //     return <h1>If Condition is true then i will be visible</h1>
    // } else {
    //     return <h1>If Condition is false then i will be visible</h1>  
    // }

    //return this.state.visible ? <h1>If Condition is true then i will be visible</h1> : <h1>If Condition is false then i will be visible</h1>  

    return this.state.visible && <h1>If Condition is true then i will be visible</h1>;
  }
}

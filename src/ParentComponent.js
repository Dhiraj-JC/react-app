import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
  
    constructor() {
        super();

    }

    DisplayMessage(data) {
        console.log("Parent Component Method Executed", data);
    }
  
    render() {
    return (
        <>
            <div>ParentComponent {this.props.name}</div>
            <ChildComponent DisplayMessageHandler={this.DisplayMessage}  />
        </>
      
    )
  }
}

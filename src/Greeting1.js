import React, { Component } from 'react'

export default class Greeting1 extends Component {

    constructor() {
        super();

        this.state = {
            message: "Hello from state"
        }
        //this.ChangeMessage = this.ChangeMessage.bind(this)
        this.DIsplayMessage = this.DIsplayMessage.bind(this)
    }

    ChangeMessage(message) {
        this.setState({message: message});
    }

    ChangeMessage2(message) {
      this.setState({message: message});
  }


  DIsplayMessage() {
    console.log('This : ',this);
    this.setState({message: "Display Message"});
  }



  render() {
    return (
        <>
      <div>{this.state.message}</div>
      <button onClick={this.DIsplayMessage}>Display Message</button>
      {/* <button onClick={()=> {this.ChangeMessage()}} >Change the message</button> */}

      {/* <p onMouseEnter={()=> {this.ChangeMessage("On Mouse Enter")}} onMouseLeave={()=> {this.ChangeMessage2("On Mouse leave")}} >Change the message</p> */}

      </>
    )
  }


}

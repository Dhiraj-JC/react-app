import React, { Component } from 'react';

export default class Counter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    IncremnetCounter() {
        // this.setState({ count: this.state.count + 1},()=>{
        //     console.log("SET STATE CALLBACK : " +this.state.count);
        // });
        // console.log(this.state.count);

        this.setState((previousState)=> ({
            count: previousState.count + 1
        }));
    }


    IncremnetCounterByThree() {
        // this.IncremnetCounter();
        // this.IncremnetCounter();
        // this.IncremnetCounter();

        for (let index = 0; index < 25000; index++) {
          this.IncremnetCounter();
          
        }
    }

    IncremnetCounterBy25000() {
      this.setState({ count: this.state.count + 25000},()=>{
            console.log("SET STATE CALLBACK : " +this.state.count);
        });
    }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={()=> {this.IncremnetCounter()}}>Increment</button>
        <button onClick={()=> {this.IncremnetCounterByThree()}}>Increment By 3</button>
        <button onClick={()=> {this.IncremnetCounterByThree()}}>Increment By 25000</button>
      </>
    );
  }
}

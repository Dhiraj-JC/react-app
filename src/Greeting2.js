import React from 'react'

export default function Greeting2() {

    function ClickMe() {
        console.log("Button Clicked")
    }


  return (
    <>
        <div>Greeting2</div>
        <button onClick={ClickMe}>Click me</button>
    </>
  )
}

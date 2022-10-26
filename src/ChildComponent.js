import React from 'react'

export default function ChildComponent({DisplayMessageHandler}) {
  return (
    <>
        <div>ChildComponent</div>
        <button onClick={()=> {DisplayMessageHandler("Data from child")}}>Execute Parent function</button>
    </>
    
  )
}

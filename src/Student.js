import React from 'react';
import './student.css';

export default function Student({ student }) {
  
  
  return (
    <>
      <p id="Header" >Student Name : {student.name}</p>
      <p >Address : {student.Address}</p>
      <span>Age : {student.age}</span>
    </>
  );
}

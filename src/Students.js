import React from 'react'
import Student from './Student';
import './Students.css';
// import styles from './customStudents.module.css';

export default function Students() {
    const students = [
        { id: 2, name: 'DHiraj', Address: 'Main  street', age: 21 },
        { id: 1, name: 'Rati', Address: 'Main  street', age: 25 },
        { id: 3, name: 'oksana', Address: 'Main  street', age: 18 },
        { id: 4, name: 'Farhan', Address: 'Main  street', age: 19 },
      ];
  return (
    <>
        <h1 id="Header">Students Component</h1>
        <p >Display list of Students</p>
        {students.map((student) => (
            <Student key={student.id} student={student}/>
      ))}
    </>
  )
}

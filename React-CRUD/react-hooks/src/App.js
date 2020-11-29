import React, { useState } from 'react'
import './App.css';
import './StudentTable'
import StudentTable from './StudentTable'
import AddStudentForm from './forms/AddStudentForm'
import EditStudentForm from './forms/EditStudentForm'

const App = () => {
  const studentsData=[
  {
    id:1,
    firstName:'Peter',
    lastName:'Williams',
    enrolled: false,
  },
  {
    id:2,
    firstName:'McDonald',
    lastName:'McD',
    enrolled: true,
  },
  {
    id:3,
    firstName:'Elizabeth',
    lastName:'Waldimir',
    enrolled: false,
  },
]

  const initialFormState = {id:null, firstname: '', lastName:'', enrolled:false}

  const [editing, setEditing] = useState(false) 
  const [students, setStudents] = useState(studentsData);
  const [currentStudent, setCurrentStudent] = useState(initialFormState)


  const addStudent = (student) => {
    student.id = students.length + 1
    setStudents([...students, student])
  }

  const deleteStudent = (id) => {
    console.log(id)
    setStudents(students.filter((student) => student.id !== id ))
  }

  const editRow = (student) => {
    setEditing(true)
    setCurrentStudent({id: student.id, firstName: student.firstName, lastName: student.lastName, enrolled: student.enrolled})
  }

  const updateStudent = (id, updatedStudent) => {
    setEditing(false)
    setStudents(students.map((student) => (student.id === id ? updatedStudent : student)))
  }

  return (
    <div className="container">
      <div className="text-center jumbotron">
        <h1><u> STUDENTS PROFILE </u> </h1>
        <p>Add, update, view or delete students information</p>
      </div>
     <div className="jumbotron">
      <div className="d-flex">
        <div className="flex-large">
          {
            editing ? (
              <div>
              <h4 className="bg-secondary text-white text-center">EDIT STUDENT</h4>
              <EditStudentForm setEditing={setEditing} currentStudent={currentStudent} updateStudent={updateStudent} />
            </div>
            ):(
              <div>
              <h4 className="bg-secondary text-white text-center">ADD STUDENT</h4>
              <AddStudentForm addStudent={addStudent} />
            </div>
            )
          }
        </div>     
        <div className="flex-large ml-auto">
          <h4 className="bg-secondary text-white text-center">VIEW STUDENTS</h4>
          <StudentTable students={students} deleteStudent={deleteStudent} editRow={editRow}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
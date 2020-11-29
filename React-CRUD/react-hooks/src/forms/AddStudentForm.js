import React, { useState } from 'react'

const AddStudentForm = (props) => {
    
const initialFormState = {id:null, firstName:'', lastName:'', enrolled: false}

const[student, setStudent] = useState(initialFormState);

const handleInputChange = (event) => {
    const {name, value} = event.target
    setStudent({...student, [name]: value})
}

  return (
    <div>
        <form onSubmit={(event) => {
            event.preventDefault()
            if(!student.firstName || !student.lastName) return

            props.addStudent(student)
            setStudent(initialFormState)
            }}>
            <div>
                <label>First Name:</label>
                <input type="text" className="form-control" name="firstName" defaultValue={student.firstName} onBlur={handleInputChange}/>
            </div>         
            <div>
                <label>Last Name:</label>
                <input type="text" className="form-control" name="lastName" defaultValue={student.lastName} onBlur={handleInputChange}/>
            </div>  
            <div>
                <label><input type="checkbox" name="enrolled" checked={student.enrolled} defaultValue="false" onBlur={handleInputChange}/>  Enrolled: </label>
            </div> 
            <button type="submit" className="btn btn-primary">Add Student</button>
        </form>
    </div>
  )
}

export default AddStudentForm
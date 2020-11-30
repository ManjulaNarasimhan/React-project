import React, { useState } from 'react'

const AddStudentForm = (props) => {
    
const initialFormState = {id:null, firstName:'', lastName:'', enrolled: false}
const[student, setStudent] = useState(initialFormState);

const handleInputChange = (event) => {
    let {name, value} = event.target
    value = (name === "enrolled") ? Boolean(value) : value
    setStudent({...student, [name]: value})
}

  return (
    <div>
        <form onSubmit={(event) => {
            event.preventDefault()
            if(!student.firstName || !student.lastName) return
            props.addStudent(student)
            setStudent(initialFormState)            
            event.target.reset()
            }}>
               
            <div>
                <label>First Name:</label>
                <input type="text" title= "First Name is Required" className="form-control" name="firstName" defaultValue={student.firstName} onBlur={handleInputChange}/>
            </div>         
            <div>
                <label>Last Name:</label>
                <input type="text" title="Last Name is Required" className="form-control" name="lastName" defaultValue={student.lastName} onBlur={handleInputChange}/>
            </div>  
            <div>
                <label><input type="checkbox" name="enrolled" defaultChecked={student.enrolled} defaultValue={student.enrolled} onBlur={handleInputChange}/>  Enrolled: </label>
            </div> 
            <button type="submit" className="btn btn-primary">Add Student</button>
        </form>
    </div>
  )
}

export default AddStudentForm
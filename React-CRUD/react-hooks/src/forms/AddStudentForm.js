import React, { useState, useEffect } from 'react'
import validate from './formValidation'

const AddStudentForm = (props) => {
    
const initialFormState = {id:null, firstName:'', lastName:'', enrolled: false}
const[student, setStudent] = useState(initialFormState);
const [errors, setErrors] = useState({});

useEffect(() => {
    if (Object.keys(errors).length === 0) {
        console.log('No errors!');
    }
  }, [errors]);

const handleInputChange = (event) => {
    setErrors({})
    const {name, value} = event.target
  //  value = (name === "enrolled") ? Boolean(value) : value
    setStudent({...student, [name]: value})
}

  return (
    <div>
        <form onSubmit={(event) => {
            event.preventDefault()
            if(!student.firstName || !student.lastName){
                setErrors(validate(student));
                return
            }else{
                setErrors({})
                props.addStudent(student)
                setStudent(initialFormState)            
                event.target.reset()
              }
            }}>
               
            <div>
                <label>First Name:</label>
                <div className="control">
                <input type="text" autoComplete="off" className={`form-control input ${errors.firstName && 'is-danger'}`} name="firstName" defaultValue={student.firstName} onBlur={handleInputChange}/>           
                {errors.firstName && (
                    <p className="help is-danger">{errors.firstName}</p>
                  )}
                </div>
            </div>         
            <div>
                <div className="control">
                <label>Last Name:</label>
                <input type="text" autoComplete="off" className={`form-control input ${errors.lastName && 'is-danger'}`} name="lastName" defaultValue={student.lastName} onBlur={handleInputChange}/>
                {errors.lastName && (
                    <p className="help is-danger">{errors.lastName}</p>
                  )}
                </div> 
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
import React, {useState, useEffect} from 'react'
import validate from './formValidation'

const EditStudentForm = (props) => {
    const [student, setStudent] = useState(props.currentStudent)
    const [errors, setErrors] = useState({});
        
    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            console.log('No errors!');
        }
    }, [errors]);


    const handleInputChange = (event) => {
        setErrors({})
        const {name, value} = event.target
        setStudent({...student, [name]: value})
    }

    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            if(!student.firstName || !student.lastName){
                setErrors(validate(student));
                return
            }else{
                setErrors({})
                props.updateStudent(student.id, student)
            }
        }}
        >
            <div>
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
            <button type="submit" className="btn btn-primary">Update Student</button>   
            <button onClick={() => props.setEditing(false)} className="btn btn-link">Cancel</button> 
        </form>
    )
}

export default EditStudentForm
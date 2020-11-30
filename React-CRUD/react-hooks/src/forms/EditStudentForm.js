import React, {useState} from 'react'

const EditStudentForm = (props) => {
    const [student, setStudent] = useState(props.currentStudent)

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setStudent({...student, [name]: value})
    }

    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            props.updateStudent(student.id, student)
        }}
        >
            <div>
                <label>First Name:</label>
                <input type="text" title="First Name is Required" className="form-control" name="firstName" defaultValue={student.firstName} onBlur={handleInputChange}/>
            </div>         
            <div>
                <label>Last Name:</label>
                <input type="text" title="Last Name is Required" className="form-control" name="lastName" defaultValue={student.lastName} onBlur={handleInputChange}/>
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
import React from 'react'

const StudentTable = (props) => (
  <table className="table table-striped">
    {
    console.log(props.students + "=========" + typeof(props.students))
    }
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Enrolled</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {props.students.length > 0 ? (
            props.students.map((student)=>(
                <tr key={student.id}>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.enrolled?"Yes":"No"}</td>
                    <td>
                    <button className="btn btn-warning" onClick={() => props.editRow(student)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => props.deleteStudent(student.id)}>Delete</button>
                    </td>
                </tr>
            ))
        ):(
            <tr>
                <td colSpan={3}>No users</td>
            </tr>
        )}
      
    </tbody>
  </table>
)

export default StudentTable
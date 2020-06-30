import React, { Component } from 'react';
import StudentData from "../service/StudentData";

class StudentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: [],
        }

        this.refreshStudents = this.refreshStudents.bind(this)
        this.deleteStudents = this.deleteStudents.bind(this)
    }

    componentDidMount()
    {
        this.refreshStudents(this.props.match.params.id);
    }

    refreshStudents()
    {
        StudentData.getAllStudents()
            .then(
                response => {
                    this.setState({students: response.data})
                }
            )
    }

    getStudent(id) {
        this.props.history.push(`/students/${id}`)
    }

    deleteStudents(id) {
        StudentData.deleteStudent(id)
            .then(
                () => {
                    this.refreshStudents()
                })
    }



    render() {
        return (
            <div className="container">
                <h4>All students</h4>
                <br />
                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.students.length > 0 ? (
                            this.state.students.map(
                                student =>
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td><button className="btn btn-outline-dark btn-sm btn-margin-right" onClick={(e) => { this.getStudent(student.id) } }>Edit</button>
                                        <button className="btn btn-dark btn-sm" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this student?')) this.deleteStudents(student.id) } }>Delete</button></td>
                                    </tr>
                            )
                        ) : (
                            <tr>
                                <td colSpan={3}>No students</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentList;

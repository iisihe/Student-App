import React, { Component } from "react";
import StudentData from "../service/StudentData";
import {NotificationContainer, NotificationManager} from "react-notifications";

export default class StudentManagement extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: "",
            email: "",
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    componentDidMount() {
        StudentData.getStudent(this.props.match.params.id)
            .then(
                response => {
                    this.setState( {
                       name: response.data.name,
                       email: response.data.email
                    })
                }
            )
    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    updateStudent() {
        var data = {
            id: this.props.match.params.id,
            name: this.state.name,
            email: this.state.email
        };

        if (this.state.name.length > 0) {

            StudentData.updateStudent(this.props.match.params.id, data)
                .then(() => {
                    NotificationManager.success('Student updated successfully', '', 1000);
                })
                .catch(e => {
                    console.log(e);
                });
        }
        else {
            NotificationManager.error('Student must have name', 'Name required', 1000);
        }


    }

    render() {
        return (
            <div className="submit-form">
                <div>
                    <h4>Edit student</h4>
                    <br />
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name || ""}
                            onChange={this.handleChangeName}
                        />
                        <label>Emailaddress</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.email || ""}
                            onChange={this.handleChangeEmail}
                        />
                    </div>

                    <button onClick={this.updateStudent} className="btn btn-dark">
                        Save
                    </button>
                    <NotificationContainer/>
                </div>
            </div>
        );
    }
}
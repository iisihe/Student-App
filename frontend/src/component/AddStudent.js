import React, { Component } from "react";
import StudentData from "../service/StudentData";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default class AddStudent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: "",
            email: "",
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
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

    saveStudent() {
        var data = {
            name: this.state.name,
            email: this.state.email
        };

        if (this.state.name.length > 0) {

            StudentData.addStudent(data)
                .then(response => {
                    NotificationManager.success('Student added with name ' + this.state.name, 'Student added', 1000);
                    this.setState({
                        id: response.data.id,
                        name: response.data.name,
                        email: response.data.email,
                    })

                })
                .catch(e => {
                    console.log(e);
                });
        }
        else {
            NotificationManager.error('Cannot add student without name', 'Name required', 1000);
        }


    }

    render() {
        return (
            <div className="submit-form">
                <div>
                    <h4>Add student</h4>
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

                    <button onClick={this.saveStudent} className="btn btn-dark">
                        Save
                    </button>
                    <NotificationContainer/>
                </div>
            </div>
        );
    }
}

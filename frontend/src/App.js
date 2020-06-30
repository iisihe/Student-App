import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StudentList from './component/StudentList';
import AddStudent from "./component/AddStudent";
import EditStudent from "./component/EditStudent"
import StudentManagement from "./component/StudentManagement";
import NavbarImage from "./images/navbar-image.png"

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand navbar-light color-nav">
                        <a href="/" className="navbar-brand">
                            <img src={NavbarImage}  alt="Student"/>
                            Student management
                        </a>

                        <div className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/students"} className="nav-link">
                                    All students
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/addstudent"} className="nav-link">
                                    Add student
                                </Link>
                            </li>
                        </div>
                    </nav>

                    <div className="container mt-3">
                        <Switch>
                            <Route exact path="/" component={StudentManagement} />
                            <Route exact path="/students" component={StudentList} />
                            <Route exact path="/addstudent" component={AddStudent} />
                            <Route path="/students/:id" component={EditStudent} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
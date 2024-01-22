import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/AddCourses.css';
import SidebarAdmin from './SidebarAdmin';

const AddTeacher = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        if (e.target.name === "teacherName") {
            setName(e.target.value);
        } else if (e.target.name === "emailId") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8080/addteacher", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if (data.success) {
            console.log(data.teacher);
        } else {
            console.log("error adding a new teacher");
        }

        setName("");
        setEmail("");
        setPassword("");
    };

    const handleGoBack = () => {
        history.goBack();
    };

    return (
        <div className="teacher-dashboard">
            <SidebarAdmin />

            <div className="content">
                <div className="main-content">
                    <div className="header">
                        {/* <button className="back-button" onClick={handleGoBack}>
                            Back
                        </button> */}
                        {/* <h1>Add Teacher</h1> */}
                    </div>
                    <form className="add-courses-form" onSubmit={handleSubmit}>
                        <label>
                            Teacher Name:
                            <input
                                type="text"
                                name="teacherName"
                                required
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Email ID:
                            <input
                                type="text"
                                name="emailId"
                                required
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                required
                                onChange={handleChange}
                            />
                        </label>

                        <button type="submit">Add a New Teacher</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTeacher;

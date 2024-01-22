import React, { useState } from 'react';
import '../styles/AddCourses.css'; // Import the CSS file
import SidebarAdmin from './SidebarAdmin';

const AddTeacher = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        if(e.target.name === "teacherName"){
            setName(e.target.value);
        }
        else if(e.target.name === "emailId"){
            setEmail(e.target.value);
        }
        else if(e.target.name === "password"){
            setPassword(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch("http://localhost:8080/addteacher", {
            method: "POST",
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const data = await response.json();

        if(data.success){
            console.log(data.teacher);
        }
        else{
            console.log("error adding a new teacher");
        }


        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="teacher-dashboard">
            <SidebarAdmin />

            <div className="content">
                {/* Add main content here */}
                <div className="main-content">
                    <div> {JSON.stringify({name, email, password})} </div>
                    <form className="add-courses-form" onSubmit={handleSubmit}>
                        <h1>Add Teacher</h1>

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

                        <button type="submit">Add Teacher</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTeacher;

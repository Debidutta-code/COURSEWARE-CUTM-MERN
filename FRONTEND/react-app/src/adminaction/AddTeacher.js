import React, { useState } from 'react';
import '../styles/AddCourses.css'; // Import the CSS file
import SidebarAdmin from './SidebarAdmin';

const AddTeacher = () => {
    const [formData, setFormData] = useState({
        teacherName: '',
        emailId: '',
        password: '',
        reEnterPassword: '',
    });

    const [passwordMatchError, setPasswordMatchError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === 'reEnterPassword') {
            // Check if the passwords match
            if (formData.password !== value) {
                setPasswordMatchError('Passwords do not match');
            } else {
                setPasswordMatchError('');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
        <div className="teacher-dashboard">
            <SidebarAdmin />

            <div className="content">
                {/* Add main content here */}
                <div className="main-content">
                    <div> {JSON.stringify(formData)} </div>
                    <form className="add-courses-form" onSubmit={handleSubmit}>
                        <h1>Add Teacher</h1>

                        <label>
                            Teacher Name:
                            <input
                                type="text"
                                name="teacherName"
                                required
                                onChange={handleChange}
                                value={formData.teacherName}
                            />
                        </label>

                        <label>
                            Email ID:
                            <input
                                type="text"
                                name="emailId"
                                required
                                onChange={handleChange}
                                value={formData.emailId}
                            />
                        </label>

                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                required
                                onChange={handleChange}
                                value={formData.password}
                            />
                        </label>

                        <label>
                            Re-Enter Password:
                            <input
                                type="password"
                                name="reEnterPassword"
                                required
                                onChange={handleChange}
                                value={formData.reEnterPassword}
                            />
                            {passwordMatchError && <p className="error-message">{passwordMatchError}</p>}
                        </label>

                        <button type="submit">Add Teacher</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTeacher;

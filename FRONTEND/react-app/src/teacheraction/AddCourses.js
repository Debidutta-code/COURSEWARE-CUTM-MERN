// AddCourses.js

import React, { useState } from 'react';
import '../styles/AddCourses.css'; // Import the CSS file
import Sidebar from './Sidebar';

const AddCourses = () => {
  const [subjectName, setSubjectName] = useState('');
  const [subjectCode, setSubjectCode] = useState('');
  const [subjectCredit, setSubjectCredit] = useState('');
  const [subjectTeacher, setSubjectTeacher] = useState('');
  const [subjectModules, setSubjectModules] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/techer/addcourses", {
      method: "POST",
      body: JSON.stringify({
        subjectName,
        subjectCredit,
        subjectCode,
        subjectTeacher,
        subjectModules
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    const data = await response.json();

    if (data.success) {
      console.log("course => ", data.course);
    }

    // Reset the form fields after submission
    setSubjectName('');
    setSubjectCode('');
    setSubjectCredit('');
    setSubjectTeacher('');
    setSubjectModules({});
  };

  const handleAddModule = () => {
    const newModuleKey = `module-${Object.keys(subjectModules).length + 1}`;
    setSubjectModules((prevModules) => ({
      ...prevModules,
      [newModuleKey]: '',
    }));
  };

  const handleRemoveModule = (key) => {
    const { [key]: removedModule, ...restModules } = subjectModules;
    setSubjectModules(restModules);
  };

  const handleModuleChange = (key, value) => {
    setSubjectModules((prevModules) => ({
      ...prevModules,
      [key]: value,
    }));
  };

  return (
    <div className="teacher-dashboard">
      {/* Include the Sidebar component with teacherData prop */}
      <Sidebar />

      <div className="content">
        {/* Add main content here */}
        <div className="main-content">
          <form className="add-courses-form" onSubmit={handleSubmit}>
            <h1>Add Courses</h1>

            <label>
              Subject Name:
              <input
                type="text"
                value={subjectName}
                required
                onChange={(e) => setSubjectName(e.target.value)}
              />
            </label>

            <label>
              Subject Code:
              <input
                type="text"
                value={subjectCode}
                required
                onChange={(e) => setSubjectCode(e.target.value)}
              />
            </label>

            <label>
              Subject Credit:
              <input
                type="number"
                value={subjectCredit}
                required
                onChange={(e) => setSubjectCredit(e.target.value)}
              />
            </label>

            <label>
              Subject Teacher:
              <input
                type="text"
                value={subjectTeacher}
                required
                onChange={(e) => setSubjectTeacher(e.target.value)}
              />
            </label>

            <label>
              Subject Modules:
              {Object.keys(subjectModules).map((key) => (
                <div key={key} className="module-input-container">
                  <input
                    type="text"
                    placeholder={`Module ${key.split('-')[1]}`}
                    value={subjectModules[key]}
                    onChange={(e) => handleModuleChange(key, e.target.value)}
                  />
                  {key !== '0' && (
                    <button
                      type="button"
                      className="remove-module-button"
                      onClick={() => handleRemoveModule(key)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={handleAddModule}>
                Add Module
              </button>
            </label>

            <button type="submit">Add Course</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourses;

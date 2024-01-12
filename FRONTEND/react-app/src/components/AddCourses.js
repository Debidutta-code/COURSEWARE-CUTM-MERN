// AddCourses.js

import React, { useState } from 'react';
import '../styles/AddCourses.css'; // Import the CSS file
import Sidebar from './Sidebar';

const AddCourses = () => {
  const [subjectName, setSubjectName] = useState('');
  const [subjectCode, setSubjectCode] = useState('');
  const [subjectCredit, setSubjectCredit] = useState('');
  const [subjectTeacher, setSubjectTeacher] = useState('');
  const [subjectModules, setSubjectModules] = useState([{ module: '' }]); // Initial state with one empty module

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Implement logic to handle form data (e.g., send it to the server)

    // Reset the form fields after submission
    setSubjectName('');
    setSubjectCode('');
    setSubjectCredit('');
    setSubjectTeacher('');
    setSubjectModules([{ module: '' }]);
  };

  const handleAddModule = () => {
    setSubjectModules([...subjectModules, { module: '' }]);
  };

  const handleRemoveModule = (index) => {
    const updatedModules = [...subjectModules];
    updatedModules.splice(index, 1);
    setSubjectModules(updatedModules);
  };

  const handleModuleChange = (index, value) => {
    const updatedModules = [...subjectModules];
    updatedModules[index] = { module: value };
    setSubjectModules(updatedModules);
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

            // AddCourses.js (continued)

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
              {subjectModules.map((module, index) => (
                <div key={index} className="module-input-container">
                  <input
                    type="text"
                    placeholder={`Module ${index + 1}`}
                    value={module.module}
                    onChange={(e) => handleModuleChange(index, e.target.value)}
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      className="remove-module-button"
                      onClick={() => handleRemoveModule(index)}
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

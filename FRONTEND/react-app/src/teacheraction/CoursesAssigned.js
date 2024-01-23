// CoursesAssigned.js
import React from 'react';
import Sidebar from './Sidebar';
import { useLocation, useHistory } from 'react-router-dom';
import '../styles/CoursesAssigned.css'; // Import the new CSS file

const CoursesAssigned = () => {
  const location = useLocation();
  const teacherData = location.state && location.state.teacherData;
  const history = useHistory();

  // Dummy data for demonstration
  const courses = [
    { subject_name: 'Mathematics', subject_code: 'MATH101' },
    { subject_name: 'English', subject_code: 'ENGL201' },
    { subject_name: 'Science', subject_code: 'SCI301' },
  ];

  const handleGoBack = () => {
    history.goBack(); // Go back to the previous page
  };

  return (
    <div className="courses-assigned">
      <Sidebar teacherData={teacherData} />

      <div className="content">
        <div className="main-content">
          <div className="header">
            <button className="back-button" onClick={handleGoBack}>
              Back
            </button>
          </div>

          <h1>Your Courses</h1>

          {/* Display three cards with subject_name and subject_code */}
          <div className="card-container">
            {courses.map((course, index) => (
              <div className="card" key={index}>
                <div className="card-content">
                  <h2>{course.subject_name}</h2>
                  <p>Subject Code : <b>{course.subject_code}</b></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesAssigned;

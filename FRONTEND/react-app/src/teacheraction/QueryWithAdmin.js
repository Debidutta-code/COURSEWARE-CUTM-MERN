// QueryWithAdmin.js
import React from 'react';
import Sidebar from './Sidebar';
import { useLocation, useHistory } from 'react-router-dom';
import '../styles/CoursesAssigned.css'; // Import the new CSS file

const QueryWithAdmin = () => {
  const location = useLocation();
  const teacherData = location.state && location.state.teacherData;
  const history = useHistory();

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

          <h1>Your Queries</h1>
          <h2>Hello world</h2>
        </div>
      </div>
    </div>
  );
};

export default QueryWithAdmin;

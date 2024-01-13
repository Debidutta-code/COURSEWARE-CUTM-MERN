// ModifyCourses.js

import React from 'react';
import Sidebar from './Sidebar';
import '../styles/ModifyCourses.css'; // Import the CSS file

const ModifyCourses = () => {
  // You can use useLocation and extract teacherData similar to TeacherDashboard

  return (
    <div className="modify-dashboard">
      {/* Include the Sidebar component with teacherData prop */}
      <Sidebar />

      <div className="content">
        {/* Add main content for ModifyCourses here */}
        <div className="main-content">
          <h1>Modify Courses</h1>
          {/* Add more content or components as needed */}
        </div>
      </div>
    </div>
  );
};

export default ModifyCourses;

// DeleteCourses.js

import React from 'react';
import Sidebar from './Sidebar';
import '../styles/DeleteCourses.css'; // Import the CSS file

const DeleteCourses = () => {
  // You can use useLocation and extract teacherData similar to TeacherDashboard

  return (
    <div className="delete-courses"> {/* Updated class name */}
      {/* Include the Sidebar component with teacherData prop */}
      <Sidebar />

      <div className="content">
        {/* Add main content for DeleteCourses here */}
        <div className="main-content">
          <h1>Delete Courses</h1>
          {/* Add more content or components as needed */}
        </div>
      </div>
    </div>
  );
};

export default DeleteCourses;

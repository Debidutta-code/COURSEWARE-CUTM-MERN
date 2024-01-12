// TeacherDashboard.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import the Sidebar component
import '../styles/TeacherDashboard.css';

const TeacherDashboard = () => {
  const location = useLocation();
  const teacherData = location.state && location.state.teacherData;

  return (
    <div className="teacher-dashboard">
      {/* Include the Sidebar component with teacherData prop */}
      <Sidebar teacherData={teacherData} />

      <div className="content">
        {/* Add main content here */}
        <div className="main-content">
          <h1>Dashboard</h1>
          {/* Add more content or components as needed */}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;

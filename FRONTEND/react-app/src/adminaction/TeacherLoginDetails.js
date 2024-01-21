// AdminDashboard.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/AdminDashboard.css';
import SidebarAdmin from './SidebarAdmin';

const TeacherLoginDetails = () => {
  const location = useLocation();
  const adminData = location.state && location.state.adminData;

  console.log("teacherlogindetails", adminData)

  return (
    <div className="admin-dashboard">
      <SidebarAdmin adminData={adminData} />

      <div className="content">
        <div className="main-content">
          <h1>Teacher Login Details</h1>
        </div>
      </div>
    </div>
  );
};

export default TeacherLoginDetails;

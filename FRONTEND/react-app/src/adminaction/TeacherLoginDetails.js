// TeacherLoginDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/AdminDashboard.css';
import SidebarAdmin from './SidebarAdmin';
import Table from './Table';

const TeacherLoginDetails = () => {
  const location = useLocation();
  const adminData = location.state && location.state.adminData;

  const data = [
    { teacherName: 'John Doe', loginTime: '09:00 AM', logoutTime: '04:30 PM', date: '2024-01-22' },
    { teacherName: 'Jane Smith', loginTime: '08:45 AM', logoutTime: '05:15 PM', date: '2024-01-23' },
    // Add more data as needed
  ];

  return (
    <div className="admin-dashboard">
      <SidebarAdmin adminData={adminData} />

      <div className="content">
        <div className="main-content">
          <h1>Teacher Login Details</h1>
          <Table data={data} />
        </div>
      </div>
    </div>
  );
};

export default TeacherLoginDetails;
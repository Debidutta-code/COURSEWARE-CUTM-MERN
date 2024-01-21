// AdminDashboard.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/AdminDashboard.css';
import SidebarAdmin from './SidebarAdmin';

const RequestPage = () => {
  const location = useLocation();
  const adminData = location.state && location.state.adminData;

  return (
    <div className="admin-dashboard">
      <SidebarAdmin adminData={adminData} />

      <div className="content">
        <div className="main-content">
          <h1>Request Page</h1>
        </div>
      </div>
    </div>
  );
};

export default RequestPage;

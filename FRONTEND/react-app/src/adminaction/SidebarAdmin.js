// Sidebar.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'

const SidebarAdmin = () => {
  const location = useLocation();
  const adminData = location.state && location.state.adminData;

  return (
    <div className="sidebar">
      <div className="user-section">
        <img
          src="https://placekitten.com/50/50" // Replace with the actual URL of the user photo
          alt="User"
          className="user-photo"
        />
        <h3>{adminData ? adminData['admin_name'] : 'Admin Name'}</h3>
      </div>
      
      <Link
        to={{
          pathname: '/admindashboard',
          state: { adminData: adminData },
        }}
        className="menu-item dashboard-menu-item"
      >
        <i className="fas fa-tachometer-alt"></i>
        Dashboard
      </Link>
      <Link
        to={{
          pathname: '/teacheractivity',
          state: { adminData: adminData },
        }}
        className="menu-item dashboard-menu-item"
      >
        <i className="fas fa-tachometer-alt"></i>
        Teacher Activity
      </Link>
      <Link
        to={{
          pathname: '/adminuserprofile',
          state: { adminData: adminData },
        }}
        className="menu-item userprofile-menu-item"
      >
        <i className="fas fa-plus-circle"></i>
        Profile
      </Link>
    </div>
  );
};

export default SidebarAdmin;

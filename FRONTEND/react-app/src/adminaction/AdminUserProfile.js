// UserProfile.js

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SidebarAdmin from './SidebarAdmin'; // Assuming Sidebar.js is in the same directory
import '../styles/UserProfile.css';

const AdminUserProfile = () => {
    const location = useLocation();
    const adminData = location.state && location.state.adminData;

    return (
        <div className="user-profile">
            {/* Include the Sidebar component */}
            <SidebarAdmin />

            <div className="content">
                {/* Add main content for UserProfile here */}
                <div className="main-content">
                    <div className="user-details">
                        <h1>Admin Profile</h1>
                        <div className="user-info">
                            <img
                                src="https://placekitten.com/150/150" // Replace with the actual URL of the user's avatar
                                alt="User Avatar"
                                className="user-avatar"
                            />
                            <div className="user-text">
                                <h2>{adminData['admin_name']}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus gravida ex, nec bibendum lacus accumsan vel.</p>
                                <Link to="/admineditprofile" className="edit-profile-button">
                                    Edit Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminUserProfile;

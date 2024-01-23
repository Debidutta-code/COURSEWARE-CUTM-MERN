// Sidebar.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'

const Sidebar = () => {
    const location = useLocation();
    const teacherData = location.state && location.state.teacherData;

    return (
        <div className="sidebar">
            <div className="user-section">
                <img
                    src="https://placekitten.com/50/50" // Replace with the actual URL of the user photo
                    alt="User"
                    className="user-photo"
                />
                <h3>{teacherData ? teacherData['teacher_name'] : 'Teacher Name'}</h3>
            </div>
            <Link
          to={{
            pathname: '/teacherdashboard',
            state: { teacherData: teacherData },
          }}
          className="menu-item dashboard-menu-item"
        >
                <i className="fas fa-tachometer-alt"></i>
                Dashboard
            </Link>
            <Link
          to={{
            pathname: '/addcourses',
            state: { teacherData: teacherData },
          }}
          className="menu-item addcourses-menu-item"
        >
          <i className="fas fa-plus-circle"></i>
          Add Courses
        </Link>


        {/* <Link
          to={{
            pathname: '/modifycourses',
            state: { teacherData: teacherData },
          }}
          className="menu-item modifycourses-menu-item"
        >
          <i className="fas fa-plus-circle"></i>
          Modify Courses
        </Link> */}


        {/* <Link
          to={{
            pathname: '/deletecourses',
            state: { teacherData: teacherData },
          }}
          className="menu-item deletecourses-menu-item"
        >
          <i className="fas fa-plus-circle"></i>
          Delete Courses
        </Link> */}

        
        <Link
          to={{
            pathname: '/userprofile',
            state: { teacherData: teacherData },
          }}
          className="menu-item userprofile-menu-item"
        >
          <i className="fas fa-plus-circle"></i>
          Profile
        </Link>
        </div>
    );
};

export default Sidebar;

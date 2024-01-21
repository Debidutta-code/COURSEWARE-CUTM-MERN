// TeacherActivity.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/TeacherActivity.css';
import SidebarAdmin from './SidebarAdmin';
import { Link } from 'react-router-dom';

const TeacherActivity = () => {
  const location = useLocation();
  const adminData = location.state && location.state.adminData;

  return (
    <div className="teacher-activity">
      <SidebarAdmin adminData={adminData} />

      <div className="teacher-content">
        <div className="teacher-main-content">


          <div className="teacher-card">
            <Link to={{ pathname: "/teacherlogindetails", state: { adminData } }}>
              <h2>Teacher Login Details</h2>
              <p>Look up the time when a teacher logged in</p>
            </Link>
          </div>

          <div className="teacher-card">
            <Link to={{ pathname: "/requestpage", state: { adminData } }}>
              <h2>Requests</h2>
              <p>Request May Contain Adding Or Deleting Courses</p>
            </Link>
          </div>

          <div className="teacher-card">
            <Link to={{ pathname: "/addteacher", state: { adminData } }}>
              <h2>Add Teacher</h2>
              <p>Add details for a new teacher</p>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeacherActivity;

// TeacherActivity.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/TeacherActivity.css';
import SidebarAdmin from './SidebarAdmin';
import { Link } from 'react-router-dom';

const TeacherActivity = () => {
  const location = useLocation();
  const adminData = location.state && location.state.adminData;

  const handleTeacherLoginDetails = () => {
    console.log("Teacher Login Details");
    
  }
  const handleModifyCourses = () => {
    console.log("Add or Delete Courses");
  }
  const handleAddTeacher = () => {
    console.log("Add Teacher");
  }

  return (
    <div className="teacher-activity">
      <SidebarAdmin adminData={adminData} />

      <div className="teacher-content">
        <div className="teacher-main-content">


          <div className="teacher-card">
            <Link to="/teacherlogindetails" onClick={handleTeacherLoginDetails}>
              <h2>Teacher Login Details</h2>
              <p>Look up the time when a teacher logged in</p>
            </Link>
          </div>

          <div className="teacher-card">
            <Link to="/teacherlogindetails" onClick={handleTeacherLoginDetails}>
            <h2>Requests</h2>
            <p>Request May Contain Adding Or Deleting Courses</p>
            </Link>
          </div>

          <div className="teacher-card">
            <Link to="/addteacher" onClick={handleTeacherLoginDetails}>
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

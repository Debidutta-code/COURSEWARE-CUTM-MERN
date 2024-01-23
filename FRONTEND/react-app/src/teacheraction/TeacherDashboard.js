// TeacherDashboard.js

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import AnnouncementBanner from './AnnouncementBanner';
import '../styles/TeacherDashboard.css';

const TeacherDashboard = () => {
  const location = useLocation();
  const teacherData = location.state && location.state.teacherData;

  return (
    <div className="teacher-dashboard">
      <Sidebar teacherData={teacherData} />

      <div className="content">
        <div className="main-content">

          {/* Announcement Banner */}
          <AnnouncementBanner />

          {/* Link the "Course Assigned" card to a different page */}
          <Link to={{
            pathname: '/coursesassigned',
            state: { teacherData: teacherData },
          }}>
            <div className='card'>
              <h2>Course Assigned</h2>
            </div>
          </Link>

          <Link to={{
            pathname: '/querywithadmin',
            state: { teacherData: teacherData },
          }}>
            <div className='card'>
              <h2>Queries with Admin</h2>
            </div>
          </Link>

          {/* Send Mail Form */}
          {/* ... (rest of the code remains unchanged) */}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;

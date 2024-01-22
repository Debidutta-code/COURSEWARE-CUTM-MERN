import React from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';
import '../styles/AdminDashboard.css';
import SidebarAdmin from './SidebarAdmin';
import '../styles/RequestPage.css';

const RequestPage = () => {
  const location = useLocation();
  const adminData = location.state && location.state.adminData;
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack(); // Go back to the previous page
  };

  return (
    <div className="admin-dashboard">
      <SidebarAdmin adminData={adminData} />

      <div className="content">
        <div className="main-content">
          <div className="header">
            <button className="back-button" onClick={handleGoBack}>
              Back
            </button>
          </div>

          <div className="request-card-container">
            {/* Card for Add Courses */}
            <Link to="/requestaddcourses" className="custom-card">
              <h2>Add Courses</h2>
            </Link>

            {/* Card for Delete Courses */}
            <Link to="/requestdeletecourses" className="custom-card">
              <h2>Delete Courses</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPage;

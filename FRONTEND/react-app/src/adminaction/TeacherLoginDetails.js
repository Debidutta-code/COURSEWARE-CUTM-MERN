import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import '../styles/AdminDashboard.css';
import SidebarAdmin from './SidebarAdmin';
import Table from './Table';

const TeacherLoginDetails = () => {
  const location = useLocation();
  const adminData = location.state && location.state.adminData;
  const history = useHistory();

  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/teacherlogindetails", {
          method: "GET",
        });

        const data = await response.json();
        if (data.success) {
          const sortedTeacherData = data.teachers.sort((a, b) => {
            const dateTimeA = `${a.teacher_login_date} ${a.teacher_login_time}`;
            const dateTimeB = `${b.teacher_login_date} ${b.teacher_login_time}`;
            return parseISO(dateTimeB) - parseISO(dateTimeA);
          });

          setTeacherData(sortedTeacherData.reverse());
        } else {
          console.error("Error fetching teacher login details");
        }
      } catch (error) {
        console.error("Error fetching teacher login details:", error);
      }
    };

    fetchData();
  }, []);

  const handleGoBack = () => {
    history.goBack();
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
            <h1>Teacher Login Details</h1>
          </div>
          <Table data={teacherData} />
        </div>
      </div>
    </div>
  );
};

export default TeacherLoginDetails;

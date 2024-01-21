import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/CourseDetails.css';

const CourseDetails = () => {
  console.log("course Details");
  const location = useLocation();
  const { courseDetails } = location.state || {};

  if (!courseDetails) {
    return <p>No course details available.</p>;
  }

  const subject = courseDetails['subject_name'];

  return (
    <div className="course-details-card">
      <h1 className="course-title">{subject}</h1>
      <div className="details-info">
        <p>
          <strong>Teacher:</strong> {courseDetails['subject_teacher']}
        </p>
        <p>
          <strong>Credit:</strong> {courseDetails['subject_credit']}
        </p>
      </div>
      <div>
        <h2 className="modules-title">Modules:</h2>
        <ul className="modules-list">
          {Object.entries(courseDetails['subject_modules']).map(([moduleKey, moduleName], index) => (
            <li key={index}>
              Module {index + 1}: {moduleName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;

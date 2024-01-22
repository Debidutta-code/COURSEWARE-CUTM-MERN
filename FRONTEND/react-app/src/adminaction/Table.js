// Table.js
import React from 'react';
import '../styles/Table.css'; // Import the CSS file

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Teacher Name</th>
            <th>Login Time</th>
            <th>Logout Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.teacherName}</td>
              <td>{row.loginTime}</td>
              <td>{row.logoutTime}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

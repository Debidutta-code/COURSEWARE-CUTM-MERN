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
            <th>Last Login Time</th>
            {/* <th>Logout Time</th> */}
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.teacher_name}</td>
              <td>{row.teacher_login_time}</td>
              {/* <td>{row.teacher_logout_time}</td> */}
              <td>{row.teacher_login_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

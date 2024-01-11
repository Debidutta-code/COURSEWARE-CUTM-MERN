// AdminDashboard.js

import React from 'react';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const departments = [
    { id: 1, name: 'Finance', employees: 10 },
    { id: 2, name: 'Human Resources', employees: 8 },
    { id: 3, name: 'IT', employees: 15 },
    // Add more departments as needed
  ];

  const tasks = [
    { id: 1, title: 'Budget Planning', status: 'In Progress' },
    { id: 2, title: 'Hiring Process', status: 'Pending' },
    { id: 3, title: 'System Upgrade', status: 'Completed' },
    // Add more tasks as needed
  ];

  const announcements = [
    { id: 1, content: 'Welcome to the Admin Dashboard!' },
    { id: 2, content: 'Important meeting on 20th March' },
    // Add more announcements as needed
  ];

  return (
    <div className="admin-dashboard">
      <div className="content">
        <section className="departments-section">
          <h2>Departments</h2>
          <ul>
            {departments.map((department) => (
              <li key={department.id}>
                {department.name} - {department.employees} employees
              </li>
            ))}
          </ul>
        </section>

        <section className="tasks-section">
          <h2>Tasks</h2>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.title} - {task.status}
              </li>
            ))}
          </ul>
        </section>

        <section className="announcements-section">
          <h2>Announcements</h2>
          <ul>
            {announcements.map((announcement) => (
              <li key={announcement.id}>{announcement.content}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;

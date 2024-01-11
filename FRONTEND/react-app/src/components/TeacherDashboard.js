// TeacherDashboard.js

import React from 'react';
import '../styles/TeacherDashboard.css';

const TeacherDashboard = () => {
  const classes = [
    { id: 1, name: 'Mathematics', students: 25 },
    { id: 2, name: 'Science', students: 20 },
    { id: 3, name: 'English', students: 18 },
    // Add more classes as needed
  ];

  const tasks = [
    { id: 1, title: 'Grade Math Assignments', status: 'Pending' },
    { id: 2, title: 'Prepare Science Lecture', status: 'In Progress' },
    { id: 3, title: 'Review English Essays', status: 'Completed' },
    // Add more tasks as needed
  ];

  const announcements = [
    { id: 1, content: 'Welcome to the new semester!' },
    { id: 2, content: 'Science fair registration deadline: 15th March' },
    // Add more announcements as needed
  ];

  return (
      <div className="teacher-dashboard">
        <div className="content">
          <section className="classes-section">
            <h2>Classes</h2>
            <ul>
              {classes.map((cls) => (
                <li key={cls.id}>
                  {cls.name} - {cls.students} students
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

export default TeacherDashboard;

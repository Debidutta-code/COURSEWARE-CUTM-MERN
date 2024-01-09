// Register.js
import React from 'react';
import '../styles/Register.css';

const Register = () => {

  

  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Register</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" placeholder="Enter your username" />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="Enter your email" />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" placeholder="Enter your password" />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" name="confirm-password" placeholder="Confirm your password" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

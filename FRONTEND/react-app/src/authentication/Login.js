// Login.js
import React, { useContext, useState } from 'react';
import '../styles/Login.css';
import { UserContext } from '../App';
import { useHistory } from 'react-router-dom';

const Login = () => {

  const {state, dispatch} = useContext(UserContext);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    if(e.target.name === "username"){
      setUserName(e.target.value);
    }
    if(e.target.name === "password"){
      setPassword(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch(`http://localhost:8080/teacher/authentication/${username}/${password}`, {
      method: "GET",
    });

    const data = await response.json();
    if (data.success) {
      // push to the dashboard
      dispatch({ type: "TEACHER", payload: "teacher" });
      history.push("/teacherdashboard");
      console.log(data.teacher);
    } else {
      console.log(data.message);
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login as a Teacher</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" required name="username" placeholder="Enter your username" onChange={handleChange}/>

        <label htmlFor="password">Password:</label>
        <input type="password" required name="password" placeholder="Enter your password" onChange={handleChange}/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

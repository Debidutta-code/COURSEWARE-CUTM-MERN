import React, { useContext, useState } from 'react';
import '../styles/Login.css';
import { UserContext } from '../App';
import { useHistory } from 'react-router-dom';
import Dialogue from '../components/Dialogue'

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showDialogue, setShowDialogue] = useState(false);
  const [dialogueMessage, setDialogueMessage] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUserName(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
      console.log(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:8080/teacher/authentication/${username}/${password}`, {
      method: "GET",
    });

    const data = await response.json();
    if (data.success) {

      console.log(data);
      // Log the login date and time
      const loginDateTime = new Date();
      const loginDate = `${loginDateTime.getDate().toString().padStart(2, '0')}-${(loginDateTime.getMonth() + 1).toString().padStart(2, '0')}-${loginDateTime.getFullYear()}`;
      console.log("Login Date:", loginDate);
      console.log("Login Time:", loginDateTime.toLocaleTimeString());


      // Send data to the server
      // Send data to the server
      await fetch("http://localhost:8080/teacherlogindetails", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.teacher.teacher_name,
          login_time: loginDateTime.toLocaleTimeString(),
          logout_time: "",
          login_date: loginDate,
          // You may add more data as needed
        }),
      });


      dispatch({ type: "TEACHER", payload: "teacher" });

      history.push('/teacherdashboard', { teacherData: data.teacher });
    } else {
      setDialogueMessage(data.message);
      setShowDialogue(true);
    }
  };


  const closeDialogue = () => {
    setShowDialogue(false);
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login as a Teacher</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" required name="username" placeholder="Enter your username" onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" required name="password" placeholder="Enter your password" onChange={handleChange} />

        <button type="submit">Login</button>

        {showDialogue && (
          <Dialogue message={dialogueMessage} onClose={closeDialogue} />
        )}
      </form>
    </div>
  );
};

export default Login;
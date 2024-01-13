// LoginAdministrator.js
import React, { useContext, useState } from 'react';
import '../styles/Login.css';
import { UserContext } from '../App';
import { useHistory } from 'react-router-dom';
import Dialogue from '../components/Dialogue'; // Import the Dialogue component

const LoginAdministrator = () => {
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
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:8080/administrator/authentication/${username}/${password}`, {
      method: "GET",
    });

    const data = await response.json();
    if (data.success) {
      dispatch({ type: "ADMIN", payload: "admin" });
      history.push("/admindashboard", { adminData: data.admin });
    } else {
      setDialogueMessage(data.message);
      setShowDialogue(true);
    }
  }

  const closeDialogue = () => {
    setShowDialogue(false);
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login as an Administrator</h2>
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

export default LoginAdministrator;

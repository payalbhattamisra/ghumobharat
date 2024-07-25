import React, { useState } from 'react';
import axios from "axios"
import './Login.css'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
const navigate= useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

let username='';
const hadndlesubmitL = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      "http://localhost:5000/login",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    username = response.data.name;
    console.log(username);

    const messageElement = document.createElement("div");
    messageElement.id = "loginMessage";
    messageElement.textContent = `WELCOME ${username} TO GHUMOBHARAT`;
    document.body.appendChild(messageElement);

    // document.body.classList.add("blurBackground"); // Apply blur effect to the body
    setTimeout(() => {
     
      document.body.removeChild(messageElement); 
      navigate('/usertourist', { state: { username } });    }, 2000);


  } catch (error) {
  
    const messageElement = document.createElement("div");
    messageElement.id = "loginMessage";
    messageElement.textContent = "Wrong Details";
    document.body.appendChild(messageElement);
  
      setTimeout(() => {
        // document.body.classList.remove("blurBackground"); // Remove blur effect
        document.body.removeChild(messageElement); // Remove the message element
        navigate("/login");
      }, 3000); // Wait for 3 seconds (3000 milliseconds) before navigating

  }
};


  return (
    <section className='loginSection'>
      <h2>Tourist  Login</h2>
      <form onSubmit={hadndlesubmitL} className='loginForm'>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit" onClick={hadndlesubmitL}>Login</button>
      </form>
    </section>
  );
};

export default Login;

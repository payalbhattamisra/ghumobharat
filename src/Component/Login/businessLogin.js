import React, { useState } from 'react';
import axios from "axios"
import './Login.css'
import { useNavigate } from "react-router-dom";
const BusinessLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  // const hadndlesubmitB = async (e) => {
  //   e.preventDefault();
  //   try {
  // const response = await axios.post(
  //   "http://localhost:5000/businesslogin",
  //   formData,
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  //     console.log(response.data.yourName);

  //     navigate("/business")

  //   } catch (error) {
  //     console.error("wrong details:", error);
  //   }
  // };
  let username = '';
  const hadndlesubmitB = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/businesslogin",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      username = response.data.yourName;
      console.log(username);

      const messageElement = document.createElement("div");
      messageElement.id = "loginMessage";
      messageElement.textContent = `WELCOME ${username} TO GHUMOBHARAT`;
      document.body.appendChild(messageElement);

      setTimeout(() => {

        document.body.removeChild(messageElement);
        navigate('/userbusiness', { state: { username } });
      }, 2000);


    } catch (error) {

      const messageElement = document.createElement("div");
      messageElement.id = "loginMessage";
      messageElement.textContent = "Wrong Details";
      document.body.appendChild(messageElement);

      setTimeout(() => {

        document.body.removeChild(messageElement);
        navigate("/businesslogin");
      }, 3000);
    }
  };

  return (
    <section className='loginSection'>
      <h2>Business Login</h2>
      <form className='loginForm'>
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
        <button type="submit" onClick={hadndlesubmitB}>Login</button>
      </form>
    </section>
  );
};

export default BusinessLogin;

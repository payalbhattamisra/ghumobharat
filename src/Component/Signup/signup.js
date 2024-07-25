import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      const messageElement = document.createElement("div");
      messageElement.id = "signupMessage";
      messageElement.textContent = `signup successful`;
      document.body.appendChild(messageElement);

      // document.body.classList.add("blurBackground"); // Apply blur effect to the body

      setTimeout(() => {
        // document.body.classList.remove("blurBackground"); // Remove blur effect
        document.body.removeChild(messageElement); // Remove the message element
        navigate("/tourist");
      }, 3000); // Wait for 3 seconds (3000 milliseconds) before navigating
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section className="signupSection">
        <h2 id="signupText">Tourist Sign Up</h2>

        <form onSubmit={handleSubmit} className="signUpform">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phoneNo"
            placeholder="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Set Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit" className="btnSinup">
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
};

export default SignupForm;

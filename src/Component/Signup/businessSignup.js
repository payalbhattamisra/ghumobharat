import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import {useNavigate } from "react-router-dom";
const BusinessSignup = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    businessName: "",
    email: "",
    phoneNo: "",
    address: "",
    businessType: "",
    password: "",
    confirmPassword: "",
    businessDescription: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/busisnessSignup",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  const Navigate =useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/busisnessSignup",
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
        Navigate("/userbusiness");
      }, 3000); // Wait for 3 seconds (3000 milliseconds) before navigating
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
   <section className="signupSection">
        <h2 id="signupText">Business Sign Up</h2>

        <form onSubmit={handleSubmit} className="signUpform">
        
          <input
            type="text"
            name="yourName"
            placeholder="Your Name"
            value={formData.yourName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            value={formData.businessName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phoneNo"
            placeholder="Phone Number"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="businessType"
            placeholder="Business Type"
            value={formData.businessType}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <textarea
            name="businessDescription"
            placeholder="Business Description"
            value={formData.businessDescription}
            onChange={handleChange}
          ></textarea>
          <textarea
            name="additionalInfo"
            placeholder="Additional Information"
            value={formData.additionalInfo}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit} className="btnSinup">
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
};

export default BusinessSignup;

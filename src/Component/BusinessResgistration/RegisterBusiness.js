import React, { useState } from 'react';
import './RegisterBusiness.css'
import axios from "axios";
const BusinessRegister = () => {
  const [formDataB, setFormDataB] = useState({
    businessName: '',
    email: '',
    phoneNo: '',
    address: '',
    businessType: '',
    taxID: '',
    password: '',
    confirmPassword: '',
    businessDescription: '',
    additionalInfo: '',
  });

  // const handleChange = (e) => {
  //   const { name, value, type, checked, files } = e.target;
  //   const inputValue = type === 'checkbox' ? checked : files ? files[0] : value;
  //   setFormDataB({ ...formDataB, [name]: inputValue });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataB({ ...formDataB, [name]: value });
  };
  
  const handleSubmitBC = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/businessconnect",
        formDataB,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
        
      );
  
      console.log(response.data);
    } catch (error) {
      console.error("Error :", error);
    }
  };
  
  return (
    <>
      <section className="registerSection">
        <h2 id='registerText'>Connect Your Business</h2>
   
        <form onSubmit={handleSubmitBC} className='registerform'>
          <input type="text" name="businessName" placeholder='Business Name' value={formDataB.businessName} onChange={handleChange} />
          <input type="text" name="email" placeholder='Email' value={formDataB.email} onChange={handleChange} />
          <input type="text" name="phoneNo" placeholder='Phone Number' value={formDataB.phoneNo} onChange={handleChange} />
          <input type="text" name="address" placeholder='Address' value={formDataB.address} onChange={handleChange} />
          <input type="text" name="businessType" placeholder='Business Type' value={formDataB.businessType} onChange={handleChange} />
          <input type="text" name="taxID" placeholder='Tax ID' value={formDataB.taxID} onChange={handleChange} />
     
          {/* <label>
            <input type="checkbox" id='termscond' name="termsAgreement" checked={formDataB.termsAgreement} onChange={handleChange} />
            I agree to the terms of service
          </label> */}
          
          {/* <label htmlFor='verficationDocuments'>upload your documents</label> */}
          {/* <input type="file" name="verificationDocuments" onChange={handleChange} /> */}
          <textarea name="businessDescription" placeholder="Business Description" value={formDataB.businessDescription} onChange={handleChange}></textarea>
          
          <input type="text" name="additionalInfo" placeholder='Additional Information' value={formDataB.additionalInfo} onChange={handleChange} />
        
         
          <button type="submit" className='btnSinup' onClick={handleSubmitBC}>Send For verification</button>
        </form> 
      </section>
    </>
  );
};

export default BusinessRegister;

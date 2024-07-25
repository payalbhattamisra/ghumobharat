import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <>
   <footer>
    <div className="footer-col">
        <h3>Categories</h3>
        <li>History</li>
        <li>Geography</li>
        <li>Tourism</li>
        <li>Institutes</li>
    </div>
    <div className="footer-col">
        <h3>Legal Policy</h3>
        <li>Contact us</li>
        <li>Privacy policy</li>
        <li>Terms & Conditions</li>
        <li>Share Experience</li>
    </div>
    <div className="footer-col">
        <h3>Tourism</h3>
        <li>Pilgrimage</li>
        <li>Hill Stations</li>
        <li>Beaches</li>
        <li>Adventure</li>
    </div>
    <div className="footer-col">
        <h3>Links</h3>
        <li>Testimonials</li>
        <li>Blogs</li>
        <li>Book Hotel</li>
        <li>Kumbh Mela</li>
    </div>
    <div className="footer-col">
        <h3>Newsletter</h3>
        <p>Subscribe our Newsletter to get personalized itineries <br/>direct to your inbox</p>
        <div className="subscribe">
            <input type="text" placeholder="Your email address"/>
            <a href="/" className="yellow">SUBSCRIBE</a>
        </div>    
    </div>
    <div className="copyright">
        <p>Copyright &copy 2023 by Destination Desginer All Rights Reserved </p>
        <div className="pro-links"> 
            <a href="#instagram"><i className='bx bxl-instagram-alt'></i></a>
            <a href="#twitter"><i className='bx bxl-twitter' ></i></a>
            <a href="#linkedin"><i className='bx bxl-linkedin-square' ></i></a>
        </div>
    </div>

</footer>
    </>
  )
}

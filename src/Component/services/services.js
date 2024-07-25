import React from 'react'
import "./services.css";
export default function Services() {
  return (
    <>
      <div className="service">
        <span className='serviceHead'>We Offer Best Services</span>
      </div>
      <div className="serviceContent">
        <div className="guidedTours serviceContBox">
            <img src="/photoGallery/tourGuide.svg" alt="service" className='serviceIcons'/>
            <a href='/'>Guided Tour</a>
        </div>
        <div className="bestTravel serviceContBox">
        <img src="/photoGallery/travelling.svg" alt="service" className='serviceIcons'/>
        <a href='/'>Best Travel options</a>
        </div>
        <div className="religiourTour serviceContBox">
        <img src="/photoGallery/religious.svg" alt="service" className='serviceIcons'/>
        <a href='/'>Religious Tour</a>
        </div>
        <div className="Insurance serviceContBox">
        <img src="/photoGallery/medical.svg" alt="service" className='serviceIcons'/>
        <a href='/'>Medical Insurance</a>
        </div>
      </div>
    </>
  )
}

import React, { useState, useEffect, useRef } from "react";

import "./Gulmarg.css";
import { Link } from "react-router-dom";
import TouristNavbar from "../../../Navbar/touristNavbar";
import GulmargPlaces from "./gulmargPlaces";
import PeopleReview from "./PeopleReview/PeopleReview";


export default function Gulmarg() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);


  const images = [
    "/photoGallery/tourismImg/gulmarg2.jpg",
    "/photoGallery/tourismImg/gulmarg3.jpg",
    "/photoGallery/tourismImg/gulmarg4.jpg",
    "/photoGallery/tourismImg/gulmarg5.jpg",
    "/photoGallery/tourismImg/gulmarg6.jpg",
    // Add more image paths here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);


  // const nextImage = () => {
  //   setActiveImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  // };

  // const prevImage = () => {
  //   setActiveImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  // };
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const isElementInViewport = () => {
      const rect = video.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleVideoAutoplay = () => {
      if (isElementInViewport()) {
        video.play();
      } else {
        video.pause();
      }
    };

    const scrollHandler = () => {
      handleVideoAutoplay();
    };

    window.addEventListener("scroll", scrollHandler);

  
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
    <div className="navbarG"> <TouristNavbar/></div>
    <section className="gulmargInfo">
      <section className="gulImages">
        <div className="gulImgs">
          <img
            src={images[activeImageIndex]}
            alt={`img${activeImageIndex + 1}`}
            className="gulImage"
          />
        </div>
        {/* 
        <div className="navigationButtons">
          <button onClick={prevImage} className="cntrlBtn">
            Previous
          </button>
          <button onClick={nextImage} className="cntrlBtn">
            Next
          </button>
        </div> */}
      </section>
      <div className="branding">
        <h1 className="gulmargAboutHead">
          <strong>GULMARG:</strong> The Crowning Glory of Jammu & Kashmir
        </h1>

        <div className="data">
          <p className="numVisit">
            <span id="touristNumber">
              <strong>14</strong> Lakhs+
            </span>
            <span>Visitor in last 10 months</span>
          </p>
          <p className="numVisit">
            <span id="ratings">4.7</span>
            <span>Star: Rating</span>
          </p>
          <p className="numVisit">
            <span className="locData">Latitude: 34.0496° N</span>
            <span className="locData">Longitude: 74.3783° E</span>
          </p>
          <div
            class="elfsight-app-61c8d34d-5024-4032-96dc-d4c62fe4b095"
            data-elfsight-app-lazy
          ></div>
        </div>
        <span>
          {/* <Link to="/cutomizetour" id="custom">
            Customize Your Tour
          </Link> */}
        </span>
      </div>
      <div className="gulmargAbout">

          <div className="part1">
            <span>
              Nestled in the breathtaking Pir Panjal range in Jammu and Kashmir,
              Gulmarg is a thrilling paradise for adventure lovers. Known as the
              "Meadow of Flowers," Gulmarg transforms into an adrenaline-packed
              wonderland in winter, tempting thrill-seekers with top-notch
              skiing and snowboarding on Mount Apharwat.Picture this: the iconic
              Gulmarg Gondola lifts you to stunning heights, revealing a
              mesmerizing panorama of snow-covered peaks and lush valleys. As
              winter turns everything into a snowy playground, the high-altitude
              golf course and forest trekking trails add a dash of excitement.
              
            </span>
            <video
              src="/photoGallery/Gulmarg/GulmargVid1.mp4"
              className="gulmargVid"
              ref={videoRef}
              muted
              autoPlay
              loop
            ></video>
          </div>
    
      </div>
      <div className="insightGulmarg">
        <img src="/photoGallery/girlRightSign.svg" alt="" id="rightIndGirl" />
        <img
          src="/photoGallery/Gulmarg/GulmargInsights.png"
          alt=""
          className="insightPics"
        />
      </div>
 
    </section>
    <section className="touristDestination">
      <GulmargPlaces/>
    </section>

    <Link to='/shopranking'className="shopr">shop ranking</Link>

    <section className="rev">
      <span id="revHead">Visitors Reviews</span> 
    <div className="publicReview">
    <PeopleReview name="Aman" reviewU="Gulmarg is a breathtaking haven! The majestic mountains, pristine valleys, and the Gulmarg Gondola offering unparalleled views made my trip unforgettable. The warmth of locals and the diverse activities, from skiing to serene lake visits, added layers to this heavenly experience. It's an idyllic escape, a true gem amidst nature's grandeur." srcI="/photoGallery/grandfather.png"/>
    <PeopleReview name="tricksy" reviewU="Gulmarg is a stunning destination, no doubt. The natural beauty is awe-inspiring, especially the Alpather Lake. However, the tourist influx sometimes leads to overcrowding, making serene moments a bit challenging to find. The adventure activities like skiing and trekking are incredible, but the lack of proper infrastructure and maintenance can be a downside." srcI="/photoGallery/grandmother.png"/>  
    </div>
    <form className="revform">
    <input type="text" placeholder="ask questions" id="qs"/>
      <button>submit</button>
    </form>
    
      </section>
    </>
  );
}

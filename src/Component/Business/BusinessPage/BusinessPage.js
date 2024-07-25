// import React from 'react';
// import Typed from 'typed.js';
// import './BusinessPage.css'
// import Footer from '../../Footer/footer';import BusinessNavbar from '../../Navbar/businessNavbar';

// export const BusinessPage = () => {

//     const el = React.useRef(null);

//     React.useEffect(() => {
//         const typed = new Typed(el.current, {
//             strings: ['Marketing Solutions', 'Pricing Strategies'],
//             typeSpeed: 100,
//             backSpeed: 100,
//             backDelay: 1000,
//             loop: true
//         });

//         return () => {
//             typed.destroy();
//         };
//     }, []);

//     return (
//         <>

//             <BusinessNavbar />
//             <div className="container">

//                 <section className="front">
//                     <img src="/photoGallery/businessFront.png" alt="img" className='businessImg' />

//                     <div className="FrontText">Smart Strategies, Great Results</div>
//                 </section>

//                 <section className="TypedText">
//                     <h1>We help Businesses to grow faster through our</h1>
//                     <div className='typedWords'><span ref={el} /></div>
//                 </section>

//             </div>

//             <Footer />
//         </>
//     )
// }

import React from "react";
import "./BusinessPage.css";
// import BusinessNavbar from "../../Navbar/businessNavbar";
import PriorityCard from "./PriorityCard/priorityCard";
// import Working from "./Working/Working";
//  import Footer from "../../Footer/footer";
import { Link } from "react-router-dom";
export function BusinessPage() {
  return (
    <>
      <div className="businessLandingPage">
        {/* <div className="navbarB">
          <BusinessNavbar />
        </div> */}
        <div className="firstpageB">
          <span id="quoteB">
            SMART <span className="backmountB">STRATEGIES</span> GREAT{" "}
            <span className="backmountB">RESULT</span> <br />{" "}
            <span className="backmountB">ELEVATE</span> YOUR{" "}
            <span className="backmountB">BUSINESS</span> WITH US
          </span>

          <div className="imgfl">
            <img
              src="/photoGallery/Business/flower1.svg"
              alt=""
              className="flower1B"
            />
            <img
              src="/photoGallery/Business/flower1.svg"
              alt=""
              className="flower1B"
            />
            <img
              src="/photoGallery/Business/flower1.svg"
              alt=""
              className="flower1B"
            />
          </div>
        </div>
          <Link to='/registerbusiness' className="linkReg">Register Your Business</Link>
        <div className="secondPageB">
          {/* <div className="layer"></div> */}
          <img src="/photoGallery/Business/business1.svg" alt="img" />
        </div>

        <div className="priorityB">
          <span className="priorityBhead">
            We always prioritize <br />
            <span className="">customer satisfaction</span>
          </span>
          <div className="priorityCon">
            <PriorityCard
              num="01"
              head="Set Target Customers"
              des="Identify and cater to your ideal customer base effortlessly. With our platform, connect directly with travelers seeking personalized experiences, enabling your business to tailor offerings to their preferences and travel dates. Gain insights into customer behavior, preferences, and travel patterns to refine your services and attract a steady stream of interested clientele."
            />
            <PriorityCard
              num="02"
              head="expand your business to the online realm"
              des="Leverage our platform as a gateway to the online world. Showcase your services - be it transportation, accommodation, dining, or local experiences - to a global audience. Our user-friendly interface facilitates seamless booking, allowing travelers to access and engage with your business around the clock. Utilize our marketing solutions and 3D business views to enhance visibility, drawing in more customers and establishing a robust online presence."
            />
            <PriorityCard
              num="03"
              head="Enjoy the results of selling online"
              des="Experience the tangible outcomes of embracing online sales. Witness increased bookings and revenue as our platform drives traffic and potential customers to your business. Leverage our pricing strategies and market insights to stay competitive, even during off-peak seasons. Additionally, our resource support for hiring skilled personnel ensures your business is equipped to meet the demands of an expanding customer base, enhancing efficiency and service quality."
            />
        </div>
        </div>
        <br />
        <br />
        <br />
       
        <br />
        <br />
        
      </div>
    </>
  );
}

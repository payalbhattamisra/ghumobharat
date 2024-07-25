// import React from 'react'
// import './touristFirstPage.css'
// export default function TouristFirstPage() {
//   return (
//     <>
//     <div className="navbarT">

//     </div>
//      <div className="touristFirstPage">

//      </div>
//     </>
//   )
// }

import React from "react";
import "./Banner.css";
// import TouristNavbar from "../Navbar/touristNavbar";
import TopTrendHolidayDest from "./TrendingPlaces/topTrendHolidayDest"
import TopTrendSeasonalPlaces from "./TrendingPlaces/trendingSeasonalPlaces"
import BudgetTrendingPlaces from "./TrendingPlaces/budgetTrendingPlaces"
import Themebox from "../ThemeBox/themebox"
import Services from "../services/services"
// import StateTour from "../StateTourPlace/StateTour"
// import Pilgrimage from "./TrendingPlaces/pilgrimage";
// import Wildlife from "./TrendingPlaces/wildlife";
// import Beach from "./TrendingPlaces/beach";
// import Adventure from "./TrendingPlaces/adventure";
import Footer from "../Footer/footer"
// import Adventure from "./TrendingPlaces/adventure";
const Banner = () => {
  return (
    <>
    <div className="touristPage">


      {/* <div className="navbarT">
        <TouristNavbar />
      </div> */}
      <div className="bannerT">
        <div className="overlayT">
          <img src="photoGallery/Tourist/sky1.svg" alt="" className="skyT" />
          <img
            src="/photoGallery/Tourist/eclipse.svg"
            alt=""
            className="eclipseT"
          />
          <img
            src="/photoGallery/Tourist/birds1.svg"
            alt=""
            className="birdT"
          />
          <img src="/photoGallery/cloud.svg" alt="" className="cloudT" />
        </div>
        <div className="exploreT">
          <span id="sp1">
            EXPLORE INDIA <br /> Create Stories:
          </span>
          <br />
          <span id="sp2"> Your Travel, Your Tale.</span>
        </div>
      </div>
            <div className="eveningTime">
            <TopTrendHolidayDest/>
              <TopTrendSeasonalPlaces />
              <BudgetTrendingPlaces />
              <Themebox />
              {/* <Adventure/> */}
              <Services />
              {/* <StateTour /> */}
            </div>

              <div className="footerT">
              <img src="/photoGallery/Tourist/sunsetHouse.svg" alt="" className="footerImg1T" />
              <div className="footercontT">

              <Footer />
              </div>
              <img src="/photoGallery/Tourist/sunsetGrass.svg" alt="" className="footerImg2T" />
              </div>

              </div>
    </>
  );
};
export default Banner;

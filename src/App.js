import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPagesLogin from "./Pages/AuthPagesLogin";
import AuthPagesSignUp from "./Pages/AuthPagesSignUp";
// import BudgetTrendingPlaces from "./Component/Tourist/TrendingPlaces/budgetTrendingPlaces";
import Gulmarg from "./Component/Tourist/placeDetailPage/Gulmarg/Gulmarg";
import FirstPage from "./Component/LandingPage/firstPage";
// import Footer from "./Component/Footer/footer";
import LandingPageNavbar from "./Component/Navbar/landingPageNavbar";
// import Services from "./Component/services/services";
// import Themebox from "./Component/ThemeBox/themebox";
// import TouristNavbar from "./Component/Navbar/touristNavbar";
// import StateTour from "./Component/StateTourPlace/StateTour";
// import TopTrendHolidayDest from "./Component/Tourist/TrendingPlaces/topTrendHolidayDest";
// import TopTrendSeasonalPlaces from "./Component/Tourist/TrendingPlaces/trendingSeasonalPlaces";
//import TouristNavbar from "./Component/Navbar/touristNavbar";
import Banner from "./Component/Tourist/Banner";
import { BusinessPage } from "./Component/Business/BusinessPage/BusinessPage";
import AuthBusinessLogin from "./Pages/AuthBusinessLogin";
import AuthBusinessSignup from "./Pages/AuthBusinessSignup";
import RegisterBusiness from "./Pages/RegisterBusinessPage";
import ShopReviewForm from "./Component/feedbacktheshop/feedbackshop";
import Shoplist from "./Component/shoplist/shoplist";
import InformTouristPlace from "./Pages/InformTouristPlace";
import NearbyTouristPlaces from "./Component/NearbyPlaces/NearbyPlace";
import UserAfterLogin from "./Pages/UserAfterLogin";
import UserBusinessNavbar from "./Component/Navbar/userbusinessnavbar";
import BusinessNavbar from "./Component/Navbar/businessNavbar";
import Working from "./Component/Business/BusinessPage/Working/Working";
import UserNavbar from "./Component/Navbar/usernavbar";
import ShopList from "./Component/Tourist/placeDetailPage/Gulmarg/ShopRanking/ShopRanking1";
import Dashboard from "./Component/Business/BusinessPage/Dashboard";
import TouristNavbar from "./Component/Navbar/touristNavbar";


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPageNavbar />
              <FirstPage />

            </>
          }
        />
        <Route
          path="/choose"
          element={
            <>
              <LandingPageNavbar />
              <Shoplist />
            </>
          }
        />
        <Route
          path="/review"
          element={
            <>
              <LandingPageNavbar />
              <ShopReviewForm />
            </>
          }
        />
        <Route
          path="/business"
          element={
            <> <UserBusinessNavbar />
              <BusinessPage />
            </>
          }
        />
        <Route
          path="/working"
          element={
            <> <BusinessNavbar />
              <Working />
            </>
          }
        />
        <Route
          path="/nearbyplaces"
          element={
            <> <UserNavbar />
              <NearbyTouristPlaces />
            </>
          }
        />
        <Route
          path="/userbusiness"
          element={
            <>
              <UserBusinessNavbar />
              <BusinessPage />
            </>
          }
        />
        <Route
          path="/tourist"
          element={
            <>
             <TouristNavbar /> 
              <Banner />
            </>
          }
        />
        <Route
          path="/usertourist"
          element={
            <>
              <UserAfterLogin />
              <Banner />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <LandingPageNavbar link="/tourist" names="Tourist" />
              <AuthPagesLogin />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <LandingPageNavbar link="/tourist" names="Tourist" />
              <AuthPagesSignUp />
            </>
          }
        />
        <Route
          path="/businesslogin"
          element={
            <>
              <LandingPageNavbar />
              <AuthBusinessLogin />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <LandingPageNavbar />
              <Dashboard />

            </>
          }
        />
        <Route
          path="/businesssignup"
          element={
            <>
              <LandingPageNavbar />
              <AuthBusinessSignup />
            </>
          }
        />
        <Route
          path="/registerbusiness"
          element={
            <>
              <LandingPageNavbar />
              <RegisterBusiness />
            </>
          }
        />
        <Route
          path="/tourist/gulmarg"
          element={
            <>
              <Gulmarg />
            </>
          }
        />
        <Route
          path="/informtouristplace"
          element={
            <>
              <InformTouristPlace />
            </>
          }
        />

       
        <Route
          path="/shopranking"
          element={
            <>
              <UserNavbar />
              <ShopList />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;

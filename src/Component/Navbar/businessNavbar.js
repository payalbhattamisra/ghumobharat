import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./businessNavbar.css";

export default function BusinessNavbar() {
  const navigate = useNavigate();

  const handleOnLoginClick = () => {
    navigate("/businesslogin");
  };

  const handleOnSignUpClick = () => {
    navigate("/businesssignup");
  };

  const [burger_class, setBurgerClass] = useState("burger-barB unclicked");
  const [menu_class, setMenuClass] = useState("menuB hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuClicked(false);
        setBurgerClass("burger-barB unclicked");
        setMenuClass("menuB hidden");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-barB clicked");
      setMenuClass("menuB visible");
    } else {
      setBurgerClass("burger-barB unclicked");
      setMenuClass("menuB hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className="navbarB">
        <div className="burger-menuB" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div> 
        </div>
        <div className={menu_class} ref={menuRef}>
          
          {/* <Link to="/registerbusiness" className="linksB">
            Register Your Business
          </Link> */}
{/*      
          <Link to="/business" className="linksB">
            Advertisement and Sponsorship
          </Link> */}
          {/* <Link to="/business" className="linksB">
            Financial Aid
          </Link> */}
          {/* <Link to="/business" className="linksB">
            Hiring and job Application
          </Link> */}
          <Link to="/business" className="linksB">
            Marketing insights
          </Link>
          <Link to="/informtouristplace" className="linksB">
            Inform nearby tourist Places
          </Link>
          <Link to="/business" className="linksB">
            Report Issue
          </Link>
          <Link to="/business" className="linksB">
            Customer Support
          </Link>
          <Link to="/business" className="linksB">
            Settings
          </Link>
        </div>
        <div className="logoB">
        <img src="/photoGallery/appLogo.svg" alt="" />
        </div>

        <input
          type="text"
          id="searchBarB"
          placeholder="visit your destination"
        />

        <div className="navContB">
          <div className="visitLinkB">
          <Link to="/working" className="linksB">
            Why Choose Us?
          </Link>
            <Link to="/" className="linksB">
              Home
            </Link>
            <Link to="/" className="linksB">
              About
            </Link>
            <Link to="/" className="linksB">
              Contact us
            </Link>
          </div>
          <div className="connectUsB">
            <button onClick={handleOnLoginClick} className="getStartedB">
              Login
            </button>
            <button onClick={handleOnSignUpClick} className="getStartedB">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

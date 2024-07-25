import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./businessNavbar.css";

export default function UserBusinessNavbar() {
  const navigate = useNavigate();

  const handleOnLogoutClick= ()=>{
    navigate("/business")
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
          
          <Link to="/registerbusiness" className="linksB">
            Register Your Business
          </Link>
     
          <Link to="/tourist" className="linksB">
            Advertisement and Sponsorship
          </Link>
          <Link to="/tourist" className="linksB">
            Financial Aid
          </Link>
          <Link to="/tourist" className="linksB">
            Hiring and job Application
          </Link>
          <Link to="/tourist" className="linksB">
            Marketing insights
          </Link>
          <Link to="/informtouristplace" className="linksB">
            Inform nearby Tourist Places
          </Link>
          <Link to="/tourist" className="linksB">
            Report Issue
          </Link>
          <Link to="/tourist" className="linksB">
            Customer Support
          </Link>
          <Link to="/tourist" className="linksB">
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
          <Link to="/dashboard" className="linksB">
            Dashboard
          </Link>
            <Link to="/" className="linksB">
              Home
            </Link>
            <Link to="/about" className="linksB">
              About
            </Link>
            <Link to="/" className="linksB">
              Contact us
            </Link>
          </div>
          <div className="connectUsB">
            <button onClick={handleOnLogoutClick} className="getStartedB">
              Logout
            </button>
         
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./touristNavbar.css";
import { useNavigate } from "react-router-dom";
export default function UserNavbar(props) {

const navigate=useNavigate();
const handleOnLogoutClick= ()=>{
  navigate("/tourist")
};
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuClicked(false);
        setBurgerClass("burger-bar unclicked");
        setMenuClass("menu hidden");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className="navbar">
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <div className={menu_class} ref={menuRef}>
       
          <Link to="/usertourist" className="links">
            Customize Your Tour
          </Link>
            <Link to="/nearbyplaces" className="links">
            Nearby Tourist Places
          </Link>
          <Link to="/recenttour" className="links">
            Recent Tour
          </Link>
          <Link to="/informtouristplace" className="links">
            Inform Tourist Places
          </Link>
          <Link to="/exploreplaces" className="links">
           Explore Tour Places
          </Link>
          <Link to="/usertourist" className="links">
            Community
          </Link>
          <Link to="/usertourist" className="links">
            Tour Packages
          </Link>
          <Link to="/choose" className="links">
            feedback
          </Link>
          <Link to="/usertourist" className="links">
            Customer Support
          </Link>
          <Link to="/usertourist" className="links">
            Settings
          </Link>
        </div>
        <div className="logo">
          <img src="/photoGallery/appLogo.svg" alt="" />
        </div>

        <input
          type="text"
          id="searchBar"
          placeholder="Visit your destination"
        />

        <div className="navCont">
          <div className="visitLink">
            <Link to="/" className="links">
              Home
            </Link>
            <Link to="/" className="links">
              About
            </Link>
            <Link to="/" className="links">
              Contact Us
            </Link>
          </div>
          <div className="connectUs">
            <span>{props.usersname}</span>
            <button onClick={handleOnLogoutClick} className="getStarted">
              logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

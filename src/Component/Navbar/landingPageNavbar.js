import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./landingPageNavbar.css";
// import {link,NavLink} from 'react-router-dom'

export default function LandingPageNavbar(props) {
  // .............................
  // const navigate = useNavigate();

  //  const handleOnGetStartedClick = () => {
  //     navigate("/LoginSignup");
  //   };

  // ....................

  return (
    <>
      <div className="Landing_navbar">
        <div className="Landing_logo">
        <img src="/photoGallery/appLogo.svg" alt="" />
        </div>

        <input
          type="text"
          id="Landing_searchBar"
          placeholder="visit your destination"
        />

        <div className="Landing_navCont">
          <div className="Landing_visitLink">
            <Link to="/" className="Landing_links">
              Home
            </Link>
            <Link to="/" className="Landing_links">
              About
            </Link>
            <Link to="/" className="Landing_links">
              Contact us
            </Link>
          </div>
          <Link to={props.link} id="touristNavigate">{props.names}</Link>

        </div>
      </div>
    </>
  );
}

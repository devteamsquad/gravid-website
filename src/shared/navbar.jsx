import { Link } from "react-router-dom";
import "./css/navbar.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function NavBar() {
  const [isShow, setShow] = useState(false);
  return (
    <div className="navbar_section">
      <Link to="/" className="menu-item">
        <img
          className="logo"
          src={require("../assets/brand_logo_gravid.png")}
          alt="alt text"
        />
      </Link>
      <div className="menu-items">
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/foundation" className="menu-item">
          Foundation
        </Link>
        <Link to="/help-center" className="menu-item">
          Help Center
        </Link>
        <Link to="/pricing" className="menu-item">
          Pricing
        </Link>
        <div className="menu-item blue-btn">
          <a className="first-link" href="https://app.grav.id">
            <img
              className="space"
              src={require("../assets/space.png")}
              alt="alt text"
            />
          </a>
          <a href="https://app.grav.id">Explore</a>
        </div>
      </div>
      {/* mobile */}
      <div className="mobile_menu-items">
        <FaBars
          className="mobile_navbar-icon"
          onClick={() => setShow((curr) => !curr)}
        />
        {isShow && (
          <div
            className="mobile_menu-items_dropdown"
            onClick={() => setShow((curr) => !curr)}
          >
            <Link to="/" className="mobile_menu-item">
              Home
            </Link>
            <Link to="/foundation" className="mobile_menu-item">
              Foundation
            </Link>
            <Link to="/help-center" className="mobile_menu-item">
              Help Center
            </Link>
            <Link to="/pricing" className="mobile_menu-item">
              Pricing
            </Link>
            <a className="explorer" href="https://app.grav.id">
              Explore
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;

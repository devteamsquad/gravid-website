import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./css/navbar_ld.css";
import "./css/navbar.css";
import "./css/navbar.scss";
import Button from "./Button";
import { FaBars } from "react-icons/fa";

const NavBarLD = () => {
  const [isShow, setShow] = useState(false);
  return (
    <nav className="nav unison-cont-padding">
      <div className="nav-left-cont">
        <Link to="/" className="logo-img-cont">
          <img
            className="logo-img"
            src={require("../assets/brand_logo_gravid.png")}
            alt="Gravid logo"
          />
        </Link>
        <div className="menu-cont">
          <Link to="/foundation" className="menu-list-item">
            Foundation
          </Link>
          <Link to="/help-center" className="menu-list-item">
            Help Center
          </Link>
          <Link to="/pricing" className="menu-list-item">
            Pricing
          </Link>
        </div>

        {/* For mobile View */}
        <div className="mob-menu-items">
          <FaBars
            className="ham-icon"
            onClick={() => setShow((curr) => !curr)}
          />
          {isShow && (
            <div
              className="mob-menu-items-dropdown"
              onClick={() => setShow((curr) => !curr)}
            >
              <Link to="/foundation" className="mob-menu-list">
                Foundation
              </Link>
              <div style={{ height: 8 }} />
              <Link to="/help-center" className="mob-menu-list">
                Help Center
              </Link>
              <div style={{ height: 8 }} />
              <Link to="/pricing" className="mob-menu-list">
                Pricing
              </Link>
              <div style={{ height: 8 }} />
              <a href="https://app.grav.id" className="mob-menu-list">
                Explore
              </a>
              {/* <div style={{ height: 24 }} /> */}
              {/* <Button btnContent={"Login"} type={"outline"} /> */}
              <div style={{ height: 10 }} />
              <Link to={"/#request-demo"}>
                <Button btnContent={"Request Demo"} type={"solid"} />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="nav-right-cont">
        {/* <Button btnContent={"L</Link>ogin"} type={"outline"} /> */}

        <Link to="/#request-demo">
          <Button btnContent={"Request Demo"} type={"solid"} />
        </Link>

        <div className="menu-item blue-btn">
          <a className="first-link" href="https://app.grav.id">
            <img
              className="space"
              src={require("../assets/space.png")}
              alt="Space rocket"
            />
          </a>
          <a className="menu-list-item" href="https://app.grav.id">
            Explore
          </a>
        </div>
        {/* <button className="nav-cta-btn outline-btn">
          <p className="">Login</p>
          <span>&#8594;</span>
        </button>
        <button className="nav-cta-btn solid-btn">
          <p className="">Request Demo</p>
          <span>&#8594;</span>
        </button> */}
      </div>
    </nav>
  );
};

export default NavBarLD;

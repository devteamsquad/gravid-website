import React from "react";
import "./BusinessTestimonial.css";
import { Link } from "react-router-dom";

const BusinessReviewPlaceHolder = ({ item }) => {
  return (
    <>
      <Link
        to={`/business-testimonials-videos/${item.id}`}
        className="vid-placeholder-cont"
      >
        <img
          src={item.videoPlaceholder}
          className="vid-placeholder-cont-img"
          alt=""
        />
        <img
          src={require("../assets/play_icon.png")}
          className="play-icon"
          alt="play icon"
        />
        <div className="flex align-center company-detail-cont">
          <div className="company-logo">
            <img src={item.companyLogo} alt="" className="" />{" "}
          </div>
          <div className="company-txt">
            <h3 className="">{item.companyName}</h3>
            <p className="">
              {item.userName} - {item.userTitle}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BusinessReviewPlaceHolder;

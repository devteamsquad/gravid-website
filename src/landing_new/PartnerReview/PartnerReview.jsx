import React from "react";
import "./PartnerReview.css";
import Button from "../../shared/Button";
import { Link } from "react-router-dom";
import { BusinessReviewVideoConstants } from "../../business_testimonial_page/businessReviews";

const PartnerReview = () => {
  return (
    <section className=" unison-cont-padding flex-col items-center user-review-cont">
      <div className="userreview-blur users-blur-1" />
      <div className="userreview-blur users-blur-2" />
      <div className="userreview-blur users-blur-3" />
      <div className="">
        <h2 className="section-heading-txt text-center">
          Words From Our Partners
        </h2>
        <p className="section-body">
          We love giving more to the users to rave about!
        </p>
        <Link
          to={"/business-review"}
          className=" flex justify-center review-cta"
        >
          <Button type={"solid"} btnContent={"See All Testimonials"} />
        </Link>
      </div>
      <div className="flex items-center partner-bottom-cont">
        {BusinessReviewVideoConstants.slice(0, 3).map((item, index) => (
          <Link
            key={index}
            to={`/business-testimonials-videos/${item.id}`}
            className="vid-placeholder-cont"
          >
            <img
              src={item.videoPlaceholder}
              className="vid-placeholder-cont-img"
              alt=""
            />
            <img
              src={require("../../assets/play_icon.png")}
              className="play-icon"
              alt="play icon"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PartnerReview;

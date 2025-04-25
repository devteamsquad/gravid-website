import React from "react";
import Button from "../shared/Button";
import BusinessReviewsComponent from "./BusinessReviewsComponent";
import {
  BusinessReviewConstants,
  BusinessReviewVideoConstants,
} from "./businessReviews";
import BusinessReviewPlaceHolder from "./BusinessReviewPlaceHolder";
import { Link } from "react-router-dom";
import "./BusinessTestimonial.css";

const BusinessTestimonial = () => {
  return (
    <>
      {" "}
      <div className="review-decor-img-cont">
        <img
          src={require("../assets/Wave_2.png")}
          alt=""
          className="review-decor-img test-wave_2"
        />
      </div>
      <main className="unison-cont-padding flex-col items-center  main-user-review-cont">
        <div className="mainreview-blur main-blur-1" />
        <div className="mainreview-blur main-blur-2" />
        <div className="mainreview-blur main-blur-3" />
        <div className="main-review-hero-cont ">
          <h2 className="section-heading-txt text-center">
            Testimonials Of Businesses & Non-profit Organizations
          </h2>
          <p className="section-body text-center">
            The organizations have so much to say about us!
          </p>
          <a
            rel="noreferrer"
            href="https://app.grav.id/"
            target="_blank"
            className=" flex justify-center review-cta"
          >
            <Button type={"solid"} btnContent={"Get Started"} />
          </a>
        </div>

        <div className="flex hero-img-cont">
          <div className="scrollable-div flex">
            {BusinessReviewVideoConstants.map((item, index) => (
              <BusinessReviewPlaceHolder key={index} item={item} />
            ))}
          </div>
        </div>
        <Link style={{ zIndex: 1 }} to={"/business-testimonials-videos"}>
          <Button type={"solid"} btnContent={"See More"} />
        </Link>
        <div className="review-decor-img-cont">
          <img
            src={require("../assets/Wave_4.png")}
            alt=""
            className="review-decor-img test-wave_3"
          />
        </div>

        {/* Reviews list */}
        <h3 className="review-insights-title">More Insights Shared</h3>
        <section className="main-review-sect">
          <BusinessReviewsComponent reviewArray={BusinessReviewConstants} />
        </section>
      </main>
    </>
  );
};

export default BusinessTestimonial;

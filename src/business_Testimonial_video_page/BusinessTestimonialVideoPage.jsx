import React from "react";
import BusinessReviewPlaceHolder from "../business_testimonial_page/BusinessReviewPlaceHolder";
import { BusinessReviewVideoConstants } from "../business_testimonial_page/businessReviews";
import "./BusinessTestimonialVideoPage.css";

const BusinessTestimonialVideoPage = () => {
  return (
    <section className="unison-cont-padding items-center busi-video-cont ">
      <div className=" flex  videos-cont">
        {BusinessReviewVideoConstants.map((item, index) => (
          <BusinessReviewPlaceHolder key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default BusinessTestimonialVideoPage;

import React from "react";
import "./MainUserReviewPage.css";
import Button from "../shared/Button";
import { IoIosStar } from "react-icons/io";
import ReviewsComponent from "../landing_new/UserReviews/ReviewsComponent";
import { reviews } from "../landing_new/UserReviews/UsersReviewConstants";

const MainUserReviewPage = () => {
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
        <section className=" ">
          <div className="mainreview-blur main-blur-1" />
          <div className="mainreview-blur main-blur-2" />
          <div className="mainreview-blur main-blur-3" />

          <div className="main-review-hero-cont text-center">
            <h2 className="section-heading-txt">
              What people are saying about us
            </h2>
            <p className="section-body">
              We love giving more to the users to rave about!
            </p>
            <div className="flex justify-center hero-star-cont ">
              <article className="flex">
                <IoIosStar className="hero-star" />
                <IoIosStar className="hero-star" />
                <IoIosStar className="hero-star" />
                <IoIosStar className="hero-star" />
                <IoIosStar className="hero-star" />
              </article>
              <h5 className="star-head-txt">
                5.0<span className="star-txt"> out of 5</span>
              </h5>
            </div>
            <a
              rel="noreferrer"
              href="https://app.grav.id/"
              target="_blank"
              className=" flex justify-center review-cta"
            >
              <Button type={"solid"} btnContent={"Get Started"} />
            </a>
          </div>
        </section>
        <div className="review-decor-img-cont">
          <img
            src={require("../assets/Wave_4.png")}
            alt=""
            className="review-decor-img test-wave_3"
          />
        </div>
        {/* Reviews list */}
        <section className="main-review-sect">
          <ReviewsComponent reviewArray={reviews} />
        </section>
      </main>
    </>
  );
};

export default MainUserReviewPage;

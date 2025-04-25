import React from "react";
import "./UserReviews.css";
import Button from "../../shared/Button";
import ReviewsComponent from "./ReviewsComponent";
import { UsersReviewConstants } from "./UsersReviewConstants";
import { Link } from "react-router-dom";

const UserReviews = () => {
  return (
    <section className=" unison-cont-padding flex-col items-center user-review-cont">
      <div className="userreview-blur users-blur-1" />
      <div className="userreview-blur users-blur-2" />
      <div className="userreview-blur users-blur-3" />

      <div className="">
        <h2 className="section-heading-txt">Glowing Reviews From Users</h2>
        <p className="section-body">
          We love giving more to the users to rave about!
        </p>
        <Link to={"/users-review"} className=" flex justify-center review-cta">
          <Button type={"solid"} btnContent={"See All Reviews"} />
        </Link>
      </div>
      {/* <div className=""> */}
      <ReviewsComponent reviewArray={UsersReviewConstants} />
      {/* </div> */}
    </section>
  );
};

export default UserReviews;

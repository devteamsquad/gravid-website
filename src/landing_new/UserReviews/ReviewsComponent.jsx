import React from "react";
import { chunkizeArray } from "../../utils/arrayChunking";

import ReviewCard from "./ReviewCard";

const ReviewsComponent = ({ reviewArray }) => {
  const chunkedReviewsArray = chunkizeArray(reviewArray);
  return (
    <section className=" review-cont ">
      <div className="flex-col review-col">
        {chunkedReviewsArray[0].map((item, index) => (
          <ReviewCard
            key={index}
            usersName={item.name}
            comment={item.comment}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="flex-col review-col">
        {" "}
        {chunkedReviewsArray[1].map((item, index) => (
          <ReviewCard
            key={index}
            usersName={item.name}
            comment={item.comment}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="flex-col review-col">
        {chunkedReviewsArray[2].map((item, index) => (
          <ReviewCard
            key={index}
            usersName={item.name}
            comment={item.comment}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewsComponent;

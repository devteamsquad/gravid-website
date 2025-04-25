import React from "react";
import { chunkizeArray } from "../utils/arrayChunking";
import reviewPlaceholder from "../assets/reviewPlaceholder.png";

const BusinessReviewsCard = ({ name, joinIn, img, comment }) => {
  return (
    <article className="flex-col busi-review-card-cont">
      <div className="flex busi-identity-cont">
        {" "}
        <div className="busi-review-img-cont">
          <img src={img} alt="" className="" />{" "}
        </div>
        <div className="flex-col review-text-cont">
          <p className="busi-review-name">{name}</p>
          <p className="joined">Joined in {joinIn}</p>
        </div>
      </div>
      <p className="review-comment">{comment}</p>
    </article>
  );
};

const BusinessReviewsComponent = ({ reviewArray }) => {
  const chunkedReviewsArray = chunkizeArray(reviewArray);
  return (
    <section className=" review-cont ">
      <div className="flex-col review-col">
        {chunkedReviewsArray[0].map((item, index) => (
          <BusinessReviewsCard
            key={index}
            name={item.name}
            joinIn={item.joinIn}
            img={item.img ? item.img : reviewPlaceholder}
            comment={item.comment}
          />
        ))}
      </div>
      <div className="flex-col review-col">
        {" "}
        {chunkedReviewsArray[1].map((item, index) => (
          <BusinessReviewsCard
            key={index}
            name={item.name}
            joinIn={item.joinIn}
            img={item.img ? item.img : reviewPlaceholder}
            comment={item.comment}
          />
        ))}
      </div>
      <div className="flex-col review-col">
        {chunkedReviewsArray[2].map((item, index) => (
          <BusinessReviewsCard
            key={index}
            name={item.name}
            joinIn={item.joinIn}
            img={item.img ? item.img : reviewPlaceholder}
            comment={item.comment}
          />
        ))}
      </div>
    </section>
  );
};

export default BusinessReviewsComponent;

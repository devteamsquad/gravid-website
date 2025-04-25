import React from "react";

const ReviewCard = ({ usersName, comment, rating }) => {
  return (
    <article className="review-box flex-col">
      <h5 className="review-name">{usersName}</h5>
      <div className="star-cont flex items-center">
        {[1, 2, 3, 4, 5].map((item, index) => {
          if (rating < item) {
            return (
              <img
                key={index}
                src={require("../../assets/outlineStar.png")}
                alt=""
              />
            );
          } else {
            return (
              <img
                key={index}
                src={require("../../assets/filledStar.png")}
                alt=""
              />
            );
          }
        })}
      </div>
      <p className="">{comment}</p>
    </article>
  );
};

export default ReviewCard;

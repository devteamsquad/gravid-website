import React, { useEffect, useState } from "react";
import VideoPlayer from "../shared/pages/VideoPlayer";
import { useNavigate, useParams } from "react-router-dom";
import { BusinessReviewVideoConstants } from "../business_testimonial_page/businessReviews";
import "./BusinessTestimonialVideoPage.css";
import { LiaTimesSolid } from "react-icons/lia";

const BusinessTestimonialVideoPlayer = () => {
  const [videoDetails, setVideoDetails] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = BusinessReviewVideoConstants.find((item) => item.id === id);

    setVideoDetails(data);
  }, [id]);
  return (
    <section className="">
      {videoDetails ? (
        <div className="business-video-player">
          <div className="flex justify-between align-center video-player-header">
            <article className="flex  brand-details-cont">
              <div className="company-logo video-companyLogo">
                <img
                  style={{ objectFit: "cover" }}
                  src={videoDetails.companyLogo}
                  alt=""
                  className=""
                />{" "}
              </div>
              <div className="player-company-detail flex align-center">
                <h3 className="company-txt-h3">{videoDetails.companyName}</h3>
                <p className="company-txt-p">
                  {videoDetails.userName} - {videoDetails.userTitle}
                </p>
              </div>
            </article>
            <LiaTimesSolid
              onClick={() => navigate(-1)}
              className="cancel-icon"
            />
          </div>
          <div className="video-player-cont">
            <VideoPlayer source={videoDetails.link} />
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </section>
  );
};

export default BusinessTestimonialVideoPlayer;

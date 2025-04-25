import React from "react";
import "./BuildCommunity.css";
import Button from "../../shared/Button";
import businessStat from "../../assets/build_community_stat_image.png";

const BuildCommunity = () => {
  return (
    <section className="unison-cont-padding build-community-cont">
      <div className="community-blur com-blur-1" />
      <div className="community-blur com-blur-2" />
      <div className="">
        <h4 className="community-h4">
          Fundraising | Community Management | Donations
        </h4>
        <h2 className="community-h2">Build a Thriving Community</h2>
      </div>
      <div className="stat-img-cont">
        <img src={businessStat} alt="Statistics display" />
      </div>
      <p className="community-p">
        Grav.id is designed for ease of use. Anyone can create their community
        effortlessly with the support of our AI tools and community growth team.
        You can collect support globally through USD or cryptocurrency, with
        lowest fees and fast transactions with integrated fundraising and
        donations.
      </p>
      <div className="flex items-center community-cta-cont">
        <h3 className="community-h3">Who do you want to serve?</h3>
        <a href="https://app.grav.id" target="_blank" rel="noopener noreferrer">
          <Button
            btnContent={"Get Started"}
            type={"solid"}
            className={"cta-btn"}
          />
        </a>
      </div>
    </section>
  );
};

export default BuildCommunity;

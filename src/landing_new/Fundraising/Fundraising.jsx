import React from "react";
import "./Fundraising.css";
import Button from "../../shared/Button";
import phones from "../../assets/home_phone_bg.png";

const Fundraising = () => {
  return (
    <section className="fund-section">
      <article className=" fund-cont">
        <div className="fund-left-cont flex-col">
          <h2 className="section-heading-txt">
            Fundraise Directly From Your Members
          </h2>
          <p className="section-body">
            A powerful and practical fundraising tool at your fingertips.
            Members can easily support you financially with choices to directly
            donate to you at anytime or to donate to a fundraising campaign
            you’ve created.
          </p>
          <a
            href="https://app.grav.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Button type={"solid"} btnContent={"Get Started"} />
          </a>
        </div>
        <div className="fund-img-cont">
          <img src={phones} alt="" srcSet="" />
        </div>
      </article>
    </section>
  );
};

export default Fundraising;

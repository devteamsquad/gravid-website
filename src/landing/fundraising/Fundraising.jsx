import React from "react";
import "./Fundraising.css";
import { FaArrowRight } from "react-icons/fa";

const Fundraising = () => {
  return (
    <section className="funrs-sect">
      <div className="funrs-flex-box">
        <div className="funrs-img-cont">
          <img
            src={require("../../assets/landing_fundraising.png")}
            alt="Mobile device showing fundraising"
            className=""
          />
        </div>
        <div className="funrs-txt-cont">
          <h2 className="funrs-headtxt">
            Fundraising Directy From Your Community
          </h2>
          <p className="funrs-ptxt">
            A powerful and practical fundraising tool at your fingertips.
            Members can easily support you finanically with choices to directly
            donate to you at anytime or to donate to a fundraising campaign you
            have created.
          </p>
          <a href="https://app.grav.id/">
            <button className=" funrs-btn ">
              <h5 className="">Get Started</h5>

              <FaArrowRight />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Fundraising;

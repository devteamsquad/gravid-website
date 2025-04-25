import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../css/AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="about-section unison-cont-padding ">
        <div className="review-decor-img-cont">
          <img
            src={require("../../assets/Wave_2.png")}
            alt=""
            className="review-decor-img test-wave_2"
          />
        </div>
        <div className="about-topPart">
          <div onClick={() => navigate(-1)} className="backarrow-cont">
            <IoIosArrowBack className="backarrow" /> <p className="">Back</p>
          </div>
        </div>
        <div className="about-content">
          <div className="top-half">
            <h1 className="about-head">About Us</h1>
            <article className="flex about-txt-cont">
              <p className="about-txt">
                At Grav.id, we empower non-profits, social enterprises, and
                communities with secure, compliant digital solutions. Our
                platform enhances in-person interactions by providing safe
                online spaces for managing sensitive data and communications.{" "}
              </p>
              <p className="about-txt">
                We prioritize user control and privacy, ensuring compliance with
                HIPAA, GDPR, CCPA, and other privacy laws. Our mission is to
                support organizations in building trust, improving efficiency,
                and demonstrating their impact, helping them thrive in their
                vital work.
              </p>
            </article>
          </div>
          <div className="flex items-center justify-center about-bottom-cont">
            <div className=" about-img-cont">
              <img src={require("../../assets/ninh.png")} alt="" srcSet="" />
            </div>
            <div className=" about-img-cont">
              <img
                src={require("../../assets/beatrice.png")}
                alt=""
                srcSet=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

import React from "react";
import "./Pricing.css";
import mobImg from "../assets/digital_security_promo.png";
import { Link } from "react-router-dom";

const Price = () => {
  return (
    <main className="pricing-sect">
      <div className="pricing-blur price-blur-1" />
      <div className="pricing-blur price-blur-2" />
      <div className="pricing-blur price-blur-3" />
      <section className="pricing-text-cont">
        <h1 className="">
          Enhances in-person interactions and manage communications
        </h1>
        <p className="">
          Build trust and prioritize the privacy of your community with our safe
          online communication solution. Request a demo today
        </p>
      </section>
      <section className="priceplan-section">
        <div className="priceplan-container">
          <div className={"planHead-cont"}>
            <div className="planHead-text">
              <h3 className="">Starter</h3>
              <h4 className="">
                $149{" "}
                <span style={{ fontSize: "1.1rem" }} className="">
                  per month
                </span>
              </h4>
              <p>
                $99 per month for <b>NGOs</b>
              </p>
            </div>
          </div>
          <p className="offer-desc">With the starter package, you get:</p>

          <ul className="offer-container  ">
            <li className="">2x Communities</li>
            <li className="">In-App Community Management</li>
            <li className="">In-App Donations</li>
            <li className="">User & Engagement Analytics</li>
            <li className="">Unlimited Users Paid Membership</li>
            <li className="">(Option) Additional Communities are available</li>
          </ul>

          <a
            target="_blank"
            rel="noreferrer"
            className="price-cta"
            href="https://app.grav.id"
          >
            <button className="">Get started</button>
          </a>
        </div>
        <div className="priceplan-container">
          <div className={"planHead-cont"}>
            <div className="planHead-text">
              <h3 className="">Professional</h3>
              <h4 className="">
                $299{" "}
                <span style={{ fontSize: "1.1rem" }} className="">
                  per month
                </span>
              </h4>
              <p>
                $199 per month for <b>NGOs</b>
              </p>
            </div>
          </div>
          <p className="offer-desc"> Everything in Starter plus:</p>
          <ul className="offer-container">
            <li className="">4x Communities</li>
            <li className="">2TB of Storage</li>
            <li className="">100 User Verifications (KYC) per month</li>
            <li className="">50,000 Verified Credentials</li>
            <li style={{ fontWeight: "bold" }} className="sub-list">
              $199 Worth of Professional Services or Consulting per Month
              <li className="">Fundraising Feasibility Study</li>
              <li className="">Impact Research</li>
              <li className="">Content Marketing</li>
              <li className="">Social Media Marketing</li>
            </li>
            <li className="">
              (Option) Additional User Verifications (KYC) are available
            </li>
          </ul>

          <a
            target="_blank"
            rel="noreferrer"
            className="price-cta"
            href="https://app.grav.id"
          >
            <button className="">Get started</button>
          </a>
        </div>
        <div className="priceplan-container">
          <div className={"planHead-cont"}>
            <div className="planHead-text">
              <h3 className="">Growth</h3>
              <h4 className="">
                $1499{" "}
                <span style={{ fontSize: "1.1rem" }} className="">
                  per month
                </span>
              </h4>
              <p>
                $999 per month for <b>NGOs</b>
              </p>
            </div>
          </div>
          <p className="offer-desc"> Everything in Professional plus:</p>
          <ul className="offer-container">
            <li className="">Monetize Your Trust Ecosystem</li>
            <li className="">10x Communities</li>
            <li className="">Additional Storage</li>
            <li className="">Additional Verified Credentials</li>
            <li style={{ fontWeight: "bold" }} className="sub-list">
              $999 Worth of Fundraising Support per month
              <li className="">Major Gifts Fundraising</li>
              <li className="">Professional Website Design</li>
              <li className="">Volunteer Recruitment</li>
              <li className="">Staff Training</li>
            </li>
            <li className="sub-list">
              (Option) Your Name and Logo on the App
              <li className="">White Label Maintenance is available</li>{" "}
            </li>

            <li className="sub-list">
              (Option) Custom Development and Integration
              <li className="">Custom Development pipeline is available</li>
            </li>
          </ul>

          <a
            target="_blank"
            rel="noreferrer"
            className="price-cta"
            href="https://app.grav.id"
          >
            <button className="">Get started</button>
          </a>
        </div>
      </section>
      <section className="mob_app-sect">
        <div className="left-side">
          <h2 className="mob_app-title ">
            Want Your Own Branded Web and Mobile App?
          </h2>
          <p className="mob_app-subtext">
            Get all you need for your community security, growth and seamless
            interactions.
          </p>
          <ul className="offer-list">
            <h4 className="offer-desc">Everything in Growth plus:</h4>
            <li className="">Your Own Trust Ecosystem</li>
            <li className="">Branded Mobile App</li>
            <li className="">Branded Web App</li>
            <li className="">Branded Website</li>
            <li className="">Verified Communities</li>
            <li className="">100,000+ Verified Users & Credentials</li>
            <li className="">
              1,000+ Enhanced User Verification or KYC per month
            </li>
            <li className="">Custom Integration</li>
            <li className="">API & Developer Access</li>
          </ul>
          <Link className="price-cta request-demo-btn" to="/#request-demo">
            <button className="">Request Demo</button>
          </Link>
        </div>
        <div className="right-side">
          <img src={mobImg} alt="gravid app" />
        </div>
      </section>
    </main>
  );
};

export default Price;

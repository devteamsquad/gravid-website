import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import googgleStartUp from "../assets/Google_for_Startups-white.png";
import jjfLabs from "../assets/JFFLABSwhite.png";
import seedStar from "../assets/seedstars-white.png";
import hyperLedger from "../assets/Hyperledger_Logo_NoTagFinal.png";
import RequestDemoForm from "./RequestDemoForm";
import "../shared/css/RequestDemo.css";

const PopularSolution = ({ text, boldText }) => (
  <div className="solution-item">
    <div className="solution-icon-cont">
      <FaRegCheckCircle className="solution-icon" />
    </div>
    <p>
      <span className="text-bold">{boldText}</span>
      {text}
    </p>
  </div>
);

const RequestDemoPage = () => {
  return (
    <>
      <section className="hero-header">
        <h1 className="">Elevate Your Grav.id Experience</h1>
        <p className="">
          Grav.id is the trusted wallet that offers the security of a
          self-custodial system, empowering users to store their data locally,
          manage membership, set up business accounts, provide enhanced
          services, and engage with meaningful communities - all in one
          easy-to-use platform.
        </p>
      </section>
      <div className="page-layout">
        <div className="column popular-solutions">
          <h2>Popular Solutions</h2>
          <p>
            Our <span className="text-bold">free demo</span> will illustrate how
            Grav.id can help with:
          </p>
          <PopularSolution
            boldText="Setting up your business, "
            text="whether you are in the supply chain or hospitality, and providing solutions for your product or service."
          />
          <PopularSolution
            boldText="Security and privacy, "
            text="where regulatory compliance is made effortless, exceeding industry standards in user consent and data security."
          />
          <PopularSolution
            boldText="Creation of services "
            text="that gather user-approved and accurate data from your community."
          />
          <PopularSolution
            boldText="Elevated engagement "
            text="of the audience with rewards and promotions, which are easier to unlock."
          />
          <PopularSolution
            boldText="Cultivating a community "
            text="and hearing directly from your users by creating your business' community page."
          />
          <PopularSolution
            boldText="QR codes "
            text="leveraging Self-Sovereign Identity tech for a user-friendly and efficient way to interact with your audience."
          />
          <PopularSolution
            boldText="Fraud proof verification "
            text="where KYC (Know Your Customer) and other identity verifications are made simple."
          />
        </div>
        <RequestDemoForm />
      </div>
      <section className="recommend-cont">
        <div className="horizon">
          <hr />
        </div>
        <div className="recommended">
          <h5>Recommended By</h5>
          <p>
            Our Partners trust our software and the mission to build more
            secure, private, and decentralized ecosystem, empowering
            individuals, businesses, and educational institutions worldwide
            through transformational blockchain technology.
          </p>
        </div>
        <div className="recommend-img">
          <div className="img-cont google">
            <img className="" src={googgleStartUp} alt="Googgle Start Up" />
          </div>
          <div className="img-cont jjf">
            <img className="" src={jjfLabs} alt="JJF Labs" />
          </div>
          <div className="img-cont seedstars">
            <img className="" src={seedStar} alt="Seed Star" />
          </div>
          <div className="img-cont hyperledger">
            <img className="" src={hyperLedger} alt="Hyper Ledger" />
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestDemoPage;

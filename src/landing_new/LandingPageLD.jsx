import React, { useEffect } from "react";
import "./LandingPage.css";
import Hero from "./Hero/Hero";
import BuildCommunity from "./BuildCommunity/BuildCommunity";
import DataControlAndTrust from "./DataControlAndTrust/DataControlAndTrust";
import AIPoweredTrust from "./AIPoweredTrust/AIPoweredTrust";
import UserReviews from "./UserReviews/UserReviews";
import PartnerReview from "./PartnerReview/PartnerReview";
import RequestDemo from "./RequestDemo/RequestDemo";
import Fundraising from "./Fundraising/Fundraising";
import { useLocation } from "react-router-dom";

const LandingPageLD = () => {
  const location = useLocation();
  //console.log(location);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      //console.log(location.hash.substring(1));

      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <BuildCommunity />
      <Fundraising />
      <DataControlAndTrust />
      <AIPoweredTrust />
      <UserReviews />
      <PartnerReview />
      <RequestDemo />
    </>
  );
};

export default LandingPageLD;

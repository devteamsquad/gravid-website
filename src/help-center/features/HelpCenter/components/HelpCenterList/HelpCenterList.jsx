import React from "react";
import HelpCard from "../HelpCard/HelpCard";
import { helpCenterData } from "../../data/HelpCenterItems";
import "./HelpCenterList.css";

const HelpCenterList = () => {
  return (
    <div className="help-center-container">
      <div className="help-center-header">
        <h1>Welcome to Our Help Center</h1>
        <p>Find the answers you need or get help from our support team.</p>
      </div>
      <div className="help-center-grid">
        {helpCenterData.map((data, index) => (
          <HelpCard
            key={data.id + index}
            id={data.id}
            imageSrc={data.imageUrl}
            sectionName={data.sectionName}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HelpCenterList;

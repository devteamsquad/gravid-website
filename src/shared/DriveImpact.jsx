import React from "react";
import "./css/DriveImpact.css";

const DriveImpact = () => {
  return (
    <div className="drive-impact-container">
      <div className="content">
        <h1 className="title">
          Drive Impact
          <br />
          Secure Long-Term Sustainability
        </h1>
        <p className="description">
          Tools to help you build trust, grow your community, and achieve
          long-term sustainability.
        </p>
        <a href="app.gravid.com" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">
            Get Started <span className="arrow">→</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default DriveImpact;

import React from "react";
import "./Impact.scss";
import { FaVideo } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { GiOpenPalm } from "react-icons/gi";
import { IoMdAnalytics } from "react-icons/io";
import { MdGroups } from "react-icons/md";

function ToolsForImpact() {
  return (
    <main>
      <section className="membership_section">
        <div className="membership_flexCol">
          <h2 className="membership_title">Tools for Impact</h2>
          <h5 className="impact_content">
          Grav.id allows mission-driven organizations and individuals to grow their communities through global outreach, 
          fundraising, and advocacy. Accept USD and cryptocurrency donations with minimal fees and near-instant transactions in-app. 
          Donors and volunteers have total control over their transactions and sensitive information, 
          guaranteeing complete privacy, transparency, and ownership.
          </h5>
        <div className="button-container">
        <button type="button" className="impact-button">
          <FaVideo className="impact-icon"/>
            Go Live
        </button>
        <button type="button" className="impact-button">
          <IoMdAddCircleOutline className="impact-icon"/>
            Post
        </button>
        <button type="button" className="impact-button">
          <GrAnnounce className="impact-icon"/>
            Announcement
        </button>
        <button type="button" className="impact-button">
          <GiOpenPalm className="impact-icon"/>
            Fundraise
        </button>
        <button type="button" className="impact-button">
          <IoMdAnalytics className="impact-icon"/>
            Analytics
        </button>
        <button type="button" className="impact-button">
          <MdGroups className="impact-icon"/>
            Members
        </button>
        </div>

        </div>
      </section>
    </main>
  );
}

export default ToolsForImpact;

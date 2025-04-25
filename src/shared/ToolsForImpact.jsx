import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoMegaphoneSharp } from "react-icons/io5";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { BiVideo } from "react-icons/bi";
import { IoAnalyticsSharp } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";
import "./css/ToolsForImpact.css";

const ToolsForImpact = () => {
  return (
    <div className="tools-for-impact">
      <div className="text-cont">
        <h1>Tools for Impact</h1>

        <p className="description">
          Grav.id allows mission-driven organizations and individuals to grow
          their communities through global advocacy, fundraising, and donations.
          Accept USD and cryptocurrency and enjoy minimal fees and near-instant
          transactions. Donors and volunteers have total control over their
          transactions and sensitive information, guaranteeing complete privacy,
          transparency, and ownership.
        </p>
      </div>

      <div className="button-grid">
        <Button icon={<BiVideo className="btn-icon" />} text="Go Live" />
        <Button
          icon={<AiOutlinePlusCircle className="btn-icon" />}
          text="Post"
        />
        <Button
          icon={<IoMegaphoneSharp className="btn-icon" />}
          text="Announcement"
        />
        <Button
          icon={<LiaHandHoldingHeartSolid className="btn-icon" />}
          text="Fundraise"
        />
        <Button
          icon={<IoAnalyticsSharp className="btn-icon" />}
          text="Analytics"
        />
        <Button icon={<LuUsers2 className="btn-icon" />} text="Members" />
      </div>
    </div>
  );
};

const Button = ({ icon, text }) => (
  <button className="impact-button">
    {icon}
    <span className="btn-text">{text}</span>
  </button>
);

export default ToolsForImpact;

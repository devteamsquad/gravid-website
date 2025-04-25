import React from "react";
import "./HelpCard.css";
import { useNavigate } from "react-router-dom";

const HelpCard = ({ id, imageSrc, sectionName, description }) => {
  const navigate = useNavigate();
  const onDetailHandler = () => {
    navigate(`/help-center/${id}`);
  };

  return (
    <div onClick={onDetailHandler} className="help-card">
      <img src={imageSrc} alt={sectionName} />
      <div className="card-content">
        <div className="section-name">{sectionName}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default HelpCard;

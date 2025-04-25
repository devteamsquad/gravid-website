import React from "react";

import "./css/button.css";
import { FaArrowRight } from "react-icons/fa";

//ENUM type ="outline" or "solid"

const Button = ({ btnContent, className, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`nav-cta-btn   ${type}-btn ${className}`}
    >
      <p className="">{btnContent}</p>
      <FaArrowRight className="btn-icon" />
    </button>
  );
};

export default Button;

import React from 'react';
import'../../../css/Recommend.scss'

const Recommand = () => {
    return (
    <div className="recommend_section">
        <h1 className="rc_title">Recommended By</h1>
        <p className='rc_subtitle'>Our Partners trust our software and the mission to build a more secure, private, and decentralized ecosystem, empowering individuals, businesses, and educational institutions worldwide through transformational blockchain technology</p>
        <div className="rc_flex_row">
          <img
            className="rc_image"
            src={require("../../../../assets/Google_for_Startups-white.png")}
            alt="alt text"
          />
          <img
            className="rc_image"
            src={require("../../../../assets/JFFLABSwhite.png")}
            alt="alt text"
          />
          <img
            className="rc_image"
            src={require("../../../../assets/seedstars-white.png")}
            alt="alt text"
          />
          <img
            className="rc_image"
            src={require("../../../../assets/Hyperledger_Logo_NoTagFinal.png")}
            alt="alt text"
          />
        </div>
      </div>
    );
};

export default Recommand;
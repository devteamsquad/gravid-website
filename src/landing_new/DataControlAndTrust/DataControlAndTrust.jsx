import React from "react";
import shield from "../../assets/shield.png";
import handshake from "../../assets/handshake.png";
import verified from "../../assets/verified.png";
import connect from "../../assets/connect.png";

import "./DataControlAndTrust.css";

const trustConstant = [
  {
    icon: shield,
    text: "Decide when, how, and with whom details are shared.",
  },
  {
    icon: handshake,
    text: "Contribute directly to your ecosystem’s trust and sustainability through verification and data sharing.",
  },
  {
    icon: verified,
    text: "Empower your members with data sharing consent, enhance their privacy and security.",
  },
  {
    icon: connect,
    text: "Allow everyone to connect and interact confidently in your community.",
  },
];

const DataControlAndTrust = () => {
  return (
    <section className="unison-cont-padding trust-cont flex items-center">
      <div className="trust-blur trust-blur-1" />
      <div className="trust-blur trust-blur-2" />
      <div className="trust-cont-left">
        <h2 className="section-heading-txt">Data Control and Trust</h2>

        <p className="section-body">
          Our trust protocol gives every member full agency over personal and
          sensitive information
        </p>
      </div>
      <div className="">
        {trustConstant.map((item, index) => (
          <div key={index} className="flex items-center trust-list-cont ">
            <div className="list-icon-cont ">
              <img src={item.icon} alt="" srcSet="" />
            </div>
            <p className="list-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DataControlAndTrust;

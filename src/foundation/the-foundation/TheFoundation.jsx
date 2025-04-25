import { Link } from "react-router-dom";
import React from "react";
import "./TheFoundation.scss"


function TheFoundation() {
  return (
    <div className="foundation_section">
      <h1 className="foundation_title">The Foundation</h1>

      <div className="foundation_contentRows">
        <div className="foundation_box">
          <div className="foundation_flexCol">
            <h1 className="foundation_sectionTitle">Role</h1>
            <h5 className="foundation_sectionContent">
              The Foundation is responsible for the the rules by which the
              Grav.id Network operates and the use of the Network by all
              involved parties: continuously build the rulebook, facilitate the
              provision of Grav.id in a safe and compliant manner, and guide the
              development of the secure and trusted decentralized protocols.
            </h5>
            <Link to="/role" className="foundation_learnMore">Learn More</Link>
          </div>
        </div>

        <div className="foundation_box">
          <div className="foundation_flexCol">
            <h1 className="foundation_sectionTitle">Organization</h1>
            <h5 className="foundation_sectionContent">
              The Grav.id Network Foundation is a membership organization aimed
              at providing secure, private, and decentralized technological
              infrastructure to entities. The goal is to alleviate public
              concerns over data privacy and business concerns over adhering to
              new privacy and security standards.
            </h5>
            <Link to="/organization" className="foundation_learnMore">Learn More</Link>
          </div>
        </div>

        <div className="foundation_box">
          <div className="foundation_flexCol">
            <h1 className="foundation_sectionTitle">Governance</h1>
            <h5 className="foundation_sectionContent">
              The Foundation is governed by the Board of Directors, elected
              annually by the Foundation membership. Members also participate in
              governance and influence the Network’s roadmap and playbook
              through the different workgroups and steering committees.
            </h5>
            <Link to="/governanace" className="foundation_learnMore">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheFoundation;

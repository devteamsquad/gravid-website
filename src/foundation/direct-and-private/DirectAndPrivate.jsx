import React from "react";
import './DirectAndPrivate.scss'

function DirectAndPrivate(props) {
  return (
    <div className="dap_section">
      <section className="dap_communicationSection">
        <div className="dap_flexRow">
          <img
            className="dap_image"
            src={require("../../assets/direct_and_private.png")}
            alt="alt text"
          />

          <div className="dap_flexCol">
            <h1 className="dap_title">
              Direct and private communications with your community
            </h1>
            <h5 className="dap_highlight">
              With the ability to create chat groups with your users in a Self
              Sovereign Identity environment you can rest assured that only the
              users with your specific credentials will be able to communicate
              within the community.
            </h5>
            <a href="https://app.grav.id"><button className="dap_btn">Join us</button></a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

DirectAndPrivate.propTypes = {};

export default DirectAndPrivate;

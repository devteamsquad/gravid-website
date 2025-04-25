import "./TrustedIdentity.scss";
import { FaArrowRight } from "react-icons/fa";

function TrustedIdentity() {
  return (
    <div className="ti_section">
      <div className="ti_container">
        <div className="ti_flex_row">
          <div className="ti_flex_col">
            <h1 className="ti_title">
              Verified Credentialing, <br />
              Trusted Identity
            </h1>
            <h3 className="ti_subtitle">
              Leveraging Self-Sovereign Identity Technology
            </h3>
            <h5 className="ti_highlight">
              Verifying identity and credentials through reliable and trusted
              processes.
            </h5>
            <button className="ti_button">
              <a href="https://app.grav.id/"><h5 className="ti_highlight1">Learn More</h5></a>
              <div className="ti_icon">
                <FaArrowRight />
              </div>
            </button>
          </div>
          <img
            className="ti_image"
            src={require("../../assets/mobile_profile_interface.png")}
            alt="alt text"
          />
        </div>
      </div>
    </div>
  );
}

export default TrustedIdentity;

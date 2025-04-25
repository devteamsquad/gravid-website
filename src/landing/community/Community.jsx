import "./Community.scss";
import { FaArrowRight } from "react-icons/fa";

function Community() {
  return (
    <div className="ti_section">
      <div className="ti_container comun-ti_container">
        <div className="ti_flex_row">
          <div className="ti_flex_col comun-ti_flex_col">
            <h2 className="ti_title">Build a Thriving Community</h2>
            <h5 className="ti_highlight comun-ti_highlight">
              Building a thriving community is now simpler than ever. Grav.id is
              designed for ease of use and growth. Anyone can easily grow their
              community through paid memberships, events, and online courses
              effortlessly with the support of our AI tools and professional
              community growth consultants.
            </h5>
            <h4 className="comun-extra-txt">Who do you want to engage?</h4>
            <a href="https://app.grav.id/">
              <button className="funrs-btn">
                <h5 className="">Get Started</h5>
                <div className="">
                  <FaArrowRight />
                </div>
              </button>
            </a>
          </div>
          <img
            className="ti_image"
            src={require("../../assets/landing.png")}
            alt="alt text"
          />
        </div>
      </div>
    </div>
  );
}

export default Community;

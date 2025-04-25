import { MdOutlineLock } from "react-icons/md";
import { MdFingerprint } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { MdOutlineGroups3 } from "react-icons/md";
import "./Insights.scss";

function Insights() {
  return (
    <>
      <section className="insights_section">
        <div className="insights_flex_row">
          <div className="insights_flex_col">
            <div className="insights_flex_col1">
              <div className="insights_icon">
                <MdOutlineLock />
              </div>
              <h2 className="insights_medium_title">Data Security</h2>
              <h5 className="insights_highlight">
                Grav.id Wallet is non-custodial, meaning your data is stored
                locally and not on servers.
              </h5>
            </div>
            <div className="insights_flex_col1">
              <div className="insights_icon">
                <MdFingerprint />
              </div>
              <h2 className="insights_medium_title">Identity Management</h2>
              <h5 className="insights_highlight">
                Find and receive credentials to add to your identity .
              </h5>
            </div>
          </div>
          <img
            className="insights_image"
            src={require("../../assets/digital_security_promo.png")}
            alt="alt text"
          />
          <div className="insights_flex_col">
            <div className="insights_flex_col1">
              <div className="insights_icon">
                <MdBusiness />
              </div>
              <h2 className="insights_medium_title">Business Creation</h2>
              <h5 className="insights_highlight">
                Create your own business and community with the help of Grav.id
                Wallet.
              </h5>
            </div>
            <div className="insights_flex_col1">
              <div className="insights_icon">
                <MdOutlineGroups3 />
              </div>
              <h2 className="insights_medium_title">Community Engagement</h2>
              <h5 className="insights_highlight">
                Join communities that matter to you and make a difference.
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* mobile */}
      <section className="mobile_insights_section">
        <div className="mobile_insights_flex_row">

          <div className="mobile_insights_flex_col">
            <img
              className="mobile_insights_image"
              src={require("../../assets/digital_security_promo.png")}
              alt="alt text"
            />
            <div className="mobile_insights_flex_col1">
              <div className="mobile_insights_icon">
                <MdOutlineLock />
              </div>
              <h2 className="mobile_insights_medium_title">Data Security</h2>
              <h5 className="mobile_insights_highlight">
                Grav.id Wallet is non-custodial, meaning your data is stored
                locally and not on servers.
              </h5>
            </div>
            <div className="mobile_insights_flex_col1">
              <div className="mobile_insights_icon">
                <MdFingerprint />
              </div>
              <h2 className="mobile_insights_medium_title">Identity Management</h2>
              <h5 className="mobile_insights_highlight">
                Find and receive credentials to add to your identity .
              </h5>
            </div>
            <div className="mobile_insights_flex_col1">
              <div className="mobile_insights_icon">
                <MdBusiness />
              </div>
              <h2 className="mobile_insights_medium_title">Business Creation</h2>
              <h5 className="mobile_insights_highlight">
                Create your own business and community with the help of Grav.id
                Wallet.
              </h5>
            </div>
            <div className="mobile_insights_flex_col1">
              <div className="mobile_insights_icon">
                <MdOutlineGroups3 />
              </div>
              <h2 className="mobile_insights_medium_title">Community Engagement</h2>
              <h5 className="mobile_insights_highlight">
                Join communities that matter to you and make a difference.
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Insights;

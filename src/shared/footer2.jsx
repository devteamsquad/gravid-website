import React, { useState } from "react";
import cn from "classnames";
import TwitterLogo from "../assets/social_Icons/twitter_logo.svg";
import LinkedinLogo from "../assets/social_Icons/linkedin_logo.svg";
import YoutubeLogo from "../assets/social_Icons/youtube_logo.svg";
import TextBox from "../assets/texbox.svg";

import "./css/footer.scss";
import { Link } from "react-router-dom";

function Footer(props) {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Join the Gravid community, ${email}, and stay up to date with the latest news and updates!`
    );
    alert(
      `We would redirect you to the community page, please click ok to proceed`
    );
    window.location.replace(
      "https://app.grav.id/community-posts?credentialRef=9yy7FGE09SwnRT6RA0hd"
    );
  };
  return (
    <div className={cn("newsletterSection", props.className)}>
      <div className={"contentBox2"}>
        <div className={"flexCol"}>
          <div className={"flexRow"}>
            <div className={"flexCol1"}>
              <img
                className={"newsletterImage"}
                src={require("../assets/grav.id_logo.png")}
                alt="alt text "
              />
              <h3 className={"newsletterSubtitle"}>
                Subscribe to our Newsletter
              </h3>
              <form onSubmit={handleSubmit}>
                <div className={"contentBox1"}>
                  <div
                    className={"emailInputBox"}
                    style={{ "--src": `url(${TextBox})` }}
                  >
                    <div className={"flexRow1"}>
                      <input
                        className={"emailLabel"}
                        placeholder="Enter email address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <img
                        className={"emailIcon"}
                        src={require("../assets/arrow-right-short.png")}
                        alt="alt text"
                        onClick={handleSubmit}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <p className={"privacyText"}>
                By subscribing, you agree to our{" "}
                <a href="/privacy-policy">
                  <u>Privacy Policy</u>
                </a>{" "}
                and consent to receive updates from our company on our latest
                features and releases.
              </p>
            </div>

            <div className={"flexCol2"}>
              <h1 className={"downloadTitle"}>Download Now</h1>

              <div className={"flexRow2"}>
                <a href="https://hubs.li/Q02r7NTQ0">
                  <img
                    className={"downloadImage"}
                    src={require("../assets/app_store_download_button.png")}
                    alt="alt text"
                  />
                </a>
                <a href="https://hubs.li/Q02r7NXr0">
                  <img
                    className={"downloadImage"}
                    src={require("../assets/google_play_download_button.png")}
                    alt="alt text"
                  />
                </a>
              </div>
            </div>

            <div className={"infoColumn"}>
              <Link to="/about" className={"aboutUs"}>
                About Us
              </Link>
              {/* <Link to='/contact' className={'aboutUs'}>
                Contact Us                
              </Link> */}
              <a href="mailto:websitesupport@grav.id" className={"aboutUs"}>
                Contact Us
              </a>
              <Link to="/foundation" className={"aboutUs"}>
                Foundation
              </Link>
              <Link to="/faqs" className={"aboutUs"}>
                FAQs
              </Link>
              {/* <Link to='/support' className={'aboutUs'}>
                Support
              </Link> */}
              {/* <Link to='/insights' className={'aboutUs'}>
                Insights
              </Link> */}
              <Link to="/press-kit" className={"aboutUs"}>
                Press Kit
              </Link>
               <div data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="67d47f552aa368cdff2366ee" data-style-height="52px" data-style-width="100%">
                <a className={'aboutUs'} href="https://www.trustpilot.com/review/grav.id" target="_blank" rel="noopener noreferrer">Trustpilot</a>
              </div>
            </div>

            <div className="socialMediaContainer">
              <h5 className={"followUs"}>Follow us</h5>
              <div className={"socialMediaColumn"}>
                <a
                  className={"socialMediaRow"}
                  href="https://www.linkedin.com/company/gravitycommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={"socialMediaIcon"}
                    src={LinkedinLogo}
                    alt="linkedin handle"
                  />
                  <h5 className={"socialMediaLabel"}>LinkedIn</h5>
                </a>

                <a
                  className={"socialMediaRow"}
                  href="https://twitter.com/gravidcommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={"socialMediaIcon"}
                    src={TwitterLogo}
                    alt="twitter handle"
                  />
                  <h5 className={"socialMediaLabel"}>Twitter</h5>
                </a>

                <a
                  className={"socialMediaRow"}
                  href="https://www.youtube.com/@gravity_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={"socialMediaIcon"}
                    src={YoutubeLogo}
                    alt="youtube handle"
                  />
                  <h5 className={"socialMediaLabel"}>YouTube</h5>
                </a>
                {/* <a
                  className={"socialMediaRow"}
                  href="https://discord.gg/dqgwmTH7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={"socialMediaIcon"}
                    src={DiscordLogo}
                    alt="Discord handle"
                  />
                  <h5 className={"socialMediaLabel"}>Discord</h5>
                </a> */}
                {/* <a
                  className={"socialMediaRow"}
                  href="https://t.me/gravidapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={"socialMediaIcon "}
                    src={TelegramLogo}
                    alt="Telegram handle"
                  />
                  <h5 className={"socialMediaLabel"}>Telegram</h5>
                </a> */}
              </div>
            </div>
          </div>

          <div className={"footerColumn"}>
            <Link to="/copyright-terms" className={"copyright"}>
              © 2025 Grav.id. All rights reserved.
            </Link>

            <div className={"linkRow"}>
              <Link to="/privacy-policy" className={"privacyPolicy"}>
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className={"privacyPolicy"}>
                Terms of Service
              </Link>
              <Link to="/cookie-settings" className={"privacyPolicy"}>
                Cookie Settings
              </Link>
               <Link to='/saas-msa' className={'privacyPolicy'}>
                SAAS-MSA
              </Link>
              <Link to="/security" className={"privacyPolicy"}>
                Security
              </Link>
              <Link to="/help-center" className={"privacyPolicy"}>
                Help
              </Link>
              {/* <Link to='/site' className={'privacyPolicy'}>
                Sitemap
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

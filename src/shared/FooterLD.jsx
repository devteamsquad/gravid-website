import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import TwitterLogo from "../assets/social_Icons/twitter_logo.svg";
import LinkedinLogo from "../assets/social_Icons/linkedin_logo.svg";
import YoutubeLogo from "../assets/social_Icons/youtube_logo.svg";
import "./css/footer_ld.css";
import "./css/footer.scss";

const FooterLD = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-cont unison-cont-padding">
      {/* decor divs */}
      <div className=" blur_1" />
      <div className=" blur_2" />
      <section className="footer-top">
        <div className=" footer-col footer-col-1">
          <Link to="/" className="footer-logo-img-cont ">
            <img
              className="logo-img"
              src={require("../assets/footer-logo.png")}
              alt="Gravid logo"
            />
          </Link>
          <h3 className="news-txt">Subscribe to our Newsletter</h3>
          <form>
            <div className="input-cont">
              <input
                className="email-label"
                placeholder="Enter email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaArrowRight className="icon" />
            </div>
          </form>
          <p className="subtext">
            By subscribing, you agree to our{" "}
            <a style={{ cursor: "pointer" }} href="/privacy-policy">
              <u>Privacy Policy</u>
            </a>{" "}
            and consent to receive updates from our company on our latest
            features and releases.
          </p>
        </div>
        <div className=" footer-col footer-col-2">
          <h2 className="">Download Now</h2>
          <div className={"flexRow2"}>
            <a href="https://hubs.li/Q02r7NTQ0">
              <img
                className={"downloadImage"}
                src={require("../assets/app_store_download_button.png")}
                alt="Download from apple store"
              />
            </a>
            <a href="https://hubs.li/Q02r7NXr0">
              <img
                className={"downloadImage"}
                src={require("../assets/google_play_download_button.png")}
                alt="Download from google play store"
              />
            </a>
          </div>
        </div>

        {/* last two */}
        <article className="last-pair-col">
          <div className=" footer-col footer-col-3">
            <Link to="/about" className={"footer-menu"}>
              About Us
            </Link>
            {/* <Link to='/contact' className={'footer-menu'}>
                            Contact Us                
                          </Link> */}
            <a href="mailto:websitesupport@grav.id" className={"footer-menu"}>
              Contact Us
            </a>
            <Link to="/foundation" className={"footer-menu"}>
              Foundation
            </Link>
            <Link to="/faqs" className={"footer-menu"}>
              FAQs
            </Link>
            {/* <Link to='/support' className={'footer-menu'}>
                            Support
                          </Link> */}
            {/* <Link to='/insights' className={'footer-menu'}>
                            Insights
                          </Link> */}
            <Link to="/press-kit" className={"footer-menu"}>
              Press Kit
            </Link>
            <div data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="67d47f552aa368cdff2366ee" data-style-height="52px" data-style-width="100%">
                <a className={'aboutUs'} href="https://www.trustpilot.com/review/grav.id" target="_blank" rel="noopener noreferrer">Trustpilot</a>
            </div>
          </div>
          <div className=" footer-col footer-col-4">
            <h5 className={"footer-footer-followUs"}>Follow us</h5>
            <div className={"footer-socialMediaColumn"}>
              <a
                className={"footer-socialMediaRow"}
                href="https://www.linkedin.com/company/gravitycommunity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={"footer-socialMediaIcon"}
                  src={LinkedinLogo}
                  alt="linkedin handle"
                />
                <h5 className={"footer-socialMediaLabel"}>LinkedIn</h5>
              </a>

              <a
                className={"footer-socialMediaRow"}
                href="https://twitter.com/gravidcommunity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={"footer-socialMediaIcon"}
                  src={TwitterLogo}
                  alt="twitter handle"
                />
                <h5 className={"footer-socialMediaLabel"}>Twitter</h5>
              </a>

              <a
                className={"footer-socialMediaRow"}
                href="https://www.youtube.com/@gravity_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={"footer-socialMediaIcon"}
                  src={YoutubeLogo}
                  alt="youtube handle"
                />
                <h5 className={"footer-socialMediaLabel"}>YouTube</h5>
              </a>
            </div>
          </div>
        </article>

        {/*for mobile screen */}

        <article className="mob-footer-menu-cont">
          <div className="mob-pair-col ">
            <div className=" mob-company-details">
              <Link to="/about" className={"footer-menu"}>
                About Us
              </Link>
              {/* <Link to='/contact' className={'footer-menu'}>
                            Contact Us                
                          </Link> */}
              <a href="mailto:websitesupport@grav.id" className={"footer-menu"}>
                Contact Us
              </a>
              <Link to="/foundation" className={"footer-menu"}>
                Foundation
              </Link>
              <Link to="/faqs" className={"footer-menu"}>
                FAQs
              </Link>
              {/* <Link to='/support' className={'footer-menu'}>
                            Support
                          </Link> */}
              {/* <Link to='/insights' className={'footer-menu'}>
                            Insights
                          </Link> */}
              <Link to="/press-kit" className={"footer-menu"}>
                Press Kit
              </Link>
            </div>
            {/*  */}
            <div className={"mob-tc-cont"}>
              <Link to="/privacy-policy" className={"footer-menu"}>
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className={"footer-menu"}>
                Terms of Service
              </Link>
              <Link to="/cookie-settings" className={"footer-menu"}>
                Cookie Settings
              </Link>
              <Link to="/security" className={"footer-menu"}>
                Security
              </Link>
              <Link to="/help-center" className={"footer-menu"}>
                Help
              </Link>
              {/* <Link to='/site' className={'footer-menu'}>
                        Sitemap
                      </Link> */}
            </div>
          </div>
          <div className="mob-socials">
            <h5 className={"footer-followUs"}>Follow us</h5>
            <div className={"footer-socialMediaColumn"}>
              <a
                className={"footer-socialMediaRow"}
                href="https://www.linkedin.com/company/gravitycommunity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={"footer-socialMediaIcon"}
                  src={LinkedinLogo}
                  alt="linkedin handle"
                />
                <h5 className={"footer-socialMediaLabel"}>LinkedIn</h5>
              </a>

              <a
                className={"footer-socialMediaRow"}
                href="https://twitter.com/gravidcommunity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={"footer-socialMediaIcon"}
                  src={TwitterLogo}
                  alt="twitter handle"
                />
                <h5 className={"footer-socialMediaLabel"}>Twitter</h5>
              </a>

              <a
                className={"footer-socialMediaRow"}
                href="https://www.youtube.com/@gravity_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={"footer-socialMediaIcon"}
                  src={YoutubeLogo}
                  alt="youtube handle"
                />
                <h5 className={"footer-socialMediaLabel"}>YouTube</h5>
              </a>
            </div>
          </div>
          <div className="">
            <span>© {currentYear} Grav.id. All rights reserved.</span>
          </div>
        </article>
        {/* mobile screen ends */}
      </section>

      {/* t&c */}
      <div className="footer-bottom">
        <span>© {currentYear} Grav.id. All rights reserved.</span>

        <div className={"tc-cont"}>
          <Link to="/privacy-policy" className={"tc-menu"}>
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className={"tc-menu"}>
            Terms of Service
          </Link>
          <Link to="/cookie-settings" className={"tc-menu"}>
            Cookie Settings
          </Link>
          <Link to='/saas-msa' className={'privacyPolicy'}>
                SAAS-MSA
          </Link>
          <Link to="/security" className={"tc-menu"}>
            Security
          </Link>
          <Link to="/help-center" className={"tc-menu"}>
            Help
          </Link>
          {/* <Link to='/site' className={'tc-menu'}>
                        Sitemap
                      </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default FooterLD;

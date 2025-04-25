import "./Main.scss";
import { FaArrowRight } from "react-icons/fa";

function Main() {
  return (
    <>
      {/* mobile */}
      <section className="mobile_landing_section">
        <div className="mobile_landing_flex_col">
          <h1 className="mobile_landing_title">
            Drive Impact <br />
            Secure Sustainability
          </h1>
          <h4 className="mobile_landing_title2">
            Tools to help you build trust, grow, and achieve long-term
            sustainability
          </h4>
          <div className="mobile_landing_flex_row">
            <a href="https://app.grav.id/">
              <button className=" funrs-btn ">
                <h5 className="">Get Started</h5>
                <div className="">
                  <FaArrowRight />
                </div>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* end mobile */}

      <section className="landing_section">
        <div className="landing_flex_col">
          <h1 className="landing_title">
            Drive Impact <br />
            Secure Sustainability
          </h1>
          <h4 className="landing_title2">
            Tools to help you build trust, grow, and achieve long-term
            sustainability
          </h4>
          <div className="">
            <a href="https://app.grav.id/">
              <button className="funrs-btn ">
                <h5 className="">Get Started</h5>

                <div className="">
                  <FaArrowRight />
                </div>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;

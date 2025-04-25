import React from "react";
import './TrustedAndSecured.scss';

function TrustedAndSecured() {
  return (
    <main className="ts_main">
      <section className="ts_section">
        <img
          className="ts_image"
          src={require("../../assets/trusted_and_secured.png")}
          alt="verified and approved"
        />

        <div className="ts_flexCol">
          <h1 className="ts_title">
            Trusted and secure infrastructure for you and your users
          </h1>
          <h5 className="ts_subtitle">
            Self Sovereign Identity allows users to hold and control their own
            sensitive data, enabling them to grant and restrict view access to
            whoever they want. This decentralized system of data control means
            no centralized data center for malicious actors to steal from.{" "}
          </h5>

          <a href="https://app.grav.id/">
            <h5 className="ts_button">Join us</h5>
          </a>
        </div>
      </section>
    </main>
  );
}

export default TrustedAndSecured;

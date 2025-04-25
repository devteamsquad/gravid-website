import React from "react";
import './EasilyCreate.scss';

function EasilyCreate() {
  return (
    <main>
      <section className="ec_section">
        <div className="ec_container">
          <div className="ec_content">
            <h1 className="ec_title">
              Easily create services and programs for your customers
            </h1>
            <h5 className="ec_subtitle">
              Grav.id’s wallet allows you to provide direct value to your users;
              creating event tickets, setting up rewards programs, and enabling
              data access all in a secure and easy to use platform.
            </h5>
            <a href="https://app.grav.id/"><button className="ec_button">Join us</button></a>
          </div>
          <img
            className="ec_image"
            src={require("../../assets/easily_create.png")}
            alt="easily-create"
          />
        </div>
      </section>
    </main>
  );
}

export default EasilyCreate;

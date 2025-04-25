import React from "react";
import "./Hero.css";
import Button from "../../shared/Button";

const Hero = () => {
  return (
    <section className="hero-section unison-cont-padding">
      <h1 className="hero-head">Drive Impact.</h1>
      <h1 className="hero-head"> Secure Sustainability.</h1>
      <p className="hero-subtext">
        Tools to help you build trust, grow your community, and achieve
        long-term sustainability.
      </p>
      <a href="https://app.grav.id" target="_blank" rel="noopener noreferrer">
        <Button
          type={"solid"}
          btnContent={"Get Started"}
          className={"hero-btn"}
        />
      </a>
    </section>
  );
};

export default Hero;

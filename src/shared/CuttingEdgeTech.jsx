import React, { useState } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import "./css/CuttingEdgeTech.css";
import { RiRocketFill } from "react-icons/ri";

const sliderData = [
  {
    id: "1",
    title: "Trust and Data Control",
    content:
      "Our trust protocol gives every member full agency over personal and sensitive information. Decide when, how, and with whom details are shared. Contribute directly to your ecosystem's trust and sustainability through information verification and data sharing. Empower your members with information-sharing consent, enhance their privacy and security, and allow everyone to connect and interact confidently in your community.",
  },
  {
    id: "2",
    title: "AI-Powered Trust Ecosystem",
    content:
      "Manage your trust ecosystem and sustainability—partner with organizations and communities you trust to help them discover valuable connections. With members' consent, your trusted sponsors can gain access to real-time, high-quality information using AI matching and drive more member benefits. Focus on creating impact and your operations while effortlessly contributing to the long-term sustainability of your trust ecosystem.",
  },
];
const CuttingEdgeTech = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLeftSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const handleRightSlide = () => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="cet-section">
      <h2 className="cet-heading">Cutting Edge Tech</h2>
      {/* Slider */}
      <article className="slider-parent">
        <div className="cont">
          <RxCaretLeft
            onClick={handleLeftSlide}
            className={`caret ${currentSlide === 0 ? "width-zero" : ""}`}
          />
          <div className="slider-holder">
            <div
              className="slider-cont"
              //   style={{ transform: `translateX(-${0}%)` }}
              style={{
                transform: `translateX(-${
                  (currentSlide / sliderData.length) * 100
                }%)`,
                width: `${sliderData.length * 100}%`,
              }}
            >
              {sliderData.map((item) => (
                <div key={item.id} className="slider">
                  <h4 className="">{item.title}</h4>
                  <p className="">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
          <RxCaretRight
            onClick={handleRightSlide}
            className={`caret  ${
              currentSlide === sliderData.length - 1 ? "width-zero" : ""
            }`}
          />
        </div>
        <div className="indicator-wrap">
          <div className="scroll-indicator">
            <div
              style={{
                width: `${((currentSlide + 1) / sliderData.length) * 100}%`,
                transition: ` all ease-in-out 1000ms`,
              }}
              className="scroll"
            ></div>
            <div
              className="circle"
              style={{
                left: `calc(${
                  ((currentSlide + 1) / sliderData.length) * 100
                }% - 5px)`,
              }}
            ></div>
            <RiRocketFill
              className="rocket"
              style={{
                left: `${((currentSlide + 1) / sliderData.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </article>
    </section>
  );
};

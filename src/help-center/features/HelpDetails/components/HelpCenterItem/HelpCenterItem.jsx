import React from "react";
import "./HelpCenterItem.css";

const HelpCenterItem = ({ data }) => {
  const { title, author, publishAt, banner, questions } = data;

  return (
    <div className="help-center-container">
      <div className="header">
        <h1 className="title">{title}</h1>
        <p className="author">By {author}</p>
        <p className="publish-date">Published on {publishAt}</p>
      </div>
      <div className="banner">
        <img src={banner} alt="Signup Banner" className="banner-image" />
      </div>
      <div className="questions">
        {questions.map((question, index) => (
          <div key={index} className="question-card">
            <h2 className="question-title">{question.title}</h2>
            <p className="question-description">{question.description}</p>
            <div className="steps">
              {question.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="step">
                  {step.picture && (
                    <img
                      src={step.picture}
                      alt={step.title}
                      className="step-image"
                    />
                  )}
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                    {step.subSteps && (
                      <div className="substeps">
                        {step.subSteps.map((subStep, subStepIndex) => (
                          <div key={subStepIndex} className="substep">
                            <h4 className="substep-title">{subStep.title}</h4>
                            <p className="substep-description">
                              {subStep.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenterItem;

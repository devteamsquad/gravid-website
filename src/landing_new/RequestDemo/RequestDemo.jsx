import React, { useRef, useState } from "react";
import "./RequestDemo.css";
import Button from "../../shared/Button";
import { submitEmailJs } from "../../utils/submitEmailJs";

const RequestDemo = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorNotification, setErrorNotification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Form submitted:", formData);
    setIsLoading(true);
    setErrorNotification(false);
    // Here, you would typically send the data to a server

    Object.keys(formData).forEach((field) => {
      if (!formData[field]) return;
    });

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
    };

    try {
      const result = await submitEmailJs(
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams
      );

      if (result.status === "success") {
        setSuccess(true);
      } else {
        setErrorNotification(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorNotification(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="request-container">
      <div id="request-demo" className="req-touch_content">
        <h1 className="">Request Demo</h1>
        <p className="req-subtext">
          Any question or remarks? Just write us a message!
        </p>

        {success ? (
          <section className="success-parent">
            <p className="">
              Hi {formData.firstName || ""}, Thank you so much for requesting a
              demo. Our team is eager to provide a personalized demo for your
              needs.
            </p>
            <p className="">
              One last step: please pick a time that works for you:
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://calendly.com/rominsunny?utm_campaign=Product%20Launch%2003.2024&utm_source=email&utm_medium=Calendly&utm_term=Romin%27s%20Availability&utm_content=Email%20-%20Request%20Demo%20Form%20Submission%203-24"
            >
              <button>Available Slot 1</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://calendly.com/suryajs?utm_campaign=Product%20Launch%2003.2024&utm_source=email&utm_medium=Calendly&utm_term=Surya%27s%20Availability&utm_content=Email%20-%20Request%20Demo%20Form%20Submission%203-24"
            >
              <button>Available Slot 2</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://calendly.com/boladevictory?utm_campaign=Product%20Launch%2003.2024&utm_source=email&utm_medium=Calendly&utm_term=Bolade%27s%20Availability&utm_content=Email%20-%20Request%20Demo%20Form%20Submission%203-24"
            >
              <button>Available Slot 3</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://calendly.com/ninhtran/demo?utm_campaign=Product%20Launch%2003.2024&utm_source=email&utm_medium=Calendly&utm_term=Ninh%27s%20Availability&utm_content=Email%20-%20Request%20Demo%20Form%20Submission%203-24&month=2024-10"
            >
              <button>Available Slot 4</button>
            </a>
          </section>
        ) : (
          <form
            className={`req-touch_form ${isLoading ? "loader" : ""}`}
            ref={form}
            onSubmit={handleSubmit}
          >
            <div className="req-form-row">
              <div className="req-form-group">
                <label className="req-touch_label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="req-touch_input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="req-form-group">
                <label className="req-touch_label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="req-touch_input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="req-form-group">
              <label className="req-touch_label" htmlFor="email">
                Email
              </label>
              <input
                className="req-touch_input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="req-form-group">
              <label className="req-touch_label" htmlFor="message">
                Message
              </label>
              <textarea
                className="req-touch_textarea"
                id="message"
                name="message"
                rows={1}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
              ></textarea>
            </div>
            {errorNotification && (
              <div style={{ alignItems: "center" }} className="flex-col">
                <p
                  style={{
                    color: "#f56565",
                    fontStyle: "italic",
                    // marginBottom: "10px",
                  }}
                >
                  An error occured, please try again
                </p>
              </div>
            )}
            <div className="req-button-container">
              <Button
                type="solid"
                btnContent={"Request Demo"}
                className="req-submit-btn"
              >
                Send Message
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RequestDemo;

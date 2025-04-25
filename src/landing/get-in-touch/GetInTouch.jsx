import React, { useState } from "react";
import "./GetInTouch.scss";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);
    // Here, you would typically send the data to a server
  };

  return (
    <div className="get-in-touch-container">
      <div id="request-demo" className="touch_content">
        <h1 className="">Request Demo</h1>
        <p className="">Any question or remarks? Just write us a message!</p>

        <form className="touch_form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="touch_label" htmlFor="firstName">
                First Name
              </label>
              <input
                className="touch_input"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="touch_label" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="touch_input"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="touch_label" htmlFor="email">
              Email
            </label>
            <input
              className="touch_input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="touch_label" htmlFor="message">
              Message
            </label>
            <textarea
              className="touch_textarea"
              id="message"
              name="message"
              rows={1}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <div className="button-container">
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;

import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import contactsUs from "../../assets/cont.png";
import "../css/Contact.css";
// npm i @emailjs/browser

const Contact = () => {
  const form = useRef(null);
  const location = useLocation();
  const { img = "", name = "" } = location.state || {};

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_i1gv4md",
          "template_uxyzjjp",
          form.current,
          "PvX1cXHT4NcmMUTe0"
        )
        .then(
          (result) => {
            //console.log(result.text);
            //console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactsUs})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form" ref={form} onSubmit={sendEmail}>
          {img && (
            <img src={img} className="w-32 h-32 object-cover" alt="Contact" />
          )}
          <label htmlFor="name">Full Name</label>
          <input
            name="user_name"
            placeholder="Enter full name..."
            defaultValue={name}
            type="text"
          />
          <label htmlFor="email">Email</label>
          <input name="user_email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows={6}
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

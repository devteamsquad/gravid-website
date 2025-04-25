import React from "react";
import "../css/CookiesPolicy.css";

const CookiesPolicy = () => {
  return (
    <div
      className="cookies-cont"
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      <main
        style={{
          maxWidth: "800px",
          margin: "0px auto",
          backgroundColor: "black",
          color: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <header
          style={{
            color: "white",
            padding: "20px",
            textAlign: "left",
          }}
        >
          <h1>Cookies Policy</h1>
        </header>
        <p>
          <strong>Last updated:</strong> January 23, 2025
        </p>
        <p>
          This Cookies Policy explains what Cookies are and how We use them. You
          should read this policy so You can understand what type of cookies We
          use, or the information We collect using Cookies and how that
          information is used.
        </p>
        <h2>Interpretation and Definitions</h2>
        <h4>Interpretation</h4>
        <p>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions.
        </p>
        <h4>Definitions</h4>
        <p>For this Cookies Policy:</p>
        <ul>
          <li>
            <strong>Company:</strong> Grav.id, 1043 Garland Ave, Unit C #764,
            San Jose, CA 95126-3159.
          </li>
          <li>
            <strong>Cookies:</strong> Small files that are placed on Your device
            by a website containing details of your browsing history on that
            website among its uses.
          </li>
          <li>
            <strong>Website:</strong> Grav.id, accessible from{" "}
            <a href="https://grav.id" target="_blank" rel="noopener noreferrer">
              https://grav.id
            </a>
            .
          </li>
          <li>
            <strong>You:</strong> The individual accessing the Website.
          </li>
        </ul>
        <h2>The Use of Cookies</h2>
        <h4>Type of Cookies We Use</h4>
        <p>
          We use both session and persistent Cookies for the purposes set out
          below:
        </p>
        <ul>
          <li>
            <p>
              <strong>Necessary / Essential Cookies:</strong>
            </p>
            <p>
              Purpose: These Cookies are essential to provide You with services
              available through the Website.
            </p>
          </li>
          <li>
            <p>
              <strong>Functionality Cookies:</strong>
            </p>
            <p>
              Purpose: These Cookies allow us to remember choices You make, such
              as login details or language preferences.
            </p>
          </li>
        </ul>
        <h4>Your Choices Regarding Cookies</h4>
        <p>
          If You prefer to avoid the use of Cookies, disable them in your
          browser settings and delete Cookies associated with this website.
        </p>
        <p>For browser-specific guides, refer to the following links:</p>
        <ul>
          <li>
            <a
              href="https://support.google.com/accounts/answer/32050"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="http://support.microsoft.com/kb/278835"
              target="_blank"
              rel="noopener noreferrer"
            >
              Internet Explorer
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </a>
          </li>
        </ul>
        <h4>Contact Us</h4>
        <p>If you have any questions, don't hesitate to get in touch with us:</p>
        <ul>
          <li>
            By email:{" "}
            <a
              href="mailto:cookies@grav.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              cookies@grav.id
            </a>
          </li>
          <li>
            By mail: 1043 Garland Ave, Unit C #764, San Jose, CA 95126-3159
          </li>
        </ul>
      </main>
      <footer
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "0.9em",
          color: "#666",
        }}
      >
        <p>&copy; 2025 Grav.id. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CookiesPolicy;

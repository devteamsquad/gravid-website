import React, { useState, useRef } from "react";
import countryData from "./constants";
import { submitEmailJs } from "../utils/submitEmailJs";
import "../shared/css/RequestDemo.css";

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  onBlur,
  onFocus,
  required = true,
}) => (
  <div className="form-group">
    <label>
      {label}
      {required && <span style={{ color: "red" }}>*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      className={`form-input ${error ? "error" : ""}`}
      required={required}
    />
    {error && <p className="error-message">{error}</p>}
  </div>
);

const PhoneInput = ({
  country,
  setCountry,
  phone,
  setPhone,
  error,
  onBlur,
  onFocus,
}) => {
  return (
    <div className="form-group">
      <label>
        Phone number <span style={{ color: "red" }}>*</span>
      </label>
      <div className="phone-input-container">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className={`country-select `}
        >
          {countryData.map((c) => (
            <option key={c.code} value={c.phoneCode}>
              {c.name}
            </option>
          ))}
        </select>
        <div className={`phone-code-cont  ${error ? "error" : ""}`}>
          <div className="phone-code">{country}</div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={onBlur}
            onFocus={onFocus}
            className={`phone-input`}
          />
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

const RequestDemoForm = ({ textAlign }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "+1",
    phone: "",
    jobTitle: "",
    companyWebsite: "",
    employeeCount: "",
  });
  const form = useRef();

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorNotification, setErrorNotification] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateField = (field) => {
    let newErrors = { ...errors };
    if (
      !formData[field] &&
      field !== "companyWebsite" &&
      field !== "employeeCount" &&
      field !== "lastName"
    ) {
      newErrors[field] = "Please complete this required field.";
    } else {
      delete newErrors[field];
    }
    setErrors(newErrors);
  };

  const handleBlur = (field) => {
    validateField(field);
  };

  const handleFocus = (field) => {
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorNotification(false);
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (
        !formData[field] &&
        field !== "companyWebsite" &&
        field !== "employeeCount" &&
        field !== "lastName"
      ) {
        newErrors[field] = "Please complete this required field.";
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: `${formData.country}${formData.phone}`,
        jobTitle: formData.jobTitle,
        companyWebsite: formData.companyWebsite,
        employeeCount: formData.employeeCount,
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
    } else {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="column">
        <div>
          <h2>Request Demo</h2>
          <p>
            Fill out the following form and schedule an appointment to see what
            Grav.id can do for you and your business.
          </p>
        </div>
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
            className={`  ${isLoading ? "loader" : ""}`}
            ref={form}
            onSubmit={handleSubmit}
          >
            <div className="group-input">
              <InputField
                label="First name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                error={errors.firstName}
                onBlur={() => handleBlur("firstName")}
                onFocus={() => handleFocus("firstName")}
              />
              <InputField
                label="Last name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                error={errors.lastName}
                onBlur={() => handleBlur("lastName")}
                onFocus={() => handleFocus("lastName")}
                required={false}
              />
            </div>
            <div className="group-input">
              <InputField
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                error={errors.email}
                onBlur={() => handleBlur("email")}
                onFocus={() => handleFocus("email")}
              />
              <PhoneInput
                country={formData.country}
                setCountry={(value) => handleInputChange("country", value)}
                phone={formData.phone}
                setPhone={(value) => handleInputChange("phone", value)}
                error={errors.phone}
                onBlur={() => handleBlur("phone")}
                onFocus={() => handleFocus("phone")}
              />
            </div>
            <div className="group-input">
              <InputField
                label="Job title"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                error={errors.jobTitle}
                onBlur={() => handleBlur("jobTitle")}
                onFocus={() => handleFocus("jobTitle")}
              />
              <InputField
                label="Company Website URL"
                value={formData.companyWebsite}
                onChange={(e) =>
                  handleInputChange("companyWebsite", e.target.value)
                }
                error={errors.companyWebsite}
                onBlur={() => handleBlur("companyWebsite")}
                onFocus={() => handleFocus("companyWebsite")}
                required={false}
              />
            </div>
            <div className="form-group">
              <label>Employee Count</label>
              <select
                style={{
                  border: "1px solid",
                  borderRadius: ".25rem",
                  color: "white",
                }}
                required={false}
                value={formData.employeeCount}
                onChange={(e) =>
                  handleInputChange("employeeCount", e.target.value)
                }
                onBlur={() => handleBlur("employeeCount")}
                onFocus={() => handleFocus("employeeCount")}
                className={`form-select `}
              >
                <option value="">Please Select</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501+">501+</option>
              </select>
              {errors.employeeCount && (
                <p className="error-message">{errors.employeeCount}</p>
              )}
            </div>
            <div className="btn-cont">
              <p className="terms">
                By clicking Request Demo, you agree to Grav.id's Terms of Use
                and Privacy Policy.
              </p>
              {errorNotification && (
                <p
                  style={{
                    fontSize: "20px",
                    fontStyle: "italic",
                    marginBottom: "10px",
                  }}
                  className="error-message"
                >
                  An error occured, please try again
                </p>
              )}
              <button type="submit">Request Demo</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default RequestDemoForm;

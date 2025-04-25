import React, { useState, useRef } from "react";
import { submitEmailJs } from "../../utils/submitEmailJs";
import { BiRightArrowAlt } from "react-icons/bi";
import "./RequestDemoSection.css";

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
  <div style={{ color: "white" }} className="form-group-home">
    <label style={{ color: "white" }}>
      {label}
      {required && <span style={{ color: "red" }}>*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      className={`form-input-home ${error ? "error" : ""}`}
      required={required}
    />
    {error && <p className="error-message">{error}</p>}
  </div>
);

const PhoneInput = ({ phone, setPhone, error, onBlur, onFocus }) => {
  return (
    <div className="form-group-home">
      <label style={{ color: "white" }}>
        Phone number <span style={{ color: "red" }}>*</span>
      </label>
      <div className="phone-input-container">
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={onBlur}
          onFocus={onFocus}
          className={`phone-input-home ${error ? "error" : ""}`}
        />
      </div>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

const RequestDemoSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
        phone: `${formData.phone}`,
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
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="request-section"
    >
      <div className="">
        <>
          <div className="column">
            <div className="form-head-home">
              <h2 className="home-form-head">Request Demo</h2>
              <p style={{ color: "white" }}>
                Fill out the following form and schedule an appointment to see
                what Grav.id can do for you and your business.
              </p>
            </div>
            {success ? (
              <section className="success-parent">
                <p className="">
                  Hi {formData.firstName || ""}, Thank you so much for
                  requesting a demo. Our team is eager to provide a personalized
                  demo for your needs.
                </p>
                <p className="">
                  One last step, please pick a time that works for you:
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
                className={`request-form-cont  ${isLoading ? "loader" : ""}`}
                ref={form}
                onSubmit={handleSubmit}
              >
                <div className="group-input-home">
                  <InputField
                    label="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    error={errors.firstName}
                    onBlur={() => handleBlur("firstName")}
                    onFocus={() => handleFocus("firstName")}
                  />
                  <InputField
                    label="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    error={errors.lastName}
                    onBlur={() => handleBlur("lastName")}
                    onFocus={() => handleFocus("lastName")}
                    required={false}
                  />
                </div>
                <div className="group-input-home">
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
                <div className="group-input-home">
                  <InputField
                    label="Job title"
                    value={formData.jobTitle}
                    onChange={(e) =>
                      handleInputChange("jobTitle", e.target.value)
                    }
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
                <div className="form-group-home">
                  <label className="employee-home">Employee Count</label>
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
                    className={`form-select-home `}
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
                  {errorNotification && (
                    <p
                      style={{
                        fontSize: "20px",
                        fontStyle: "italic",
                        marginBottom: "10px",
                      }}
                      className="error-message"
                    >
                      An error occurred, please try again
                    </p>
                  )}
                  <button type="submit" className="request-btn-home">
                    <p className="">Request Demo</p>{" "}
                    <BiRightArrowAlt style={{ fontSize: "1.6rem" }} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </>
      </div>
    </section>
  );
};

export default RequestDemoSection;

import emailjs from "@emailjs/browser";

export const submitEmailJs = async (templateId, templateParams) => {
  try {
    const response = await emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      templateId,
      templateParams,
      process.env.REACT_APP_PUBLIC_API_KEY
    );

    if (response.status === 200) {
      return {
        status: "success",
        message: "Email sent successfully",
        data: response,
      };
    }

    throw new Error("Failed to send email");
  } catch (error) {
    return {
      status: "error",
      message: error.message || "Failed to send email",
      error,
    };
  }
};

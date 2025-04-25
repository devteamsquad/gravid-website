import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchResults.css";
import { submitEmailJs } from "../../../../../utils/submitEmailJs";

// Fonction pour mettre en surbrillance le texte de recherche
const highlightText = (text, query) => {
  if (typeof text !== "string") return null;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} className="highlight">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const SearchResults = ({ results, searchQuery }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorNotification, setErrorNotification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorNotification(false);

    const templateParams = {
      question: searchQuery,
    };

    try {
      const result = await submitEmailJs(
        process.env.REACT_APP_HELP_CENTER_TEMPLATE_ID,
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

  return searchQuery.trim().length >= 2 ? (
    <div className="search-results">
      {results.length === 0 ? (
        success ? (
          <div>
            <p style={{ color: "white" }} className="">
              We have received your question, and we will add it to this list
              shortly. Thank you{" "}
            </p>
          </div>
        ) : (
          <>
            <div className={`no-results ${isLoading && "loading"}`}>
              <p>
                No results were found. You can send this question via, and we
                would attend to it.{" "}
                <span
                  className="contact-support-link"
                  onClick={handleSubmit}
                  style={{
                    cursor: "pointer",
                    color: "#00bfff",
                    textDecoration: "underline",
                  }}
                >
                  Send mail now
                </span>
                .
              </p>
            </div>
            {errorNotification && (
              <p
                style={{
                  fontSize: "13px",
                  fontStyle: "italic",
                  marginBottom: "5px",
                }}
                className="error-message"
              >
                An error occurred; please try again
              </p>
            )}
          </>
        )
      ) : (
        results.map((result) => (
          <div key={result.id} className="result-item">
            <Link to={`/help-center/${result.id}`} className="result-link">
              <>
                <p className="result-title">({result.title})</p>

                {result.phrases &&
                  result.phrases.map((phraseObj, phraseIndex) => (
                    <p className="result-excerpt" key={phraseIndex}>
                      {highlightText(phraseObj.phrase || "", searchQuery)}
                    </p>
                  ))}
              </>
            </Link>
          </div>
        ))
      )}
    </div>
  ) : (
    <></>
  );
};

export default SearchResults;

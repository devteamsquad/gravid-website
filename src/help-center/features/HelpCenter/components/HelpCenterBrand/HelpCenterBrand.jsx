import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HelpCenterBrand.css";
import SearchResults from "../SearchResults/SearchResults";
import { searchHelpCenter } from "../../services/HelpService";

const HelpCenterBrand = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Fonction de recherche en temps réel
  const handleSearch = (query) => {
    if (query.trim().length < 2) {
      setSearchResults([]); // Réinitialise les résultats si moins de 2 caractères
    } else {
      const results = searchHelpCenter(query); // Utilise la fonction de recherche
      setSearchResults(results);
    }
  };

  // Gestion de la recherche en fonction de la saisie de l'utilisateur
  const handleKeyUp = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value); // Lance la recherche en direct
  };

  return (
    <div className="help-center-brand">
      <h1>Hello, how can we help you today?</h1>

      {/* Formulaire de recherche */}
      <form onSubmit={(e) => e.preventDefault()} className="search-container">
        <input
          type="text"
          placeholder="Search for help..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={handleKeyUp}
          className="text-xl"
        />
      </form>

      {/* Résultats de recherche */}
      <SearchResults results={searchResults} searchQuery={searchQuery} />

      {/* Actions populaires */}
      {!searchQuery.length < 2 && (
        <div className="popular-actions">
          <span>Popular Actions</span>
          <Link to={"/help-center/1"} className="popular-actions__item">
            Sign up,
          </Link>
          <Link to={"/help-center/4"} className="popular-actions__item">
            Create a business account,
          </Link>
          <Link to={"/help-center/2"} className="popular-actions__item">
            Create a community post
          </Link>
        </div>
      )}
    </div>
  );
};

export default HelpCenterBrand;

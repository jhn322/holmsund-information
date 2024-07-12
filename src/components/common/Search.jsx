import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaGithub, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import styles from "../../styles/common/Search.module.css";

const SearchComponent = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const searchContainerRef = useRef(null);
  const inputRef = useRef(null);

  const pages = [
    { path: "/", title: "Hem" },
    { path: "/utforska", title: "Utforska" },
    { path: "/aktiviteter", title: "Aktiviteter" },
    { path: "/galleri", title: "Galleri" },
    { path: "/väder", title: "Väder" },
    { path: "/kartor", title: "Kartor" },
    { path: "/om-oss", title: "Om Oss" },
    { path: "/cookiepolicy", title: "Cookie Policy" },
    { path: "/användarvillkor", title: "Användarvillkor" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = pages.filter((page) =>
      page.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
    setShowResults(true);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setQuery("");
    setShowResults(false);
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target) &&
        !e.target.closest(`.${styles.menuWrapper}`)
      ) {
        setShowResults(false);
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleInputFocus = (e) => {
    e.stopPropagation();
    if (query.trim() !== "") {
      setShowResults(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleSearch(e);
  };

  const handleResultClick = (e, path) => {
    e.stopPropagation();
    handleNavigate(path);
  };

  return (
    <div
      className={`${styles.menuWrapper} ${showResults ? styles.menuOpen : ""}`}
      ref={searchContainerRef}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.socialIcons}>
        <a
          href="https://github.com/jhn322"
          target="_blank"
          rel="noopener noreferrer"
          alt="GitHub website"
        >
          <FaGithub className={styles.github} />
        </a>
        <a
          href="https://x.com/search?q=%23holmsund&src=typeahead_click"
          target="_blank"
          rel="noopener noreferrer"
          alt="Twitter website"
        >
          <FaXTwitter className={styles.twitterX} />
        </a>
        <a
          href="https://www.instagram.com/explore/locations/240089071/holmsund-vasterbottens-lan-sweden/"
          target="_blank"
          rel="noopener noreferrer"
          alt="Instagram website"
        >
          <FaInstagram className={styles.instagram} />
        </a>
        <a
          href="https://www.facebook.com/groups/415551751837063/?locale=sv_SE"
          target="_blank"
          rel="noopener noreferrer"
          alt="Facebook website"
        >
          <FaFacebook className={styles.facebook} />
        </a>
      </div>
      <div
        className={styles.closeCircle}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <RxCross2 className={`${styles.closeIcon} ${styles.closeIconSize}`} />
      </div>
      <div className={styles.openMenu}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Sök..."
            className={styles.searchInput}
            ref={inputRef}
            onFocus={handleInputFocus}
          />
          <button type="submit" className={styles.searchButton}>
            Sök
          </button>
        </form>
        {showResults && (
          <div className={styles.resultsContainer}>
            <ul className={styles.searchResults}>
              {query.trim() !== "" ? (
                results.length > 0 ? (
                  results.map((page, index) => (
                    <li
                      key={index}
                      onClick={(e) => handleResultClick(e, page.path)}
                    >
                      {page.title}
                    </li>
                  ))
                ) : (
                  <li>Inga resultat</li>
                )
              ) : (
                <li>Skriv en sökterm</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;

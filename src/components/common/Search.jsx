import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RxMagnifyingGlass, RxCross2 } from "react-icons/rx";
import { FaGithub, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import debounce from "lodash/debounce";
import styles from "../../styles/common/Search.module.css";
import pages from "../data/Pages";

const Search = ({ onClose }) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = useCallback(
    debounce((searchQuery) => {
      const lowerCaseQuery = searchQuery.toLowerCase();

      const startsWithResults = pages.filter((page) =>
        page.title.toLowerCase().startsWith(lowerCaseQuery)
      );

      const containsResults = pages.filter(
        (page) =>
          page.title.toLowerCase().includes(lowerCaseQuery) &&
          !page.title.toLowerCase().startsWith(lowerCaseQuery)
      );

      const filteredResults = [...startsWithResults, ...containsResults];

      setResults(filteredResults);
      setShowResults(searchQuery.trim() !== "");
    }, 300),
    []
  );

  const handleResultClick = (e, path) => {
    e.preventDefault();
    handleNavigate(path);
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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputFocus = (e) => {
    if (query.trim() !== "") {
      setShowResults(true);
    }
  };

  return (
    <div
      ref={searchContainerRef}
      className={`${styles.menuWrapper} ${showResults ? styles.menuOpen : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.container}>
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
        <div className={styles.searchForm}>
          <RxMagnifyingGlass className={styles.searchIcon} />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              handleSearch(e.target.value);
            }}
            placeholder="Sök denna sida..."
            className={styles.searchInput}
            ref={inputRef}
            onFocus={handleInputFocus}
            aria-label="Search this site"
          />
          {query && (
            <RxCross2
              className={styles.clearIcon}
              onClick={() => {
                setQuery("");
                setShowResults(false);
              }}
            />
          )}
        </div>
        {showResults && (
          <div className={styles.resultsContainer}>
            <ul className={styles.searchResults} role="listbox">
              {results.length > 0 ? (
                results.map((page, index) => (
                  <li
                    key={index}
                    onClick={(e) => handleResultClick(e, page.path)}
                    role="option"
                  >
                    <div>{page.title}</div>
                    <div className={styles.categoryTitle}>
                      {page.categoryTitle}
                    </div>
                  </li>
                ))
              ) : (
                <li>Inga resultat hittades</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

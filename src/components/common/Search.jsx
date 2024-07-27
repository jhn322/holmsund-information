import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "lodash/debounce";
import Fuse from "fuse.js"; // Fuse.js for fuzzy search
import { RxMagnifyingGlass, RxCross2 } from "react-icons/rx";
import {
  FaGithub,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";
import styles from "../../styles/common/Search.module.css";
import searchPages from "../data/SearchPages";

const Search = ({ onClose }) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const placeholderRef = useRef(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearchClosing, setIsSearchClosing] = useState(false);

  // Fuse.js search properties
  const fuseOptions = {
    keys: ["title", "categoryTitle", "path"],
    includeScore: true,
    threshold: 0.4,
  };
  const fuse = new Fuse(searchPages, fuseOptions);

  // Debounced search function
  const handleSearch = useCallback(
    debounce((searchQuery) => {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const searchResults = fuse.search(lowerCaseQuery);

      const filteredResults = searchResults.map((result) => result.item);

      setResults(filteredResults);
      setShowResults(searchQuery.trim() !== "");
    }, 300),
    []
  );

  const handleResultClick = (e, path) => {
    e.preventDefault();
    handleNavigate(path);
  };

  // Navigate to a path and reset search state
  const handleNavigate = (path) => {
    navigate(path);
    setQuery("");
    setShowResults(false);
    handleClose();
  };

  const handleClose = () => {
    setIsSearchClosing(true);
    setTimeout(() => {
      setIsSearchClosing(false);
      onClose();
    }, 150);
  };

  // Handle click outside of the search container to close search
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target) &&
        !e.target.closest(`.${styles.menuWrapper}`)
      ) {
        setShowResults(false);
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Focus on search input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Animate placeholder text on component mount
  useEffect(() => {
    if (placeholderRef.current) {
      placeholderRef.current.innerHTML = ""; // Clear existing content

      const words = ["Sök", "denna", "sida"];
      const dots = "...";
      let delay = 0;

      const animateText = (text, isWord = true) => {
        const span = document.createElement("span");
        span.textContent = isWord ? ` ${text}` : text;
        span.style.opacity = "0";
        span.style.transform = "translateY(10px)";
        span.style.display = "inline-block";
        span.style.transition = "opacity 0.5s, transform 0.5s";
        span.style.marginRight = "0.5rem";

        placeholderRef.current.appendChild(span);

        setTimeout(() => {
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
        }, delay);

        delay += 200;
      };

      // Animate each word and dots on load
      words.forEach((word) => animateText(word));
      dots.split("").forEach((dot) => animateText(dot, false));
    }
  }, []);

  const handleInputFocus = () => {
    if (query.trim() !== "") {
      setShowResults(true); // Show results if query is not empty
    }

    document.body.style.overflow = "hidden"; // Prevent body scroll

    // Fix for iOS devices
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.height = "120vh";
    }
  };

  // Highlight each text character in search results
  const highlightMatch = (text, query) => {
    if (!query) return text;

    let startIndex = text.toLowerCase().indexOf(query.toLowerCase());
    if (startIndex === -1) return text;

    const endIndex = startIndex + query.length;
    return (
      <>
        {text.substring(0, startIndex)}
        <span
          style={{ margin: "0", padding: "0" }}
          className={styles.highlight}
        >
          {text.substring(startIndex, endIndex)}
        </span>
        {text.substring(endIndex)}
      </>
    );
  };

  // Used for varied suggestions
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const getSuggestions = (query) => {
    const suggestionFuse = new Fuse(searchPages, {
      keys: ["title"],
      includeScore: true,
      threshold: 0.6,
    });

    let suggestions = suggestionFuse.search(query).slice(0, 3);

    if (suggestions.length === 0) {
      const shuffledPages = shuffleArray([...searchPages]);
      return shuffledPages.slice(0, 3);
    }

    return suggestions.map((result) => result.item);
  };

  return (
    <section
      ref={searchContainerRef}
      className={`${styles.menuWrapper} ${showResults ? styles.menuOpen : ""} ${
        isSearchClosing ? styles.menuClosing : ""
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <header className={styles.container}>
        <nav className={styles.socialIcons} aria-label="Social media links">
          <a
            href="https://github.com/jhn322"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub website"
          >
            <FaGithub className={styles.github} />
          </a>
          <a
            href="https://x.com/search?q=%23holmsund&src=typeahead_click"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter website"
          >
            <FaXTwitter className={styles.twitterX} />
          </a>
          <a
            href="https://www.instagram.com/explore/locations/240089071/holmsund-vasterbottens-lan-sweden/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram website"
          >
            <FaInstagram className={styles.instagram} />
          </a>
          <a
            href="https://www.facebook.com/groups/415551751837063/?locale=sv_SE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook website"
          >
            <FaFacebook className={styles.facebook} />
          </a>
          <a
            href="https://www.tiktok.com/discover/Holmsund"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok className={styles.tiktok} />
          </a>
        </nav>
      </header>
      <div
        className={styles.closeCircle}
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
        role="button"
        aria-label="Close search"
        tabIndex={0}
      >
        <RxCross2 className={`${styles.closeIcon} ${styles.closeIconSize}`} />
      </div>
      <main className={styles.openMenu}>
        <form className={styles.searchForm} role="search">
          <RxMagnifyingGlass className={styles.searchIcon} />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              handleSearch(e.target.value);
            }}
            placeholder=""
            className={styles.searchInput}
            ref={inputRef}
            onFocus={handleInputFocus}
            aria-label="Search this site"
          />
          <div ref={placeholderRef} className={styles.animatedPlaceholder} />
          {query && (
            <RxCross2
              className={styles.clearIcon}
              onClick={() => {
                setQuery("");
                setShowResults(false);
              }}
              role="button"
              aria-label="Clear search"
              tabIndex={0}
            />
          )}
        </form>
        {showResults && (
          <div className={styles.resultsContainer}>
            <ul
              className={styles.searchResults}
              role="listbox"
              aria-live="polite"
            >
              {results.length > 0 ? (
                results.map((page, index) => (
                  <li
                    key={index}
                    onClick={(e) => handleResultClick(e, page.path)}
                    role="option"
                    className={styles.suggestionItem}
                    tabIndex={0}
                  >
                    <div>{highlightMatch(page.title, query)}</div>
                    <div className={styles.categoryTitle}>
                      {page.categoryTitle}
                    </div>
                  </li>
                ))
              ) : (
                <li className={styles.noResults}>
                  {query.trim() !== "" && (
                    <section>
                      <div className={styles.noMatch}>
                        <p>Inga resultat hittades 😞</p>
                        <div className={styles.maybe}>Menade du:</div>
                      </div>
                      <ul className={styles.suggestionList}>
                        {getSuggestions(query).map((page) => (
                          <li
                            key={page.path}
                            onClick={(e) => handleResultClick(e, page.path)}
                            className={styles.suggestionItem}
                            tabIndex={0}
                          >
                            <div>{highlightMatch(page.title, query)}</div>
                            <div className={styles.categoryTitle}>
                              {page.categoryTitle}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </li>
              )}
            </ul>
          </div>
        )}
      </main>
    </section>
  );
};

export default Search;

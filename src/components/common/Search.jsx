import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RxMagnifyingGlass, RxCross2 } from "react-icons/rx";
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
    { path: "/", title: "Hem", categoryTitle: "Home" },
    { path: "/utforska", title: "Utforska", categoryTitle: "Explore" },
    { path: "/utforska-1", title: "Utforska 1", categoryTitle: "Explore" },
    { path: "/utforska-2", title: "Utforska 2", categoryTitle: "Explore" },
    { path: "/utforska-3", title: "Utforska 3", categoryTitle: "Explore" },
    { path: "/utforska-4", title: "Utforska 4", categoryTitle: "Explore" },
    { path: "/utforska-5", title: "Utforska 5", categoryTitle: "Explore" },
    { path: "/utforska-6", title: "Utforska 6", categoryTitle: "Explore" },
    { path: "/utforska-7", title: "Utforska 7", categoryTitle: "Explore" },
    { path: "/utforska-8", title: "Utforska 8", categoryTitle: "Explore" },
    { path: "/aktiviteter", title: "Aktiviteter", categoryTitle: "Activities" },
    {
      path: "/aktiviteter-1",
      title: "Aktiviteter 1",
      categoryTitle: "Activities",
    },
    {
      path: "/aktiviteter-2",
      title: "Aktiviteter 2",
      categoryTitle: "Activities",
    },
    {
      path: "/aktiviteter-3",
      title: "Aktiviteter 3",
      categoryTitle: "Activities",
    },
    {
      path: "/aktiviteter-4",
      title: "Aktiviteter 4",
      categoryTitle: "Activities",
    },
    { path: "/galleri", title: "Galleri", categoryTitle: "Gallery" },
    { path: "/galleri-1", title: "Galleri 1", categoryTitle: "Gallery" },
    { path: "/galleri-2", title: "Galleri 2", categoryTitle: "Gallery" },
    { path: "/galleri-3", title: "Galleri 3", categoryTitle: "Gallery" },
    { path: "/galleri-4", title: "Galleri 4", categoryTitle: "Gallery" },
    { path: "/väder", title: "Väder", categoryTitle: "Weather" },
    { path: "/kartor", title: "Kartor", categoryTitle: "Maps" },
    { path: "/om-oss", title: "Om Oss", categoryTitle: "About Us" },
    {
      path: "/cookiepolicy",
      title: "Cookie Policy",
      categoryTitle: "Policies",
    },
    {
      path: "/användarvillkor",
      title: "Användarvillkor",
      categoryTitle: "Policies",
    },
  ];

  const handleSearch = (searchQuery) => {
    const filteredResults = pages.filter((page) =>
      page.title.toLowerCase().includes(searchQuery.toLowerCase())
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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputFocus = (e) => {
    e.stopPropagation();
    if (query.trim() !== "") {
      setShowResults(true);
    }
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
            placeholder="Sök..."
            className={styles.searchInput}
            ref={inputRef}
            onFocus={handleInputFocus}
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
            <ul className={styles.searchResults}>
              {query.trim() !== "" ? (
                results.length > 0 ? (
                  results.map((page, index) => (
                    <li
                      key={index}
                      onClick={(e) => handleResultClick(e, page.path)}
                    >
                      <div>{page.title}</div>
                      <div className={styles.categoryTitle}>
                        {page.categoryTitle}
                      </div>
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

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import logo from "../assets/navLogo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  // Toggles the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuClosing(false);
    // Apply overflow hidden to the body to prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Argument to close the menu on a timeout
  const closeMenu = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      // Remove overflow hidden when menu is closed
      document.body.style.overflow = "auto";
    }, 150);
  };

  // Sets background blur when menu is open
  const handleBlurBackgroundClick = () => {
    setIsMenuOpen(false);
    // Remove overflow hidden when clicking on the background blur
    document.body.style.overflow = "auto";
  };

  // Handles the scroll on page for nav vertically
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  // EventListener on window for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    // Nav container, hide nav class and transparent class
    <nav
      className={`${styles.navContainer} ${!visible && styles.hideNav} ${
        prevScrollPos <= 0.28 * window.innerHeight && styles.transparent // Nav bar is transparent on first 28vh of the page
      }`}
    >
      {/* Conditional render nav with links */}
      {isMenuOpen && (
        <div
          className={styles.blurBackground}
          onClick={handleBlurBackgroundClick}
        ></div>
      )}
      <div className={styles.navItems}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={styles.logoContainer}>
              <img src={logo} alt="Logo" className={styles.logo} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              activeclassname={styles.active}
              className={styles.navLink}
            >
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/väder"
              activeclassname={styles.active}
              className={styles.navLink}
            >
              Väder
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upptäck"
              activeclassname={styles.active}
              className={styles.navLink}
            >
              Upptäck
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/galleri"
              activeclassname={styles.active}
              className={styles.navLink}
            >
              Galleri
            </NavLink>
          </li>
        </ul>
        {/* Nav icons */}
        <div className={styles.navIcons}>
          <div className={styles.search}>
            <FiSearch strokeWidth={3} className={styles.searchIcon} />
          </div>
          <FiMenu
            strokeWidth={2.5}
            className={styles.menuIcon}
            onClick={toggleMenu}
          />
        </div>
      </div>
      {/* Inside the nav menu */}
      {isMenuOpen && (
        <div
          className={`${styles.menuWrapper} ${
            isMenuClosing ? styles.menuClosing : ""
          }`}
        >
          <div className={styles.closeIcon} onClick={closeMenu}>
            <FiX strokeWidth={3} className={styles.close} />
          </div>
          <ul className={styles.openMenu}>
            <li>
              <NavLink to="/" activeclassname={styles.active}>
                Hem
              </NavLink>
            </li>
            <li>
              <NavLink to="/väder" activeclassname={styles.active}>
                Väder
              </NavLink>
            </li>
            <li>
              <NavLink to="/upptäck" activeclassname={styles.active}>
                Upptäck
              </NavLink>
            </li>
            <li>
              <NavLink to="/galleri" activeclassname={styles.active}>
                Galleri
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

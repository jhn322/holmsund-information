import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuClosing(false);
  };

  const closeMenu = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 150);
  };

  const handleBlurBackgroundClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      {isMenuOpen && (
        <div
          className={styles.blurBackground}
          onClick={handleBlurBackgroundClick}
        ></div>
      )}
      <div
        className={`${styles.navContainer} ${
          isMenuOpen ? styles.menuOpen : ""
        }`}
      >
        <div className={styles.navItems}>
          <ul
            className={`${styles.navList} ${isMenuOpen ? styles.menuOpen : ""}`}
          >
            <li>
              <NavLink
                to="/"
                activeclassname={styles.active}
                className={`${styles.navLink} ${
                  isMenuOpen ? styles.menuOpen : ""
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/link1"
                activeclassname={styles.active}
                className={`${styles.navLink} ${
                  isMenuOpen ? styles.menuOpen : ""
                }`}
              >
                Link 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/link2"
                activeclassname={styles.active}
                className={`${styles.navLink} ${
                  isMenuOpen ? styles.menuOpen : ""
                }`}
              >
                Link 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/link3"
                activeclassname={styles.active}
                className={`${styles.navLink} ${
                  isMenuOpen ? styles.menuOpen : ""
                }`}
              >
                Link 3
              </NavLink>
            </li>
          </ul>
          <div
            className={`${styles.navIcons} ${
              isMenuOpen ? styles.menuOpen : ""
            }`}
          >
            <div className={styles.search}>
              <FiSearch className={styles.searchIcon} />
            </div>
            <FiMenu className={styles.menuIcon} onClick={toggleMenu} />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`${styles.menuWrapper} ${
            isMenuClosing ? styles.menuClosing : ""
          }`}
        >
          <div className={styles.closeIcon} onClick={closeMenu}>
            <FiX className={styles.close} />
          </div>
          <ul className={styles.openMenu}>
            <li>
              <NavLink to="/" activeclassname={styles.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/link1" activeclassname={styles.active}>
                Link 1
              </NavLink>
            </li>
            <li>
              <NavLink to="/link2" activeclassname={styles.active}>
                Link 2
              </NavLink>
            </li>
            <li>
              <NavLink to="/link3" activeclassname={styles.active}>
                Link 3
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

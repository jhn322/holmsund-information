import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

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

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  const handleBlurBackgroundClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav className={`${styles.navContainer} ${!visible && styles.hideNav}`}>
      {isMenuOpen && (
        <div
          className={styles.blurBackground}
          onClick={handleBlurBackgroundClick}
        ></div>
      )}
      <div className={styles.navItems}>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              activeClassName={styles.active}
              className={styles.navLink}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weather"
              activeClassName={styles.active}
              className={styles.navLink}
            >
              Väder
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/spotlightpage"
              activeClassName={styles.active}
              className={styles.navLink}
            >
              Upptäck
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallerypage"
              activeClassName={styles.active}
              className={styles.navLink}
            >
              Galleri
            </NavLink>
          </li>
        </ul>
        <div className={styles.navIcons}>
          <div className={styles.search}>
            <FiSearch className={styles.searchIcon} />
          </div>
          <FiMenu className={styles.menuIcon} onClick={toggleMenu} />
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
              <NavLink to="/" activeClassName={styles.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/weather" activeClassName={styles.active}>
                Väder
              </NavLink>
            </li>
            <li>
              <NavLink to="/spotlightpage" activeClassName={styles.active}>
                Upptäck
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallerypage" activeClassName={styles.active}>
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

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Menu Icons
import {
  FiMenu,
  FiSearch,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

// Social Icons
import { FaGithub, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

// CSS
import styles from "../styles/Navigation.module.css";

// Logo
import logo1 from "../assets/navLogo.png";
import logo2 from "../assets/navLogoHover.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredNav, setIsHoveredNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
    if (isMenuOpen) {
      window.removeEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen, prevScrollPos, visible]);

  // Function to toggle active dropdown
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div>
      {/* Nav container, hide nav class and transparent class */}
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
                <img
                  src={isHovered ? logo2 : logo1}
                  alt="Logo"
                  className={styles.logo}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
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
                to="/aktiviteter"
                activeclassname={styles.active}
                className={styles.navLink}
              >
                Aktiviteter
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
            <li>
              <NavLink
                to="/väder"
                activeclassname={styles.active}
                className={styles.navLink}
              >
                Väder
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
            <div className={styles.closeIcon} onClick={closeMenu}>
              <FiX strokeWidth={2} className={styles.close} />
            </div>
            <ul className={styles.openMenu}>
              <li>
                <NavLink to="/" className={styles.logoNavContainer}>
                  <img
                    src={isHoveredNav ? logo2 : logo1}
                    alt="Logo"
                    className={styles.logoNav}
                    onMouseEnter={() => setIsHoveredNav(true)}
                    onMouseLeave={() => setIsHoveredNav(false)}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/" activeclassname={styles.active}>
                  Hem
                </NavLink>
              </li>
              <li>
                <NavLink to="/aktiviteter" activeclassname={styles.active}>
                  Aktiviteter
                </NavLink>
              </li>
              <li
                className={
                  activeDropdown === "discover" ? styles.openDropdown : ""
                }
              >
                <div
                  onClick={() => toggleDropdown("discover")}
                  className={styles.dropdownToggle}
                  style={{ fontSize: "2rem" }}
                >
                  Upptäck
                  <div
                    className={`${styles.discoverDropdownArrow} ${
                      activeDropdown === "discover" ? styles.open : ""
                    }`}
                  >
                    {activeDropdown === "discover" ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </div>
                </div>
                {/* Show nested items if activeDropdown is true */}
                {activeDropdown === "discover" && (
                  <ul className={styles.nestedMenu}>
                    <li>
                      <NavLink to="/upptäck-1" activeclassname={styles.active}>
                        Upptäck-1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/upptäck-2" activeclassname={styles.active}>
                        Upptäck-2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/upptäck-3" activeclassname={styles.active}>
                        Upptäck-3
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/upptäck-4" activeclassname={styles.active}>
                        Upptäck-4
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={
                  activeDropdown === "gallery" ? styles.openDropdown : ""
                }
              >
                <div
                  onClick={() => toggleDropdown("gallery")}
                  className={styles.dropdownToggle}
                  style={{ fontSize: "2rem" }}
                >
                  Galleri
                  <div
                    className={`${styles.galleryDropdownArrow} ${
                      activeDropdown === "gallery" ? styles.open : ""
                    }`}
                  >
                    {activeDropdown === "gallery" ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </div>
                </div>
                {/* Show nested items if activeDropdown is true */}
                {activeDropdown === "gallery" && (
                  <ul className={styles.nestedMenu}>
                    <li>
                      <NavLink to="/galleri-1" activeclassname={styles.active}>
                        Galleri-1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/galleri-2" activeclassname={styles.active}>
                        Galleri-2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/galleri-3" activeclassname={styles.active}>
                        Galleri-3
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/galleri-4" activeclassname={styles.active}>
                        Galleri-4
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink to="/väder" activeclassname={styles.active}>
                  Väder
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;

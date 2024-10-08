import React from "react";
import { NavLink } from "react-router-dom";
import { RxCross2, RxPlus, RxMinus } from "react-icons/rx";
import {
  FaGithub,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";
import ThemeToggleButton from "../theme/ThemeToggleButton";
import styles from "../../styles/common/Nav.module.css";
import logo1 from "../../assets/logo/navLogo.png";
import logo2 from "../../assets/logo/navLogoHover.png";

const NavMenu = ({
  closeMenu,
  isMenuClosing, // Boolean to indicate if the menu is closing
  activeDropdown, // State to manage which dropdown is active
  toggleDropdown,
  isHoveredLogoNavMenu,
  setIsHoveredLogoNavMenu,
}) => {
  // Function to track Google Analytics events
  const trackEvent = (eventCategory, eventLabel) => {
    if (window.gtag) {
      window.gtag("event", "click", {
        event_category: eventCategory,
        event_label: eventLabel,
      });
    }
  };

  // Handler for dropdown toggle with tracking
  const handleDropdownToggle = (dropdown) => {
    toggleDropdown(dropdown);
    const eventLabel = activeDropdown === dropdown ? "Close" : "Open";
    trackEvent(`${dropdown} Dropdown`, eventLabel);
  };

  return (
    <div
      className={`${styles.menuWrapper} ${
        isMenuClosing ? styles.menuClosing : ""
      }`}
    >
      {/* Social media icons */}
      <div className={styles.socialIcons}>
        <a
          href="https://github.com/jhn322"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className={styles.github} />
        </a>
        <a
          href="https://x.com/search?q=%23holmsund&src=typeahead_click"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaXTwitter className={styles.twitterX} />
        </a>
        <a
          href="https://www.instagram.com/explore/locations/240089071/holmsund-vasterbottens-lan-sweden/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className={styles.instagram} />
        </a>
        <a
          href="https://www.facebook.com/groups/415551751837063/?locale=sv_SE"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
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
      </div>

      {/* Theme toggle button */}
      <ThemeToggleButton />

      {/* Close menu button */}
      <div
        className={styles.closeCircle}
        onClick={closeMenu}
        tabIndex={0}
        role="button"
        aria-label="stäng meny"
      >
        <RxCross2 className={styles.closeIcon} />
      </div>

      {/* Main menu container */}
      <div className={styles.openMenuContainer}>
        <ul className={styles.openMenu}>
          <li>
            <NavLink to="/" className={styles.logoNavContainer}>
              <img
                src={isHoveredLogoNavMenu ? logo2 : logo1}
                alt="Logo"
                className={styles.logoNav}
                onMouseEnter={() => setIsHoveredLogoNavMenu(true)}
                onMouseLeave={() => setIsHoveredLogoNavMenu(false)}
              />
            </NavLink>
          </li>

          {/* Home link */}
          <li>
            <NavLink to="/" activeclassname={styles.active}>
              <h4>Hem</h4>
            </NavLink>
          </li>

          {/* Discover dropdown menu */}
          <li
            className={activeDropdown === "discover" ? styles.openDropdown : ""}
          >
            <div
              onClick={() => handleDropdownToggle("discover")}
              className={styles.dropdownToggle}
              style={{ fontSize: "2rem" }}
              tabIndex={0}
              role="button"
              aria-expanded={activeDropdown === "discover" ? "true" : "false"}
            >
              <h4>Utforska</h4>
              <div
                className={`${styles.discoverDropdownIcon} ${
                  activeDropdown === "discover" ? styles.open : ""
                }`}
              >
                {activeDropdown === "discover" ? (
                  <RxMinus strokeWidth={1} />
                ) : (
                  <RxPlus strokeWidth={1} />
                )}
              </div>
            </div>
            {activeDropdown === "discover" && (
              <ul className={styles.nestedMenu} role="menu">
                <div className={styles.nestedMainContainer}>
                  <li>
                    <NavLink to="/utforska" activeclassname={styles.active}>
                      <h5 className={styles.nestedMainTitle}>
                        Utforska hela Holmsund
                      </h5>
                    </NavLink>
                  </li>
                </div>
                <div className={styles.nestedItems}>
                  <li>
                    <NavLink to="/branteberget" activeclassname={styles.active}>
                      <h5>Bränteberget</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/kajutan" activeclassname={styles.active}>
                      <h5>Kajutan</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ljumviken" activeclassname={styles.active}>
                      <h5>Ljumviken</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/revet" activeclassname={styles.active}>
                      <h5>Revet</h5>
                    </NavLink>
                  </li>
                </div>
              </ul>
            )}
          </li>

          {/* Activities dropdown menu */}
          <li
            className={activeDropdown === "activity" ? styles.openDropdown : ""}
          >
            <div
              onClick={() => handleDropdownToggle("activity")}
              className={styles.dropdownToggle}
              style={{ fontSize: "2rem" }}
              tabIndex={0}
              role="button"
              aria-expanded={activeDropdown === "activity" ? "true" : "false"}
            >
              <h4>Aktiviteter</h4>
              <div
                className={`${styles.activityDropdownIcon} ${
                  activeDropdown === "activity" ? styles.open : ""
                }`}
              >
                {activeDropdown === "activity" ? (
                  <RxMinus strokeWidth={1} />
                ) : (
                  <RxPlus strokeWidth={1} />
                )}
              </div>
            </div>
            {activeDropdown === "activity" && (
              <ul className={styles.nestedMenu} role="menu">
                <div className={styles.nestedMainContainer}>
                  <li className={styles.nestedMain}>
                    <NavLink to="/aktiviteter" activeclassname={styles.active}>
                      <h5 className={styles.nestedMainTitle}>
                        Upplev alla aktiviteter
                      </h5>
                    </NavLink>
                  </li>
                </div>
                <div className={styles.nestedItems}>
                  <li>
                    <NavLink
                      to="/sandviks-idrottsklubb"
                      activeclassname={styles.active}
                    >
                      <h5>Sandviks Idrottsklubb</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/elljussparet" activeclassname={styles.active}>
                      <h5>Elljusspåret</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/umea-golfklubb"
                      activeclassname={styles.active}
                    >
                      <h5>Umeå Golfklubb</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/storsjohallen"
                      activeclassname={styles.active}
                    >
                      <h5>Storsjöhallen</h5>
                    </NavLink>
                  </li>
                </div>
              </ul>
            )}
          </li>

          {/* Gallery dropdown menu */}
          <li
            className={activeDropdown === "gallery" ? styles.openDropdown : ""}
          >
            <div
              onClick={() => handleDropdownToggle("gallery")}
              className={styles.dropdownToggle}
              style={{ fontSize: "2rem" }}
              tabIndex={0}
              role="button"
              aria-expanded={activeDropdown === "gallery" ? "true" : "false"}
            >
              <h4>Galleri</h4>
              <div
                className={`${styles.galleryDropdownIcon} ${
                  activeDropdown === "gallery" ? styles.open : ""
                }`}
              >
                {activeDropdown === "gallery" ? (
                  <RxMinus strokeWidth={1} />
                ) : (
                  <RxPlus strokeWidth={1} />
                )}
              </div>
            </div>
            {activeDropdown === "gallery" && (
              <ul className={styles.nestedMenu} role="menu">
                <div className={styles.nestedMainContainer}>
                  <li>
                    <NavLink to="/galleri" activeclassname={styles.active}>
                      <h5 className={styles.nestedMainTitle}>
                        Se alla bilder i Galleri
                      </h5>
                    </NavLink>
                  </li>
                </div>
                <div className={styles.nestedItems}>
                  <li>
                    <NavLink to="/osterfjarden" activeclassname={styles.active}>
                      <h5>Österfjärden</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/storsjoparken"
                      activeclassname={styles.active}
                    >
                      <h5>Storsjöparken</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/sikskarsvaken"
                      activeclassname={styles.active}
                    >
                      <h5>Sikskärsvaken</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/holmsunds-kyrka"
                      activeclassname={styles.active}
                    >
                      <h5>Holmsunds kyrka</h5>
                    </NavLink>
                  </li>
                </div>
              </ul>
            )}
          </li>

          {/* Other menu links */}
          <li>
            <NavLink to="/vader" activeclassname={styles.active}>
              <h4>Väder</h4>
            </NavLink>
          </li>
          <li>
            <NavLink to="/kartor" activeclassname={styles.active}>
              <h4>Kartor</h4>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;

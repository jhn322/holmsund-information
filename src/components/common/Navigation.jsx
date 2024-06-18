import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Menu Icons
import {
  RxHamburgerMenu,
  RxMagnifyingGlass,
  RxCross2,
  RxPlus,
  RxMinus,
} from "react-icons/rx";

// Social Icons
import { FaGithub, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

// CSS
import styles from "../../styles/common/Navigation.module.css";

// Logo
import logo1 from "../../assets/logo/navLogo.png";
import logo2 from "../../assets/logo/navLogoHover.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isHoveredLogo, setIsHoveredLogo] = useState(false);
  const [isHoveredLogoNavMenu, setIsHoveredLogoNavMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDiscoverHovered, setIsDiscoverHovered] = useState(false);
  const [isActivityHovered, setIsActivityHovered] = useState(false);
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);

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

  const handleMainNavLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <header>
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
                  src={isHoveredLogo ? logo2 : logo1}
                  alt="Logo"
                  className={styles.logo}
                  onMouseEnter={() => setIsHoveredLogo(true)}
                  onMouseLeave={() => setIsHoveredLogo(false)}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/utforska"
                className={styles.navLink}
                activeclassname={styles.active}
                onClick={handleMainNavLinkClick}
                onMouseEnter={() => setIsDiscoverHovered(true)}
                onMouseLeave={() => setIsDiscoverHovered(false)}
              >
                Utforska
                {isDiscoverHovered && (
                  <ul className={styles.dropdownMenu}>
                    <li className={styles.dropdownMenuAllContainer}>
                      <NavLink to="/utforska" activeclassname={styles.active}>
                        <h5 className={styles.dropdownMenuAll}>
                          Utforska allt i Holmsund
                        </h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/utforska-1" activeclassname={styles.active}>
                        <h5>Första utforska länk</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/utforska-2" activeclassname={styles.active}>
                        <h5>Andra utforska länk</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/utforska-3" activeclassname={styles.active}>
                        <h5>Tredje utforska länk</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/utforska-4" activeclassname={styles.active}>
                        <h5>Fjärde utforska länk</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/utforska-5" activeclassname={styles.active}>
                        <h5>Femte utforska länk</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/utforska-6" activeclassname={styles.active}>
                        <h5>Sjätte utforska länk</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/utforska-7" activeclassname={styles.active}>
                        <h5>Sjunde utforska länk</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/utforska-8" activeclassname={styles.active}>
                        <h5>Åttonde utforska länk</h5>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aktiviteter"
                className={styles.navLink}
                activeclassname={styles.active}
                onClick={handleMainNavLinkClick}
                onMouseEnter={() => setIsActivityHovered(true)}
                onMouseLeave={() => setIsActivityHovered(false)}
              >
                Aktiviteter
                {isActivityHovered && (
                  <ul className={styles.dropdownMenu}>
                    <li className={styles.dropdownMenuAllContainer}>
                      <NavLink
                        to="/aktiviteter"
                        activeclassname={styles.active}
                      >
                        <h5 className={styles.dropdownMenuAll}>
                          Utforska alla aktiviteter
                        </h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/aktiviteter-1"
                        activeclassname={styles.active}
                      >
                        <h5>Först aktiviteter länk</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/aktiviteter-2"
                        activeclassname={styles.active}
                      >
                        <h5>Andra aktiviteter länk</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/aktiviteter-3"
                        activeclassname={styles.active}
                      >
                        <h5>Tredje aktiviteter länk</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/aktiviteter-4"
                        activeclassname={styles.active}
                      >
                        <h5>Fjärde aktiviteter länk</h5>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/galleri"
                className={styles.navLink}
                activeclassname={styles.active}
                onClick={handleMainNavLinkClick}
                onMouseEnter={() => setIsGalleryHovered(true)}
                onMouseLeave={() => setIsGalleryHovered(false)}
              >
                Galleri
                {isGalleryHovered && (
                  <ul className={styles.dropdownMenu}>
                    <li className={styles.dropdownMenuAllContainer}>
                      <NavLink to="/galleri" activeclassname={styles.active}>
                        <h5 className={styles.dropdownMenuAll}>
                          Se alla bilder i Galleri
                        </h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/galleri-1" activeclassname={styles.active}>
                        <h5>Först galleri länk</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/galleri-2" activeclassname={styles.active}>
                        <h5>Andra galleri länk</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/galleri-3" activeclassname={styles.active}>
                        <h5>Tredje galleri länk</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/galleri-4" activeclassname={styles.active}>
                        <h5>Fjärde galleri länk</h5>
                      </NavLink>
                    </li>
                  </ul>
                )}
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
              <RxMagnifyingGlass
                strokeWidth={0.6}
                className={styles.searchIcon}
              />
            </div>
            <RxHamburgerMenu
              strokeWidth={0.8}
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
            <div className={styles.closeCircle} onClick={closeMenu}>
              <RxCross2 className={styles.closeIcon} />
            </div>
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
              <li>
                <NavLink to="/" activeclassname={styles.active}>
                  <h4>Hem</h4>
                </NavLink>
              </li>
              <li
                className={
                  activeDropdown === "activity" ? styles.openDropdown : ""
                }
              >
                <div
                  onClick={() => toggleDropdown("activity")}
                  className={styles.dropdownToggle}
                  style={{ fontSize: "2rem" }}
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
                {/* Show nested items if activeDropdown is true */}
                {activeDropdown === "activity" && (
                  <ul className={styles.nestedMenuContainer}>
                    <div className={styles.nestedMenu}>
                      <li>
                        <NavLink
                          to="/aktiviteter"
                          activeclassname={styles.active}
                        >
                          <h5 className={styles.nestedMenuMain}>
                            Utforska alla aktiviteter
                          </h5>
                        </NavLink>
                      </li>
                    </div>
                    <div className={styles.nestedItems}>
                      <li>
                        <NavLink
                          to="/aktiviteter-1"
                          activeclassname={styles.active}
                        >
                          <h5>Första aktiviteter länken</h5>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/aktiviteter-2"
                          activeclassname={styles.active}
                        >
                          <h5>Andra aktiviteter länken</h5>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/aktiviteter-3"
                          activeclassname={styles.active}
                        >
                          <h5>Tredje aktiviteter länken</h5>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/aktiviteter-4"
                          activeclassname={styles.active}
                        >
                          <h5>Fjärde aktiviteter länken</h5>
                        </NavLink>
                      </li>
                    </div>
                  </ul>
                )}
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
                {/* Show nested items if activeDropdown is true */}
                {activeDropdown === "discover" && (
                  <ul className={styles.nestedMenuContainer}>
                    <div className={styles.nestedMenu}>
                      <li>
                        <NavLink to="/utforska" activeclassname={styles.active}>
                          <h5 className={styles.nestedMenuMain}>
                            Utforska allt i Holmsund
                          </h5>
                        </NavLink>
                      </li>
                    </div>
                    <div className={styles.nestedItems}>
                      <li>
                        <NavLink
                          to="/utforska-1"
                          activeclassname={styles.active}
                        >
                          <h5>Första utforska länken</h5>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/utforska-2"
                          activeclassname={styles.active}
                        >
                          <h5>Andra utforska länken</h5>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/utforska-3"
                          activeclassname={styles.active}
                        >
                          <h5>Tredje utforska länken</h5>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/utforska-4"
                          activeclassname={styles.active}
                        >
                          <h5>Fjärde utforska länken</h5>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/utforska-5"
                          activeclassname={styles.active}
                        >
                          <h5>Femte utforska länken</h5>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/utforska-6"
                          activeclassname={styles.active}
                        >
                          <h5>Sjätte utforska länken</h5>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/utforska-7"
                          activeclassname={styles.active}
                        >
                          <h5>Sjunde utforska länken</h5>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/utforska-8"
                          activeclassname={styles.active}
                        >
                          <h5>Åttonde utforska länken</h5>
                        </NavLink>
                      </li>
                    </div>
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
                {/* Show nested items if activeDropdown is true */}
                {activeDropdown === "gallery" && (
                  <ul className={styles.nestedMenuContainer}>
                    <div className={styles.nestedMenu}>
                      <li>
                        <NavLink to="/galleri" activeclassname={styles.active}>
                          <h5 className={styles.nestedMenuMain}>
                            Se alla bilder i Galleri
                          </h5>
                        </NavLink>
                      </li>
                    </div>
                    <div className={styles.nestedItems}>
                      <li>
                        <NavLink
                          to="/galleri-1"
                          activeclassname={styles.active}
                        >
                          <h5>Första galleri länken</h5>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/galleri-2"
                          activeclassname={styles.active}
                        >
                          <h5>Andra galleri länken</h5>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/galleri-3"
                          activeclassname={styles.active}
                        >
                          <h5>Tredje galleri länken</h5>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/galleri-4"
                          activeclassname={styles.active}
                        >
                          <h5>Fjärde galleri länken</h5>
                        </NavLink>
                      </li>
                    </div>
                  </ul>
                )}
              </li>
              <li>
                <NavLink to="/väder" activeclassname={styles.active}>
                  <h4>Väder</h4>
                </NavLink>
              </li>
              <li>
                <NavLink to="/karta" activeclassname={styles.active}>
                  <h4>Karta</h4>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;

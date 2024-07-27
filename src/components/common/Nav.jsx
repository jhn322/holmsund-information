import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import NavMenu from "./NavMenu";
import Search from "./Search";
import { RxHamburgerMenu, RxMagnifyingGlass } from "react-icons/rx";
import styles from "../../styles/common/Nav.module.css";
import logo1 from "../../assets/logo/navLogo.png";
import logo2 from "../../assets/logo/navLogoHover.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isHoveredLogo, setIsHoveredLogo] = useState(false);
  const [isHoveredLogoNavMenu, setIsHoveredLogoNavMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDiscoverHovered, setIsDiscoverHovered] = useState(false);
  const [isActivityHovered, setIsActivityHovered] = useState(false);
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);

  // Use location hook to get current path
  const location = useLocation();
  const currentPath = location.pathname;

  // Decode path to handle special characters
  const decodePath = (path) => decodeURIComponent(path);
  const decodedCurrentPath = decodePath(currentPath);
  const pathsToExclude = [
    "/vader",
    "/anvandarvillkor",
    "/om-oss",
    "/cookiepolicy",
    "/kartor",
  ];
  const shouldBeTransparent = !pathsToExclude.includes(decodedCurrentPath); // Check if nav should be transparent

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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Function to toggle active dropdown
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Function to handle click on background blur when menu or search is open
  const handleBlurBackgroundClick = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    document.body.style.overflow = "auto";
  };

  // Function to handle scroll event for nav visibility
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  const handleMainNavLinkClick = (e) => {
    e.preventDefault();
  };

  // Effect to add/remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Effect to manage body scroll based on menu or search state
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isMenuOpen || isSearchOpen) {
      document.body.style.overflowY = "hidden"; // Disable body scroll
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      // Handle special case for iOS devices
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
      }
    } else {
      document.body.style.overflowY = "auto"; // Enable body scroll
      document.body.style.paddingRight = "0";

      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        document.body.style.position = "";
        document.body.style.width = "";
      }
    }

    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.paddingRight = "0";
    };
  }, [isMenuOpen, isSearchOpen]);

  // Effect to manage scroll event listener based on menu state
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

  // Effect to manage body overflow style based on menu or search state
  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isSearchOpen]);

  return (
    <header>
      {/* Nav container, hide nav class and transparent class */}
      <nav
        className={`${styles.navContainer} ${!visible && styles.hideNav} ${
          shouldBeTransparent &&
          prevScrollPos <= 0.28 * window.innerHeight &&
          styles.transparent // Nav bar is transparent on first 28vh of the page unless on specified paths
        }`}
      >
        {(isMenuOpen || isSearchOpen) && (
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
              <section
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
                      <NavLink
                        to="/storsjoskolan"
                        activeclassname={styles.active}
                      >
                        <h5>Storsjöskolan</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/solbackakyrkan"
                        activeclassname={styles.active}
                      >
                        <h5>Solbackakyrkan</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/lovosundet" activeclassname={styles.active}>
                        <h5>Lövösundet</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/kasaviken" activeclassname={styles.active}>
                        <h5>Kasaviken</h5>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </section>
            </li>
            <li>
              <section
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
                          Upplev alla aktiviteter
                        </h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/omberget" activeclassname={styles.active}>
                        <h5>Omberget</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/djupvik" activeclassname={styles.active}>
                        <h5>Djupvik</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/holmsunds-tennisklubb"
                        activeclassname={styles.active}
                      >
                        <h5>Holmsunds Tennisklubb</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/vasterlangsladan"
                        activeclassname={styles.active}
                      >
                        <h5>Västerlångslädan</h5>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </section>
            </li>
            <li>
              <section
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
                      <NavLink
                        to="/holmsundsbanan"
                        activeclassname={styles.active}
                      >
                        <h5>Holmsundsbanan</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/holmen" activeclassname={styles.active}>
                        <h5>Holmen</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/skargardsskolan"
                        activeclassname={styles.active}
                      >
                        <h5>Skärgårdsskolan</h5>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/holmsund-hamn"
                        activeclassname={styles.active}
                      >
                        <h5>Holmsund hamn</h5>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </section>
            </li>
            <li>
              <NavLink
                to="/vader"
                activeclassname={styles.active}
                className={styles.navLink}
              >
                Väder
              </NavLink>
            </li>
          </ul>
          {/* Nav icons */}
          <div className={styles.navIcons}>
            <div
              className={styles.search}
              onClick={toggleSearch}
              role="button"
              tabIndex={0}
            >
              {isSearchOpen && (
                <Search onClose={() => setIsSearchOpen(false)} />
              )}
              <RxMagnifyingGlass
                strokeWidth={0.6}
                className={styles.searchIcon}
                aria-label="Search"
              />
            </div>
            <RxHamburgerMenu
              strokeWidth={0.8}
              className={styles.menuIcon}
              onClick={toggleMenu}
              role="button"
              tabIndex={0}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            />
          </div>
        </div>
        {isMenuOpen && (
          <NavMenu
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}
            isMenuClosing={isMenuClosing}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            isHoveredLogoNavMenu={isHoveredLogoNavMenu}
            setIsHoveredLogoNavMenu={setIsHoveredLogoNavMenu}
          />
        )}
      </nav>
    </header>
  );
};

export default Nav;

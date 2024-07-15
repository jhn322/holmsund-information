import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2, RxPlus, RxMinus } from "react-icons/rx";
import { FaGithub, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import ThemeToggleButton from "../theme/ThemeToggleButton";
import styles from "../../styles/common/Nav.module.css";
import logo1 from "../../assets/logo/navLogo.png";
import logo2 from "../../assets/logo/navLogoHover.png";

const NavMenu = ({
  closeMenu,
  isMenuClosing,
  activeDropdown,
  toggleDropdown,
  isHoveredLogoNavMenu,
  setIsHoveredLogoNavMenu,
}) => {
  // iOS specific
  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
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
      </div>
      <ThemeToggleButton />
      <div
        className={styles.closeCircle}
        onClick={closeMenu}
        tabIndex={0}
        role="button"
        aria-label="stäng meny"
      >
        <RxCross2 className={styles.closeIcon} />
      </div>
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
          <li>
            <NavLink to="/" activeclassname={styles.active}>
              <h4>Hem</h4>
            </NavLink>
          </li>
          <li
            className={activeDropdown === "activity" ? styles.openDropdown : ""}
          >
            <div
              onClick={() => toggleDropdown("activity")}
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
            className={activeDropdown === "discover" ? styles.openDropdown : ""}
          >
            <div
              onClick={() => toggleDropdown("discover")}
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
                    <NavLink to="/utforska-1" activeclassname={styles.active}>
                      <h5>Första utforska länken</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/utforska-2" activeclassname={styles.active}>
                      <h5>Andra utforska länken</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/utforska-3" activeclassname={styles.active}>
                      <h5>Tredje utforska länken</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/utforska-4" activeclassname={styles.active}>
                      <h5>Fjärde utforska länken</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/utforska-5" activeclassname={styles.active}>
                      <h5>Femte utforska länken</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/utforska-6" activeclassname={styles.active}>
                      <h5>Sjätte utforska länken</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/utforska-7" activeclassname={styles.active}>
                      <h5>Sjunde utforska länken</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/utforska-8" activeclassname={styles.active}>
                      <h5>Åttonde utforska länken</h5>
                    </NavLink>
                  </li>
                </div>
              </ul>
            )}
          </li>
          <li
            className={activeDropdown === "gallery" ? styles.openDropdown : ""}
          >
            <div
              onClick={() => toggleDropdown("gallery")}
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
                        Upplev stunder i Galleri
                      </h5>
                    </NavLink>
                  </li>
                </div>
                <div className={styles.nestedItems}>
                  <li>
                    <NavLink to="/galleri-1" activeclassname={styles.active}>
                      <h5>Första galleri länken</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/galleri-2" activeclassname={styles.active}>
                      <h5>Andra galleri länken</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/galleri-3" activeclassname={styles.active}>
                      <h5>Tredje galleri länken</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/galleri-4" activeclassname={styles.active}>
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

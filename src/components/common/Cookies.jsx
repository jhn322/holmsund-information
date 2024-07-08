import { useState } from "react";
import { NavLink } from "react-router-dom";
import { trackCookiesElementClick } from "../analytics/common";
import styles from "../../styles/common/Cookies.module.css";

const Cookies = () => {
  const [visible, setVisible] = useState(() => {
    const acceptedCookies = localStorage.getItem("acceptedCookies");
    return acceptedCookies ? false : true;
  });

  const handleAccept = () => {
    localStorage.setItem("acceptedCookies", "true");
    setVisible(false);
    trackCookiesElementClick("button", "Accept Cookies", null);
  };

  // Google Analytics
  const handleNavLinkClick = () => {
    trackCookiesElementClick("navlink", "Cookie Policy", "/cookiepolicy");
  };

  if (!visible) return null;

  return (
    <main className={styles.cookiesContainer}>
      <p>
        För att förbättra din upplevelse använder vi teknik för att analysera
        klicks, navigering och andra interaktioner på vår webbplats. Du kan läs
        mer i våran cookiepolicy genom att
        <NavLink
          to="/cookiepolicy"
          className={styles.navToCookiepolicy}
          onClick={handleNavLinkClick}
        >
          klicka här.
        </NavLink>
      </p>
      <div className={styles.acceptContainer}>
        <button className={styles.accept} onClick={handleAccept}>
          Jag förstår
        </button>
      </div>
    </main>
  );
};

export default Cookies;

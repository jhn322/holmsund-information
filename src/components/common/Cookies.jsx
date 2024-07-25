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

  const handleNavLinkClick = () => {
    trackCookiesElementClick("navlink", "Cookiepolicy", "/cookiepolicy");
  };

  if (!visible) return null;

  return (
    <>
      <div className={styles.overlay}></div>
      <main className={styles.cookiesContainer}>
        <p>
          För att förbättra din upplevelse använder vi teknik för att analysera
          klick, navigering och andra interaktioner på vår webbplats. Dessa
          analyser hjälper oss att förstå hur våra besökare använder webbplatsen
          och gör det möjligt för oss att förbättra innehållet och
          funktionaliteten. Vi kan också använda cookies för att komma ihåg dina
          preferenser och göra din upplevelse mer personlig. För mer information
          om hur vi använder cookies och hur du kan hantera dina inställningar,
          vänligen läs vår
          <NavLink
            to="/cookiepolicy"
            className={styles.navToCookiepolicy}
            onClick={handleNavLinkClick}
          >
            cookiepolicy
          </NavLink>
          .
        </p>
        <div className={styles.acceptContainer}>
          <button
            className={styles.accept}
            onClick={handleAccept}
            aria-label="acceptera knapp"
          >
            Jag samtycker
          </button>
        </div>
      </main>
    </>
  );
};

export default Cookies;

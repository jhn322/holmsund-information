import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import styles from "../../styles/addon/HeaderAddon.module.css";
// Component specific styling
import styles2 from "../../styles/addon/HeaderAddonPage.module.css";
import styles3 from "../../styles/home/Header.module.css";

const getCurrentSeason = () => {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) {
    return "Vår";
  } else if (month >= 6 && month <= 8) {
    return "Sommar";
  } else if (month >= 9 && month <= 11) {
    return "Höst";
  } else {
    return "Vinter";
  }
};

const HeaderAddonPage = ({ title, backgroundImage }) => {
  const currentSeason = getCurrentSeason();

  return (
    <header
      className={`${styles.headerContainer} ${styles2.headerContainer}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`${styles.header} ${styles3.header}`}>
        <h1 className={`${styles.headerTitle} ${styles2.headerTitle}`}>
          {title}
        </h1>

        <div className={`${styles.btnContainer} ${styles3.btnContainer}`}>
          <NavLink to="/aktiviteter">
            <button className={`${styles.headerBtn} ${styles3.headerBtn}`}>
              Se alla Aktiviteter man kan hitta på denna {currentSeason}
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default HeaderAddonPage;

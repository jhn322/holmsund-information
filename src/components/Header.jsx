import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import styles from "../styles/Header.module.css";

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

const Header = () => {
  const currentSeason = getCurrentSeason();
  const headerClass = `${styles.headerContainer} ${
    styles[currentSeason.split(" ")[0]]
  }`;

  return (
    <main className={headerClass}>
      <div className={styles.innerHeader}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>{currentSeason} i Holmsund</h1>

          <div className={styles.btnContainer}>
            <NavLink to="/aktiviteter">
              <button className={styles.headerBtn}>
                Aktiviteter man kan hitta på denna {currentSeason}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;

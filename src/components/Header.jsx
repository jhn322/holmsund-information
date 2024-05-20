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

  return (
    <main className={styles.headerContainer}>
      <div className={styles.innerHeader}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>
            Holmsund <br /> Information
          </h1>

          <div className={styles.btnContainer}>
            <NavLink to="/aktiviteter">
              <button className={styles.headerBtn}>
                Aktiviteter man kan hitta på denna {currentSeason} i Holmsund
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;

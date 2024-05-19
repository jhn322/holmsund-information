import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import styles from "../styles/Header.module.css";

const Header = () => {
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
                Flera aktiviteter man kan göra i Holmsund
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;

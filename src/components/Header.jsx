import React from "react";
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
            <button className={styles.headerBtn}>
              Flera aktiviteter man kan göra i Holmsund
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;

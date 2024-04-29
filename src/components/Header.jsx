import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <main className={styles.headerContainer}>
      <div className={styles.innerHeader}>
        <div className={styles.header}>
          Holmsund <br /> Information
          <div className={styles.btnContainer}>
            <button className={styles.headerBtn}>
              Klicka här för mer information om detta innehåll!
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

// Images
import shareImage from "../assets/share.jpg";

// CSS
import styles from "../styles/ShareMaps.module.css";

const ShareMaps = () => {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.inner}>
        <div className={styles.shareContainer}>
          <div className={styles.shareHeader}>
            <h3 className={styles.shareTitle}>
              Dela din story <span className={styles.shareDot}>⬤</span>#Holmsund
            </h3>
          </div>
          <div className={styles.shareImageContainer}>
            <aside
              className={styles.shareImage}
              style={{ backgroundImage: `url(${shareImage})` }}
            ></aside>
          </div>
          <div className={styles.shareAdressContainer}>
            <div className={styles.shareAdress}>
              <div className={styles.shareAdressText}>
                <div className={styles.adress}>
                  <p>Kulgränd 1 Holmsund</p>
                </div>
                <div className={styles.adress}>
                  <p>Umeå Västerbotten</p>
                </div>
                <div className={styles.adress}>
                  <p>Sverige 913 32</p>
                </div>
              </div>
              <NavLink to="/karta">
                {" "}
                <p className={styles.shareCoordinates}>
                  63.7066° N / 20.3686° E
                </p>{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ShareMaps;

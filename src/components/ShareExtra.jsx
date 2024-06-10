import React from "react";
import { NavLink } from "react-router-dom";

// Images
import shareImage from "../assets/share.jpg";

// CSS
import styles from "../styles/ShareExtra.module.css";

const ShareExtra = () => {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.inner}>
        <div className={styles.shareContainer}>
          <div className={styles.shareHeader}>
            <h3 className={styles.shareTitle}>
              Dela din story <span className={styles.shareDot}>⬤ </span>
              #Holmsund
            </h3>
          </div>
          <div className={styles.shareImageContainer}>
            <aside
              className={styles.shareImage}
              style={{ backgroundImage: `url(${shareImage})` }}
            ></aside>
          </div>
          {/* Navigate to weather section */}
          <div className={styles.weatherContainer}>
            <div className={styles.weatherInner}>
              <div className={styles.weatherText}>
                <div className={styles.weather}>
                  <h3>Väder Information</h3>
                </div>
                <div className={styles.weatherContent}>
                  <div className={styles.weather}>
                    <p>
                      Här kan du hitta väderprognoser för Homsund, inklusive
                      temperatur, nederbörd och vindförhållanden för de kommande
                      dagarna. Uppdateringar sker regelbundet för att ge dig den
                      mest aktuella väderinformationen.
                    </p>
                  </div>
                </div>
              </div>
              <NavLink to="/väder">
                {" "}
                <p className={styles.weatherBtnText}>
                  Kolla vädret i Holmsund
                </p>{" "}
              </NavLink>
            </div>
          </div>
          {/* Navigate to maps section */}
          <div className={styles.mapContainer}>
            <div className={styles.mapInner}>
              <div className={styles.mapText}>
                <div className={styles.map}>
                  <h3>Platsinformation</h3>
                </div>
                <div className={styles.mapContent}>
                  <div className={styles.map}>
                    <p>Kulgränd 1 Holmsund</p>
                  </div>
                  <div className={styles.map}>
                    <p>Umeå Västerbotten</p>
                  </div>
                  <div className={styles.map}>
                    <p>Sverige 913 32</p>
                  </div>
                  <div className={styles.map}>
                    <p>63.7066° N / 20.3686° E</p>
                  </div>
                </div>
              </div>
              <NavLink to="/karta">
                {" "}
                <p className={styles.mapBtnText}>Se karta över Holmsund</p>{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ShareExtra;

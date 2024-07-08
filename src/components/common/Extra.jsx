import React from "react";
import { NavLink } from "react-router-dom";

// Images
import image from "../../assets/other/share.jpg";

// CSS
import styles from "../../styles/common/Extra.module.css";

const Extra = () => {
  return (
    <section className={styles.mainContainer}>
      <header className={styles.inner}>
        <article className={styles.container}>
          <aside className={styles.imageContainer}>
            <aside
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
            ></aside>
          </aside>
          <div className={styles.extraContainer}>
            {/* Navigate to weather section */}
            <section className={styles.weatherContainer}>
              <div className={styles.weatherInner}>
                <article className={styles.weatherText}>
                  <header className={styles.weather}>
                    <h3>Väderinformation</h3>
                  </header>
                  <article className={styles.weatherContent}>
                    <div className={styles.weather}>
                      <p>
                        Här kan du hitta regelbundet uppdaterade väderprognoser
                        för Homsund, inklusive temperatur, nederbörd och
                        vindförhållanden för de kommande dagarna.
                      </p>
                    </div>
                  </article>
                </article>
                <NavLink to="/väder">
                  {" "}
                  <p className={styles.weatherBtnText}>
                    Kolla vädret i Holmsund
                  </p>{" "}
                </NavLink>
              </div>
            </section>
            {/* Navigate to maps section */}
            <section className={styles.mapContainer}>
              <div className={styles.mapInner}>
                <div className={styles.mapText}>
                  <header className={styles.map}>
                    <h3>Platsinformation</h3>
                  </header>
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
                <NavLink to="/kartor">
                  {" "}
                  <p className={styles.mapBtnText}>
                    Se karta över Holmsund
                  </p>{" "}
                </NavLink>
              </div>
            </section>
          </div>
        </article>
      </header>
    </section>
  );
};

export default Extra;

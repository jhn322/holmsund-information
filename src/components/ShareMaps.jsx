import React from "react";
// CSS
import styles from "../styles/ShareMaps.module.css";

const ShareMaps = () => {
  return (
    <div className={styles.container}>
      <header className={styles.inner}>
        <div className={styles.story}>
          <div className={styles.storyHeader}>
            <span className={styles.circle}>⬤</span>
            <span className={styles.storyText}>Dela din story</span>
            <span className={styles.storyHashtag}>#Holmsund</span>
          </div>
          <div className={styles.adress}>
            <p>
              Kulgränd 1 Holmsund, Umeå Västerbotten, Sverige 910 20
              Koordinater: 63.7066° N, 20.3686° E
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ShareMaps;

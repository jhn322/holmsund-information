import React from "react";

// CSS
import styles from "../styles/ShareMaps.module.css";

const ShareMaps = () => {
  return (
    <div className={styles.container}>
      <header className={styles.inner}>
        <div className={styles.story}>
          <div className={styles.storyHeader}>
            <h3 className={styles.storyText}>
              Dela din story <span className={styles.circle}>⬤</span>{" "}
            </h3>
            <span className={styles.storyHashtag}>#Holmsund</span>
          </div>
          <div className={styles.adress}>
            <p>Kulgränd 1 Holmsund, Umeå Västerbotten</p>
            <p>Sverige 913 32</p>
            <p>63.7066° N, 20.3686° E</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ShareMaps;

import React from "react";

// CSS
import styles from "../../styles/home/Separator.module.css";

const Separator = () => {
  return (
    <aside>
      <div className={styles.separatorContainer}>
        <div className={styles.separatorFirst}></div>
        <div className={styles.separatorContent}>
          <p className={styles.separatorText}>
            Här hittar du de senaste nyheterna om Holmsunds tätort, platser,
            restauranger, aktiviteter och mycket mer. Dela med dig av din
            upplevelse på
            <a
              href="https://x.com/search?q=%23holmsund&src=typeahead_click"
              target="_blank"
              rel="noopener noreferrer"
              alt="Twitter website"
            >
              <span className={styles.link}>Twitter,</span>
            </a>
            <a
              href="https://www.instagram.com/explore/locations/c2142469/holmsund-sweden/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              alt="Instagram website"
            >
              <span className={styles.link}>Instagram</span>
            </a>
            och
            <a
              href="https://www.facebook.com/groups/415551751837063/?locale=sv_SE"
              target="_blank"
              rel="noopener noreferrer"
              alt="Facebook website"
            >
              <span className={styles.link}>Facebook</span>
            </a>
            med hashtagen,
            <a
              href="https://www.instagram.com/explore/locations/240089071/holmsund-vasterbottens-lan-sweden/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Instagram website"
            >
              <span className={styles.hashtag}>#Holmsund</span>
            </a>
          </p>
        </div>
        <div className={styles.separatorSecond}>
          <h2 className={styles.separatorSecondTitle}>Aktiviteter</h2>
          <p className={styles.separatorSecondText}>
            Utforska Holmsund i dag, från spännande utomhusäventyr till långa
            motionsspår och mysiga kaféer!
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Separator;

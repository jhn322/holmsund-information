import React from "react";

// CSS
import styles from "../../styles/home/Separator.module.css";

// Components
import { trackSeparatorLinkClick } from "../analytics/links";

const Separator = () => {
  // Google Analytics
  const handleLinkClick = (linkText, linkUrl) => {
    trackSeparatorLinkClick(linkText, linkUrl);
  };

  return (
    <section>
      <main className={styles.separatorContainer}>
        <div className={styles.separatorFirst}></div>
        <article className={styles.separatorContent}>
          <p className={styles.separatorText}>
            Här hittar du de senaste nyheterna om Holmsunds tätort, platser,
            restauranger, aktiviteter och mycket mer. Dela med dig av din
            upplevelse på
            <a
              href="https://x.com/search?q=%23holmsund&src=typeahead_click"
              target="_blank"
              rel="noopener noreferrer"
              alt="Twitter website"
              onClick={() =>
                handleLinkClick(
                  "Twitter",
                  "https://x.com/search?q=%23holmsund&src=typeahead_click"
                )
              }
            >
              <span className={styles.link}>Twitter,</span>
            </a>
            <a
              href="https://www.instagram.com/explore/locations/c2142469/holmsund-sweden/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              alt="Instagram website"
              onClick={() =>
                handleLinkClick(
                  "Instagram",
                  "https://www.instagram.com/explore/locations/c2142469/holmsund-sweden/?hl=en"
                )
              }
            >
              <span className={styles.link}>Instagram</span>
            </a>
            och
            <a
              href="https://www.facebook.com/groups/415551751837063/?locale=sv_SE"
              target="_blank"
              rel="noopener noreferrer"
              alt="Facebook website"
              onClick={() =>
                handleLinkClick(
                  "Facebook",
                  "https://www.facebook.com/groups/415551751837063/?locale=sv_SE"
                )
              }
            >
              <span className={styles.link}>Facebook</span>
            </a>
            med hashtagen,
            <a
              href="https://www.instagram.com/explore/locations/240089071/holmsund-vasterbottens-lan-sweden/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Instagram website"
              onClick={() =>
                handleLinkClick(
                  "Instagram hashtag",
                  "https://www.instagram.com/explore/locations/240089071/holmsund-vasterbottens-lan-sweden/"
                )
              }
            >
              <span className={styles.hashtag}>#Holmsund</span>
            </a>
          </p>
        </article>
        <section className={styles.separatorSecond}>
          <h2 className={styles.separatorSecondTitle}>Aktiviteter</h2>
          <p className={styles.separatorSecondText}>
            Utforska Holmsund i dag, från spännande utomhusäventyr till långa
            motionsspår och mysiga kaféer!
          </p>
        </section>
      </main>
    </section>
  );
};

export default Separator;

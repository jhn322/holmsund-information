import React from "react";
import styles from "../styles/Spotlight.module.css";

// Images
import cardImage1 from "../assets/image1.jpg";
import cardImage2 from "../assets/image2.jpg";
import cardImage3 from "../assets/image3.jpg";
import cardImage4 from "../assets/image4.jpg";
import cardImage5 from "../assets/image5.jpg";
import cardImage6 from "../assets/image6.jpg";
import cardImage7 from "../assets/image7.jpg";
import cardImage8 from "../assets/image8.jpg";

const Spotlight = () => {
  return (
    <section>
      {/* Image 1 */}
      <div className={styles.spotlightContainer}>
        <div className={styles.spotlightInner}>
          <div className={styles.spotlightTitle}>
            <h2>Upptäck Holmsund</h2>
          </div>
          <div className={styles.spotlightCardContainer}>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage1})` }}
              >
                {/* Image 2 */}
                <div className={styles.cardOverlay}>
                  <h3>Text here</h3>
                </div>
              </div>
            </div>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage2})` }}
              >
                {/* Image 3 */}
                <div className={styles.cardOverlay}>
                  <h3>Text here</h3>
                </div>
              </div>
            </div>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage3})` }}
              >
                {/* Image 4 */}
                <div className={styles.cardOverlay}>
                  <h3>Text here</h3>
                </div>
              </div>
            </div>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage4})` }}
              >
                {/* Image 5 */}
                <div className={styles.cardOverlay}>
                  <h3>Text here</h3>
                </div>
              </div>
            </div>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage5})` }}
              >
                {/* Image 6 */}
                <div className={styles.cardOverlay}>
                  <h3>Text here</h3>
                </div>
              </div>
            </div>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage6})` }}
              >
                {/* Image 7 */}
                <div className={styles.cardOverlay}>
                  <h3>Text here</h3>
                </div>
              </div>
            </div>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage7})` }}
              >
                {/* Image 8 */}
                <div className={styles.cardOverlay}>
                  <h3>Text here</h3>
                </div>
              </div>
            </div>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage8})` }}
              >
                <div className={styles.cardOverlay}>
                  <h3>Text here</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;

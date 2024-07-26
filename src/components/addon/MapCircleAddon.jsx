import React from "react";
import styles from "../../styles/home/ContentCircle.module.css";
import styles2 from "../../styles/addon/AllCircleAddon.module.css";
import circle1Image from "../../assets/other/mapCircle.jpg";
import circle2Image from "../../assets/other/circleYellow.png";

const MapCircleAddon = () => {
  return (
    <section className={styles.contentContainer}>
      <div className={styles.innerContent}>
        <article className={styles.content}>
          <div className={`${styles.textContent} ${styles2.hidden}`}>
            <header>
              <h1
                className={`${styles2.titleContent} ${styles2.fadeInSlideIn}`}
              >
                Kartor
              </h1>
            </header>
            <p
              className={`${styles.paragraphContent} ${styles2.fadeInSlideIn}`}
            >
              Utforska Holmsund med kartor som ger en översiktlig bild av
              stadsplanering, grönområden och infrastruktur, perfekt för att
              navigera och upptäcka vår samhälls charm och funktioner.
            </p>
          </div>
        </article>
      </div>
      <aside className={styles2.circleContainer}>
        <div className={styles.circleBackground}>
          <h2 className={styles2.circleTitle}>double circle</h2>
          <img
            src={circle2Image}
            className={styles.circleBack}
            alt="Gul cirkel bild"
          />
          <img
            src={circle1Image}
            className={styles.circleFront}
            alt="Bild på karta bakgrund"
          />
        </div>
      </aside>
    </section>
  );
};

export default MapCircleAddon;

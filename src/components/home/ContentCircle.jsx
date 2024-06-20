import { useEffect, useRef } from "react";

// CSS
import styles from "../../styles/home/ContentCircle.module.css";

// Images
import circle1Image from "../../assets/other/circle1.png";
import circle2Image from "../../assets/other/circle2.png";

const ContentCircle = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const contentTop = contentRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (contentTop < windowHeight * 0.75) {
        contentRef.current.classList.add(styles.fadeInSlideIn);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.contentContainer}>
      <div className={styles.innerContent}>
        <article className={styles.content}>
          <div
            ref={contentRef}
            className={`${styles.textContent} ${styles.hidden}`}
          >
            <header className={styles.headerTitle}>
              <h2 className={styles.titleContent}>Holmsund, Västerbotten</h2>
              <h3 className={styles.undertitleContent}>
                LOKAL OCH GLOBAL. ÄVENTYRLIG OCH AVSLAPPNAD.
              </h3>
            </header>
            <p className={styles.paragraphContent}>
              Holmsund, en mångsidig ort i Västerbotten, utmärker sig genom sin
              charmiga hamn och natursköna omgivningar. Beläget vid Bottenvikens
              kust, lockar Holmsund med sina mångsidiga fritidsaktiviteter och
              genuina atmosfär. Med en historia präglad av sjöfart och närhet
              till naturen, erbjuder Holmsund besökare och invånare en unik
              upplevelse av den norrländska livsstilen. Välkommen.
            </p>
          </div>
        </article>
      </div>
      <aside className={styles.circleContainer}>
        <div className={styles.circleBackground}>
          <h2>double circle</h2>
          <img
            src={circle2Image}
            className={styles.circleBack}
            alt="Circle 2"
          />
          <img
            src={circle1Image}
            className={styles.circleFront}
            alt="Circle 1"
          />
        </div>
      </aside>
    </section>
  );
};

export default ContentCircle;

import { useEffect, useRef } from "react";

// CSS
import styles from "../styles/ContentCircle.module.css";

// Images
import circle1Image from "../assets/circle1.png";
import circle2Image from "../assets/circle2.png";

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
        <div className={styles.content}>
          <article
            ref={contentRef}
            className={`${styles.textContent} ${styles.hidden}`}
          >
            <h2 className={styles.titleContent}>Holmsund, Umeå</h2>
            <h3 className={styles.undertitleContent}>
              DET HÄR ÄR EN LÅNG UNDERRUBRIK. COOLT.
            </h3>
            <p className={styles.paragraphContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus non nesciunt dolor aut, veniam mollitia quaerat
              aperiam, obcaecati sit optio architecto itaque repellendus
              cupiditate autem minima perferendis tenetur a vitae!
            </p>
          </article>
        </div>
      </div>
      <article className={styles.circleContainer}>
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
      </article>
    </section>
  );
};

export default ContentCircle;

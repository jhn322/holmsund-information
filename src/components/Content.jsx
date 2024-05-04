import React, { useEffect, useRef } from "react";
import styles from "../styles/Content.module.css";

const Content = () => {
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
    </section>
  );
};

export default Content;

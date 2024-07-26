import React, { useEffect, useRef } from "react";
import styles from "../../styles/addon/SeparatorAddon.module.css";

const Separator = () => {
  const h2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animated);
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.1 }
    );

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => {
      if (h2Ref.current) {
        observer.unobserve(h2Ref.current);
      }
    };
  }, []);

  return (
    <section>
      <div className={styles.separatorContainer}>
        <div className={styles.separatorFirst}>
          <h2 ref={h2Ref}>Mer att upptäcka</h2>
        </div>
      </div>
    </section>
  );
};

export default Separator;

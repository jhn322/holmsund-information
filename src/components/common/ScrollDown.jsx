import { useState, useEffect } from "react";
import { trackScrollDownElementClick } from "../analytics/common";
import { RxChevronDown } from "react-icons/rx";
import styles from "../../styles/common/ScrollDown.module.css";

const ScrollDown = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0.1 * window.innerHeight) {
        setVisible(false);

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
    setVisible(false);

    // Google Analytics
    trackScrollDownElementClick("icon", "Scroll Down", null);
  };

  if (!visible) {
    return null;
  }

  return (
    <main>
      {/* Scroll down button */}
      <article
        className={`${styles.scrollDown} ${styles.jump}`}
        onClick={scrollDown}
      >
        <RxChevronDown
          className={styles.scrollIcon}
          aria-label="Scolla ner ikon"
        />
      </article>
    </main>
  );
};

export default ScrollDown;

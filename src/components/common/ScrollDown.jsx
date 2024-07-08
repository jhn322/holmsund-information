import { useState, useEffect } from "react";
import { trackScrollDownElementClick } from "../analytics/common";
import { RxChevronDown } from "react-icons/rx";
import styles from "../../styles/common/ScrollDown.module.css";

const ScrollDown = () => {
  const [visible, setVisible] = useState(true);
  const [used, setUsed] = useState(() => {
    localStorage.getItem("ScrollDownUsed") === "true";
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0.1 * window.innerHeight) {
        setVisible(false);
        setUsed(true);
        localStorage.setItem("scrollDownUsed", "true");
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
    setUsed(true);
    localStorage.setItem("scrollDownUsed", "true");

    // Google Analytics
    trackScrollDownElementClick("icon", "Scroll Down", null);
  };

  if (used) {
    return null;
  }

  return (
    <main>
      {/* Scroll down button */}
      <article
        className={`${styles.scrollDown} ${!visible && styles.invisible} ${
          styles.jump
        }`}
        onClick={scrollDown}
      >
        <RxChevronDown className={styles.scrollIcon} />
      </article>
    </main>
  );
};

export default ScrollDown;

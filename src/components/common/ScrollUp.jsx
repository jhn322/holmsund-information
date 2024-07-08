import { useState, useEffect } from "react";
import { trackScrollUpElementClick } from "../analytics/common";
import { RxChevronUp } from "react-icons/rx";
import styles from "../../styles/common/ScrollUp.module.css";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 0.2 * window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scrolls to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Google Analytics
    trackScrollUpElementClick("icon", "Scroll Up", null);
  };

  return (
    <main>
      {/* Scroll to top button */}
      <article
        className={`${styles.scrollUp} ${!visible && styles.invisible}`}
        onClick={scrollToTop}
      >
        <RxChevronUp className={styles.scrollIcon} />
      </article>
    </main>
  );
};

export default ScrollUp;

import { useState, useEffect } from "react";

// Icons
import { FiChevronUp } from "react-icons/fi";

// CSS
import styles from "../styles/ScrollUp.module.css";

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
  };

  return (
    <div>
      {/* Scroll to top button */}
      <div
        className={`${styles.scrollTop} ${!visible && styles.invisible}`}
        onClick={scrollToTop}
      >
        <FiChevronUp strokeWidth={1} className={styles.scrollIcon} />
      </div>
    </div>
  );
};

export default ScrollUp;

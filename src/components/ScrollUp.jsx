import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import styles from "../styles/ScrollUp.module.css";

const ScrollUp = ({ scrollY }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(scrollY <= 0.2 * window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

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
        className={`${styles.scrollTop} ${visible && styles.invisible}`}
        onClick={scrollToTop}
      >
        <FiChevronUp strokeWidth={3} className={styles.scrollIcon} />
      </div>
    </div>
  );
};

export default ScrollUp;

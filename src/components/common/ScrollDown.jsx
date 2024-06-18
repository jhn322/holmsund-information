import { useState, useEffect } from "react";

// Icons
import { RxChevronDown } from "react-icons/rx";

// CSS
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
    localStorage.getItem("scrollDownUsed", "true");
  };

  if (used) {
    return null;
  }

  return (
    <div>
      {/* Scroll down button */}
      <div
        className={`${styles.scrollDown} ${!visible && styles.invisible} ${
          styles.jump
        }`}
        onClick={scrollDown}
      >
        <RxChevronDown className={styles.scrollIcon} />
      </div>
    </div>
  );
};

export default ScrollDown;

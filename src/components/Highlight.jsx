import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import styles from "../styles/Highlight.module.css";

const MAX_VISIBILITY = 3;

const Highlight = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 100 && active < count - 1) {
      setActive((prevActive) => prevActive + 1);
    }

    if (touchStartX - touchEndX < -100 && active > 0) {
      setActive((prevActive) => prevActive - 1);
    }
  };

  return (
    <div
      className={styles.highlightContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.carousel}>
        {active > 0 && (
          <span
            className={`${styles.navLeft} ${styles.nav}`}
            onClick={() => setActive((i) => i - 1)}
          >
            <FiChevronLeft />
          </span>
        )}
        {React.Children.map(children, (child, i) => (
          <div
            className={styles.cardContainer}
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            {child}
          </div>
        ))}
        {active < count - 1 && (
          <span
            className={`${styles.navRight} ${styles.nav}`}
            onClick={() => setActive((i) => i + 1)}
          >
            <FiChevronRight />
          </span>
        )}
      </div>
    </div>
  );
};

export default Highlight;

import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { activitySlides6 } from "../data/ActivityAddonSet";
import { trackActivityElementClick } from "../analytics/addon";
import { RxArrowRight } from "react-icons/rx";
import styles from "../../styles/home/Activity.module.css";
import styles2 from "../../styles/addon/ActivityAddon6.module.css";
import featuredCircle from "../../assets/other/circle.png";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [deltaX, setDeltaX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const initialTouch = useRef({ x: 0, y: 0 });
  const location = useLocation();
  const currentPath = location.pathname;
  const threshold = 10;

  const truncateDescription = (text = "", wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? activitySlides6.length - 1 : prevIndex - 1
    );
    setDeltaX(0);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === activitySlides6.length - 1 ? 0 : prevIndex + 1
    );
    setDeltaX(0);
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    initialTouch.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    const deltaX = touch.clientX - initialTouch.current.x;
    const deltaY = touch.clientY - initialTouch.current.y;

    // Check if horizontal swipe is dominant
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      event.preventDefault();
      setIsSwiping(true);
      setDeltaX(deltaX);
    } else {
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    if (isSwiping) {
      if (deltaX < -threshold) {
        handleNext();
      } else if (deltaX > threshold) {
        handlePrev();
      }
    }
    setDeltaX(0);
    setIsSwiping(false);
  };

  // Google Analytics
  const trackElementClickEvent = (elementType, elementText, elementUrl) => {
    trackActivityElementClick(elementType, elementText, elementUrl);
  };

  return (
    <section
      className={styles.carousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Galleri karusell"
    >
      <main className={styles.container}>
        <div className={styles.carouselInner}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(calc(-${
                activeIndex * 100
              }% + ${deltaX}px))`,
              transition: isSwiping ? "none" : "transform 0.3s ease",
            }}
          >
            {activitySlides6.map((slide, index) => (
              <figure
                key={index}
                className={`${styles.slide} ${
                  index === activeIndex ? styles.active : ""
                } ${index === hoveredIndex ? styles.hovered : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                tabIndex="0"
                aria-label={`${slide.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    trackElementClickEvent(
                      "image_link",
                      slide.title,
                      slide.link
                    );
                    window.location.href = slide.link;
                  }
                }}
              >
                {currentPath === slide.link ? (
                  <div
                    className={`${styles.currentPageOverlay} ${styles2.currentPageOverlay}`}
                  >
                    <img
                      src={slide.src}
                      alt={`Slide ${index + 1}`}
                      className={`${styles.currentPageImage} ${styles2.currentPageImage}`}
                    />
                    <div
                      className={`${styles.currentPageMessage} ${styles2.currentPageMessage}`}
                    >
                      Nuvarande Sida
                    </div>
                  </div>
                ) : (
                  <a
                    href={slide.link}
                    onClick={(e) => {
                      if (currentPath === slide.link) {
                        e.preventDefault();
                        return;
                      }
                      trackElementClickEvent(
                        "image_link",
                        slide.title,
                        slide.link
                      );
                    }}
                  >
                    <div className={styles.imgContainer}>
                      <img src={slide.src} alt={slide.title} />
                      <div className={styles.slideCounter}>
                        {index + 1}/{activitySlides6.length}
                      </div>
                    </div>
                  </a>
                )}
                <figcaption className={styles.caption}>
                  <a
                    href={slide.link}
                    onClick={(e) => {
                      if (currentPath === slide.link) {
                        e.preventDefault();
                        return;
                      }
                      trackElementClickEvent(
                        "image_link",
                        slide.title,
                        slide.link
                      );
                    }}
                  >
                    <h3 className={styles.captionTitle}>{slide.title}</h3>
                  </a>
                  <p>{truncateDescription(slide.description, 25)}</p>
                  <aside className={styles.linkContainer}>
                    <a
                      className={styles.captionLink}
                      href={slide.link}
                      onClick={(e) => {
                        if (currentPath === slide.link) {
                          e.preventDefault();
                          return;
                        }
                        trackElementClickEvent(
                          "image_link",
                          slide.title,
                          slide.link
                        );
                      }}
                      aria-label={`Läs mer om ${slide.title}`}
                    >
                      Läs Mer
                    </a>
                  </aside>
                  <div className={styles.arrowContainer}>
                    <a
                      href={slide.link}
                      onClick={(e) => {
                        if (currentPath === slide.link) {
                          e.preventDefault();
                          return;
                        }
                        trackElementClickEvent(
                          "image_link",
                          slide.title,
                          slide.link
                        );
                      }}
                      aria-label={`Läs mer om ${slide.title}`}
                    >
                      <RxArrowRight className={styles.arrowIcon} />
                    </a>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

const ActivityAddon6 = () => {
  return (
    <aside
      className={`${styles.featuredContainer} ${styles2.featuredContainer}`}
    >
      <div className={`${styles.featuredImage} ${styles2.featuredImage}`}></div>
      <section className={`${styles.featuredInner} ${styles2.featuredInner}`}>
        <div
          className={styles.featuredCircle}
          style={{ backgroundImage: `url(${featuredCircle})` }}
        ></div>
        <h2 className={styles.featuredTitle}>Varierade Händelser</h2>
        <Carousel />
      </section>
    </aside>
  );
};

export default ActivityAddon6;

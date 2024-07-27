import { useState, useRef, useCallback } from "react";
import { activitySet } from "../data/ActivitySet";
import { trackActivityElementClick } from "../analytics/home";
import { RxArrowRight, RxChevronLeft, RxChevronRight } from "react-icons/rx";
import styles from "../../styles/home/Activity.module.css";
import featuredCircle from "../../assets/other/circle.png";

const ActivityCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [deltaX, setDeltaX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const initialTouch = useRef({ x: 0, y: 0 });
  const threshold = 10;

  const truncateDescription = (text = "", wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  // Handle carousel prev/next
  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? activitySet.length - 1 : prevIndex - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === activitySet.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    initialTouch.current = { x: touch.clientX, y: touch.clientY };
    setIsSwiping(true);
  };

  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    const deltaX = touch.clientX - initialTouch.current.x;
    const deltaY = touch.clientY - initialTouch.current.y;

    // Check if horizontal swipe is dominant
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
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

  // Prevent default behavior for navigation button clicks
  const handleNavButtonClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  return (
    <section
      className={styles.carousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Aktiviteter karusell"
    >
      <main className={styles.container}>
        <div className={styles.carouselInner}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(calc(-${
                activeIndex * 100
              }% + ${deltaX}px))`,
              transition: isSwiping ? "none" : "transform 0.5s ease",
            }}
          >
            {activitySet.map((slide, index) => (
              <figure
                key={index}
                className={`${styles.slide} ${
                  index === hoveredIndex ? styles.hovered : ""
                }`}
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
                <a
                  href={slide.link}
                  onClick={() =>
                    trackElementClickEvent(
                      "image_link",
                      slide.title,
                      slide.link
                    )
                  }
                >
                  <div className={styles.imgContainer}>
                    <img src={slide.src} alt={slide.title} />
                    <button
                      className={styles.navBtnLeft}
                      onClick={(e) => {
                        handleNavButtonClick(e);
                        handlePrev();
                      }}
                      aria-label="Previous Slide"
                    >
                      <RxChevronLeft strokeWidth={0.8} />
                    </button>
                    <button
                      className={styles.navBtnRight}
                      onClick={(e) => {
                        handleNavButtonClick(e);
                        handleNext();
                      }}
                      aria-label="Next Slide"
                    >
                      <RxChevronRight strokeWidth={0.8} />
                    </button>
                    <div className={styles.slideCounter}>
                      {index + 1}/{activitySet.length}
                    </div>
                  </div>
                </a>
                <figcaption className={styles.caption}>
                  <a
                    href={slide.link}
                    onClick={() =>
                      trackElementClickEvent(
                        "caption_title",
                        slide.title,
                        slide.link
                      )
                    }
                  >
                    <h3 className={styles.captionTitle}>{slide.title}</h3>
                  </a>
                  <p>{truncateDescription(slide.description, 25)}</p>
                  <aside className={styles.linkContainer}>
                    <a
                      className={styles.captionLink}
                      href={slide.link}
                      onClick={() =>
                        trackElementClickEvent(
                          "caption_link",
                          "Läs Mer",
                          slide.link
                        )
                      }
                      aria-label={`Läs mer om ${slide.title}`}
                    >
                      Läs Mer
                    </a>
                  </aside>
                  <div className={styles.arrowContainer}>
                    <a
                      href={slide.link}
                      onClick={() =>
                        trackElementClickEvent(
                          "arrow_icon",
                          "Arrow Icon",
                          slide.link
                        )
                      }
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

// Static image side
const Activity = () => {
  return (
    <aside className={styles.featuredContainer}>
      <div className={styles.featuredImage}></div>
      <section className={styles.featuredInner}>
        <div
          className={styles.featuredCircle}
          style={{ backgroundImage: `url(${featuredCircle})` }}
        ></div>
        <h2 className={styles.featuredTitle}>Utvalda Aktiviteter</h2>
        <ActivityCarousel />
      </section>
    </aside>
  );
};

export default Activity;

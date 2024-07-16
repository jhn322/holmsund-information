import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackActivityElementClick } from "../analytics/addon";
import { RxChevronLeft, RxChevronRight, RxArrowRight } from "react-icons/rx";
import styles from "../../styles/home/Activity.module.css";
import styles2 from "../../styles/addon/ActivityAddon3.module.css";
import featuredCircle from "../../assets/other/circle.png";
import image1 from "../../assets/activity/activity1.jpg";
import image2 from "../../assets/activity/activity2.jpg";
import image3 from "../../assets/activity/activity3.jpg";
import image4 from "../../assets/activity/activity4.jpg";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [deltaX, setDeltaX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const initialTouch = useRef({ x: 0, y: 0 });
  const location = useLocation();
  const currentPath = location.pathname;

  const slides = [
    {
      src: image1,
      title: "Vin Festival",
      description:
        "Fira med oss den 8 juni i Kellogg Mall Park. Upplev en fantastisk kväll med utsökta viner från lokala vingårdar, musik och god mat. Ta chansen att träffa vinmakare och delta i exklusiva vinprovningar.",
      link: "/aktiviteter-1",
    },
    {
      src: image2,
      title: "Kattmuseum",
      description:
        "Katten sov lugnt på den mysiga, varma soffan. Utforska vårt kattmuseum där du kan lära dig om katternas historia och deras roll i olika kulturer.",
      link: "/aktiviteter-2",
    },
    {
      src: image3,
      title: "Simlektioner",
      description:
        "Hon skrattade högt åt det roliga skämtet hennes vän berättade. Välkommen till våra simlektioner, där du kan lära dig att simma eller förbättra dina simfärdigheter. Våra erfarna instruktörer ger personlig uppmärksamhet och ser till att varje lektion är både säker och rolig. Perfekt för alla åldrar och nivåer!",
      link: "/aktiviteter-3",
    },
    {
      src: image4,
      title: "Auktionsshow",
      description:
        "De kom tidigt, till deras värds stora glädje. Delta i vår spännande auktionsshow där unika föremål från hela världen går under klubban. Möt samlare och säljare, och kanske gå hem med en oväntad skatt.",
      link: "/aktiviteter-4",
    },
  ];

  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const handlePrev = (event) => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setDeltaX(0);
  };

  const handleNext = (event) => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
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
      if (deltaX < -50) {
        handleNext();
      } else if (deltaX > 50) {
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
      aria-label="Aktiviteter karusell"
    >
      <main className={`${styles.container} ${styles2.container}`}>
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
            {slides.map((slide, index) => (
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
                    </div>
                    <div className={styles.slideCounter}>
                      {index + 1}/{slides.length}
                    </div>
                  </a>
                )}
                <figcaption className={`${styles.caption} ${styles2.caption}`}>
                  <a
                    href={slide.link}
                    onClick={(e) => {
                      if (currentPath === slide.link) {
                        e.preventDefault();
                        return;
                      }
                      trackElementClickEvent(
                        "caption_title",
                        slide.title,
                        slide.link
                      );
                    }}
                  >
                    <h3
                      className={`${styles.captionTitle} ${styles2.captionTitle}`}
                    >
                      {slide.title}
                    </h3>
                  </a>
                  <p>{truncateDescription(slide.description, 25)}</p>
                  <div className={styles.linkContainer}>
                    <a
                      className={`${styles.captionLink} ${styles2.captionLink}`}
                      href={slide.link}
                      onClick={(e) => {
                        if (currentPath === slide.link) {
                          e.preventDefault();
                          return;
                        }
                        trackElementClickEvent(
                          "caption_link",
                          "Läs Mer",
                          slide.link
                        );
                      }}
                      aria-label={`Läs mer om ${slide.title}`}
                    >
                      Läs Mer
                    </a>
                  </div>
                  <div
                    className={`${styles.arrowContainer} ${styles2.arrowContainer}`}
                  >
                    <a
                      href={slide.link}
                      onClick={(e) => {
                        if (currentPath === slide.link) {
                          e.preventDefault();
                          return;
                        }
                        trackElementClickEvent(
                          "arrow_icon",
                          "Arrow Icon",
                          slide.link
                        );
                      }}
                      aria-label={`Läs mer om ${slide.title}`}
                    >
                      <RxArrowRight
                        className={`${styles.arrowIcon} ${styles2.arrowIcon}`}
                      />
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

const ActivityAddon1 = () => {
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
        <h2 className={styles.featuredTitle}>Håll dig Aktiv</h2>
        <Carousel />
      </section>
    </aside>
  );
};

export default ActivityAddon1;

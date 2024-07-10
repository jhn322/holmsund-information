import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackActivityElementClick } from "../analytics/addon";
import { RxChevronLeft, RxChevronRight, RxArrowRight } from "react-icons/rx";
import styles from "../../styles/home/Activity.module.css";
import styles2 from "../../styles/addon/ActivityAddon1.module.css";
import featuredCircle from "../../assets/other/circle.png";
import image1 from "../../assets/discover/discover1.jpg";
import image2 from "../../assets/discover/discover2.jpg";
import image3 from "../../assets/discover/discover3.jpg";
import image4 from "../../assets/discover/discover4.jpg";

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
      link: "/utforska-1",
    },
    {
      src: image2,
      title: "Kattmuseum",
      description:
        "Katten sov lugnt på den mysiga, varma soffan. Utforska vårt kattmuseum där du kan lära dig om katternas historia och deras roll i olika kulturer.",
      link: "/utforska-2",
    },
    {
      src: image3,
      title: "Simlektioner",
      description:
        "Hon skrattade högt åt det roliga skämtet hennes vän berättade. Välkommen till våra simlektioner, där du kan lära dig att simma eller förbättra dina simfärdigheter. Våra erfarna instruktörer ger personlig uppmärksamhet och ser till att varje lektion är både säker och rolig. Perfekt för alla åldrar och nivåer!",
      link: "/utforska-3",
    },
    {
      src: image4,
      title: "Auktionsshow",
      description:
        "De kom tidigt, till deras värds stora glädje. Delta i vår spännande auktionsshow där unika föremål från hela världen går under klubban. Möt samlare och säljare, och kanske gå hem med en oväntad skatt.",
      link: "/utforska-4",
    },
  ];

  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setDeltaX(0);
  };

  const handleNext = () => {
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
            {slides.map((slide, index) => (
              <figure
                key={index}
                className={`${styles.slide} ${
                  index === activeIndex ? styles.active : ""
                } ${index === hoveredIndex ? styles.hovered : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
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
                    onClick={() =>
                      trackElementClickEvent(
                        "image_link",
                        slide.title,
                        slide.link
                      )
                    }
                  >
                    <img src={slide.src} alt={`Slide ${index + 1}`} />
                  </a>
                )}
                <div className={styles.slideCounter}>
                  {index + 1}/{slides.length}
                </div>
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
                  <div className={styles.linkContainer}>
                    <a
                      className={styles.captionLink}
                      href={slide.link}
                      onClick={() =>
                        trackElementClickEvent(
                          "caption_link",
                          "Läs Mer...",
                          slide.link
                        )
                      }
                    >
                      Läs Mer...
                    </a>
                  </div>
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
      <nav className={styles.nav}>
        <span className={styles.navPrev} onClick={handlePrev}>
          <RxChevronLeft strokeWidth={0.2} />
        </span>
        <span className={styles.navNext} onClick={handleNext}>
          <RxChevronRight strokeWidth={0.2} />
        </span>
      </nav>
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
        <h2 className={styles.featuredTitle}>Mer att Utforska</h2>
        <Carousel />
      </section>
    </aside>
  );
};

export default ActivityAddon1;

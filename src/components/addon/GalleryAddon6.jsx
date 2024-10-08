import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { galleryAddonSet6 } from "../data/GalleryAddonSet";
import { trackGalleryElementClick } from "../analytics/addon";
import { RxChevronLeft, RxChevronRight, RxArrowRight } from "react-icons/rx";
import styles from "../../styles/home/Gallery.module.css";
import styles2 from "../../styles/addon/GalleryAddon6.module.css";
import staticGalleryImage from "../../assets/gallery/staticGalleryAddon6.jpg";
import galleryCircle from "../../assets/other/circle.png";

const GalleryAddon6 = ({ title }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [deltaX, setDeltaX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const initialTouch = useRef({ x: 0, y: 0 });
  const threshold = 10;

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevSlide = () => {
    const newIndex =
      (currentIndex - 1 + galleryAddonSet6.length) % galleryAddonSet6.length;
    setCurrentIndex(newIndex);
    setDeltaX(0);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % galleryAddonSet6.length;
    setCurrentIndex(newIndex);
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
      setIsSwiping(true);
      setDeltaX(deltaX);
    } else {
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    if (isSwiping) {
      if (deltaX < -threshold) {
        goToNextSlide();
      } else if (deltaX > threshold) {
        goToPrevSlide();
      }
    }
    setDeltaX(0);
    setIsSwiping(false);
  };

  // Prevent nav buttons to trigger hover on other elements
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleNavMouseEnter = () => setIsNavHovered(true);
  const handleNavMouseLeave = () => setIsNavHovered(false);

  // Google Analytics
  const trackElementClickEvent = (elementType, elementText, elementUrl) => {
    trackGalleryElementClick(elementType, elementText, elementUrl);
  };

  return (
    <section>
      <div className={`${styles.galleryContainer} ${styles2.galleryContainer}`}>
        <figure className={styles.galleryImageContainer}>
          <div className={styles.galleryImageInner}>
            <article
              className={styles.galleryImage}
              style={{ backgroundImage: `url(${staticGalleryImage})` }}
              aria-label="Bild på galleri"
            >
              <div
                className={styles.galleryCircle}
                style={{ backgroundImage: `url(${galleryCircle})` }}
                aria-label="Cirkel bild"
              ></div>
              <h2 className={`${styles.galleryTitle} ${styles2.galleryTitle}`}>
                {title}
              </h2>
            </article>
          </div>
        </figure>
        <section className={styles.galleryCarousel}>
          <article
            className={`${styles.carouselContainer} ${
              styles2.carouselContainer
            } ${isHovered && !isNavHovered ? styles.hover : ""} ${
              isHovered && !isNavHovered ? styles2.hover : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.carouselInner}>
              <div
                className={styles.slider}
                style={{
                  transform: `translateX(calc(-${
                    currentIndex * 100
                  }% + ${deltaX}px))`,
                  transition: isSwiping ? "none" : "transform 0.3s ease", // Disable transition during swipe
                }}
              >
                {galleryAddonSet6.map((image, index) => (
                  <figure
                    key={index}
                    tabIndex="0"
                    className={`${styles.slide} ${
                      index === currentIndex ? styles.active : ""
                    }`}
                  >
                    {currentPath === image.link ? (
                      <div className={styles.currentPageOverlay}>
                        <img
                          src={image.url}
                          alt={`Bild ${index}`}
                          className={styles.currentPageImage}
                        />
                        <div className={styles.currentPageMessage}>
                          Nuvarande Sida
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        to={image.link}
                        onClick={() =>
                          trackElementClickEvent(
                            "carousel_img",
                            image.title,
                            image.link
                          )
                        }
                        aria-label={`Navigera till ${image.title}`}
                      >
                        <img src={image.url} alt={image.title} />
                      </NavLink>
                    )}
                  </figure>
                ))}
              </div>
              <nav
                className={styles.carouselNav}
                onMouseEnter={handleNavMouseEnter}
                onMouseLeave={handleNavMouseLeave}
              >
                <span
                  className={`${styles.navPrev} ${styles2.navPrev}`}
                  onClick={goToPrevSlide}
                  aria-label="Till tidigare bild"
                  role="button"
                >
                  <RxChevronLeft strokeWidth={0.8} />
                </span>
                <span
                  className={`${styles.navNext} ${styles2.navNext}`}
                  onClick={goToNextSlide}
                  aria-label="Till nästa bild"
                  role="button"
                >
                  <RxChevronRight strokeWidth={0.8} />
                </span>
              </nav>
            </div>
            <section
              className={`${styles.carouselText} ${styles2.carouselText}`}
            >
              <header
                className={`${styles.hoverContainer} ${styles2.hoverContainer}`}
              >
                <h2 className={styles.carouselTitle}>
                  <NavLink
                    to={galleryAddonSet6[currentIndex].link}
                    onClick={() =>
                      trackElementClickEvent(
                        "carousel_link",
                        galleryAddonSet6[currentIndex].title,
                        galleryAddonSet6[currentIndex].link
                      )
                    }
                    aria-label={`Läs mer om ${galleryAddonSet6[currentIndex].title}`}
                  >
                    {galleryAddonSet6[currentIndex].title}
                  </NavLink>
                </h2>
                <p>{galleryAddonSet6[currentIndex].text}</p>
                <div className={styles.linkContainer}>
                  <NavLink
                    className={`${styles.carouselLink} ${styles2.carouselLink}`}
                    to={galleryAddonSet6[currentIndex].link}
                    onClick={(e) => {
                      if (currentPath === galleryAddonSet6[currentIndex].link) {
                        e.preventDefault();
                        return;
                      }
                      trackElementClickEvent(
                        "carousel_link",
                        "Läs Mer",
                        galleryAddonSet6[currentIndex].link
                      );
                    }}
                    aria-label={`Läs mer om ${galleryAddonSet6[currentIndex].title}`}
                  >
                    Läs Mer
                  </NavLink>
                </div>
                <div
                  className={`${styles.arrowContainer} ${styles2.arrowContainer}`}
                >
                  <NavLink
                    className={`${styles.carouselLink} ${styles2.carouselLink}`}
                    to={galleryAddonSet6[currentIndex].link}
                    onClick={(e) => {
                      if (currentPath === galleryAddonSet6[currentIndex].link) {
                        e.preventDefault();
                        return;
                      }
                      trackElementClickEvent(
                        "carousel_link",
                        "Läs Mer",
                        galleryAddonSet6[currentIndex].link
                      );
                    }}
                    aria-label={`Navigera till ${galleryAddonSet6[currentIndex].title}`}
                  >
                    <RxArrowRight
                      className={`${styles.arrowIcon} ${styles2.arrowIcon}`}
                    />
                  </NavLink>
                </div>
              </header>
            </section>
          </article>
          <div className={styles.dotPagination}>
            {galleryAddonSet6.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${styles2.dot} ${
                  index === currentIndex ? styles.active : ""
                } ${index === currentIndex ? styles2.active : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Gå till nästa indikator ${index + 1}`}
                role="button"
              ></span>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default GalleryAddon6;

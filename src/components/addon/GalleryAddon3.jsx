import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { trackGalleryElementClick } from "../analytics/addon";
import { RxChevronLeft, RxChevronRight, RxArrowRight } from "react-icons/rx";
import styles from "../../styles/home/Gallery.module.css";
import styles2 from "../../styles/addon/GalleryAddon3.module.css";
import staticGalleryImage from "../../assets/gallery/staticGallery.jpg";
import galleryImage1 from "../../assets/activity/activity1.jpg";
import galleryImage2 from "../../assets/activity/activity2.jpg";
import galleryImage3 from "../../assets/activity/activity3.jpg";
import galleryImage4 from "../../assets/activity/activity4.jpg";
import galleryCircle from "../../assets/other/circle.png";

const GalleryAddon3 = ({ title }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const images = [
    {
      url: galleryImage1,
      title: "Badställe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec, porttitor sem.",
      link: "/aktiviteter-1",
    },
    {
      url: galleryImage2,
      title: "Skog",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec, porttitor sem.",
      link: "/aktiviteter-2",
    },
    {
      url: galleryImage3,
      title: "Vattentorn",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec.",
      link: "/aktiviteter-3",
    },
    {
      url: galleryImage4,
      title: "Storsjöskolan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum.",
      link: "/aktiviteter-4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [deltaX, setDeltaX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const initialTouch = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setDeltaX(0);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
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
        goToNextSlide();
      } else if (deltaX > 50) {
        goToPrevSlide();
      }
    }
    setDeltaX(0);
    setIsSwiping(false);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNextSlide,
    onSwipedRight: goToPrevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

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
            >
              <div
                className={styles.galleryCircle}
                style={{ backgroundImage: `url(${galleryCircle})` }}
              ></div>
              <h2 className={`${styles.galleryTitle} ${styles2.galleryTitle}`}>
                {title}
              </h2>
            </article>
          </div>
        </figure>
        <section className={styles.galleryCarousel}>
          <article
            {...swipeHandlers}
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
                {images.map((image, index) => (
                  <figure
                    key={index}
                    className={`${styles.slide} ${
                      index === currentIndex ? styles.active : ""
                    }`}
                  >
                    {currentPath === image.link ? (
                      <div className={styles.currentPageOverlay}>
                        <img
                          src={image.url}
                          alt={`Slide ${index}`}
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
                      >
                        <img src={image.url} alt={`Slide ${index}`} />
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
                >
                  <RxChevronLeft strokeWidth={0.8} />
                </span>
                <span
                  className={`${styles.navNext} ${styles2.navNext}`}
                  onClick={goToNextSlide}
                >
                  <RxChevronRight strokeWidth={0.8} />
                </span>
              </nav>
            </div>
            <section
              className={`${styles.carouselText} ${styles2.carouselText}`}
            >
              <NavLink to={images[currentIndex].link}>
                <header
                  className={`${styles.hoverContainer} ${styles2.hoverContainer}`}
                >
                  <h2>{images[currentIndex].title}</h2>
                  <p>{images[currentIndex].text} </p>
                  <div className={styles.linkContainer}>
                    <a
                      className={`${styles.carouselLink} ${styles2.carouselLink}`}
                      href={images[currentIndex].link}
                      onClick={(e) => {
                        if (currentPath === images[currentIndex].link) {
                          e.preventDefault();
                          return;
                        }
                        trackElementClickEvent(
                          "carousel_link",
                          "Läs Mer",
                          images[currentIndex].link
                        );
                      }}
                    >
                      Läs Mer
                    </a>
                  </div>
                  <div className={styles.arrowContainer}>
                    <a
                      className={`${styles.carouselLink} ${styles2.carouselLink}`}
                      href={images[currentIndex].link}
                      onClick={(e) => {
                        if (currentPath === images[currentIndex].link) {
                          e.preventDefault();
                          return;
                        }
                        trackElementClickEvent(
                          "carousel_link",
                          "Läs Mer",
                          images[currentIndex].link
                        );
                      }}
                    >
                      <RxArrowRight
                        className={`${styles.arrowIcon} ${styles2.arrowIcon}`}
                      />
                    </a>
                  </div>
                </header>
              </NavLink>
            </section>
          </article>
          <div className={styles.dotPagination}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${styles2.dot} ${
                  index === currentIndex ? styles.active : ""
                } ${index === currentIndex ? styles2.active : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default GalleryAddon3;

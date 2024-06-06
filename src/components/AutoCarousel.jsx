import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Icons
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

// CSS
import styles from "../styles/GalleryCarousel.module.css";

const AutoCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlideTimeout, setAutoSlideTimeout] = useState(null);

  useEffect(() => {
    startAutoSlide();

    return () => {
      clearTimeout(autoSlideTimeout);
    };
  }, [currentIndex]);

  const startAutoSlide = () => {
    clearTimeout(autoSlideTimeout);

    const timeout = setTimeout(goToNextSlide, 5000);
    setAutoSlideTimeout(timeout);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    startAutoSlide();
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    startAutoSlide();
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    startAutoSlide();
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselInner}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            {/* Img with NavLink to other pages */}
            <NavLink to={image.link}>
              <img src={image.url} alt={`Slide ${index}`} />
            </NavLink>
          </div>
        ))}
        <span className={styles.prev} onClick={goToPrevSlide}>
          <HiChevronLeft strokeWidth={1.5} />
        </span>
        <span className={styles.next} onClick={goToNextSlide}>
          <HiChevronRight strokeWidth={1.5} />
        </span>
      </div>
      <div className={styles.carouselText}>
        <NavLink to={images[currentIndex].link}>
          <div className={styles.hoverContainer}>
            <h2>{images[currentIndex].title}</h2>
            <p>
              {images[currentIndex].text}{" "}
              <span className={styles.learnMore}>Läs Mer...</span>
            </p>
          </div>
        </NavLink>
      </div>
      <div className={styles.dotPagination}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;

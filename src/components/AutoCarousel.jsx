import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../styles/GalleryCarousel.module.css";
import { NavLink } from "react-router-dom";

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
          <FaChevronLeft />
        </span>
        <span className={styles.next} onClick={goToNextSlide}>
          <FaChevronRight />
        </span>
      </div>
      <div className={styles.carouselText}>
        <NavLink to={images[currentIndex].link}>
          <h2>{images[currentIndex].title}</h2>
        </NavLink>
        <p>{images[currentIndex].text}</p>
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

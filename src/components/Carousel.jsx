// Carousel.js
import React, { useEffect, useState } from "react";
import styles from "../styles/Gallery.module.css";

const Carousel = ({ images }) => {
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
            className={
              index === currentIndex
                ? `${styles.slide} ${styles.active}`
                : styles.slide
            }
          >
            {index === currentIndex && (
              <img src={image.url} alt={`Slide ${index}`} />
            )}
          </div>
        ))}
        <button className={styles.prevBtn} onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className={styles.nextBtn} onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
      <div className={styles.carouselText}>
        <h2>{images[currentIndex].title}</h2>
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

export default Carousel;

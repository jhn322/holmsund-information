import React, { useState } from "react";
import styles from "../styles/Gallery.module.css";

const Carousel = ({ images, title, text }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselInner}>
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentIndex
                ? styles.slide + " " + styles.active
                : styles.slide
            }
          >
            {index === currentIndex && (
              <img src={image} alt={`Slide ${index}`} />
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
        <h2>{title}</h2>
        <p>{text}</p>
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

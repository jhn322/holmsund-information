import { useState, useEffect, useRef } from "react";
import { RxChevronLeft, RxChevronRight, RxCross2 } from "react-icons/rx";
import styles from "../../styles/addon/PhotoGridAddon.module.css";

const PhotoGridAddon = ({ photos }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRefs = useRef([]);

  const openZoom = (index) => {
    setCurrentIndex(index);
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const showPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = galleryRefs.current;
    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <section>
      <div className={styles.gallery}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`${styles.galleryItem} ${styles[`item${index + 1}`]}`}
            onClick={() => openZoom(index)}
            ref={(el) => (galleryRefs.current[index] = el)} // Assign ref
          >
            <img src={photo} alt={`Gallery photo ${index + 1}`} />
          </div>
        ))}
      </div>

      {isZoomed && (
        <div className={styles.zoomImgOverlay} onClick={closeZoom}>
          <div className={styles.zoomImgContainer}>
            <img
              src={photos[currentIndex]}
              alt={`Gallery photo ${currentIndex + 1}`}
              className={styles.zoomImg}
            />
          </div>
          <button
            className={`${styles.zoomBtn} ${styles.zoomPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            <RxChevronLeft className={styles.navIcon} />
          </button>
          <button
            className={`${styles.zoomBtn} ${styles.zoomNext}`}
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            <RxChevronRight className={styles.navIcon} />
          </button>
          <button
            className={`${styles.close}`}
            onClick={(e) => {
              e.stopPropagation();
              closeZoom();
            }}
          >
            <RxCross2 className={styles.closeIcon} />
          </button>
          <div className={styles.dotPagination}>
            {photos.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  index === currentIndex ? styles.activeDot : ""
                }`}
                onClick={(e) => {
                  setCurrentIndex(index);
                  e.stopPropagation();
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGridAddon;

import { useState, useRef } from "react";
import {
  RxChevronLeft,
  RxChevronRight,
  RxChevronDown,
  RxChevronUp,
  RxZoomIn,
  RxCross2,
} from "react-icons/rx";
import styles from "../../styles/addon/SlideshowAddon.module.css";

const ZoomedImage = ({ images, currentIndex, onClose, onPrev, onNext }) => (
  <div className={styles.zoomImgOverlay} onClick={onClose}>
    <div
      className={styles.zoomImgContainer}
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].text}
        className={styles.zoomImg}
        onClick={onClose}
      />
      <button
        className={styles.close}
        onClick={onClose}
        aria-label="Stäng zoom läge"
      >
        <RxCross2 className={styles.closeIcon} />
      </button>
      <button
        className={`${styles.zoomBtn} ${styles.zoomPrev}`}
        onClick={onPrev}
        aria-label="Tidigare bild"
      >
        <RxChevronLeft className={styles.navIcon} />
      </button>
      <button
        className={`${styles.zoomBtn} ${styles.zoomNext}`}
        onClick={onNext}
        aria-label="Nästa bild"
      >
        <RxChevronRight className={styles.navIcon} />
      </button>
    </div>
    <div className={styles.dotPagination}>
      {images.map((_, index) => (
        <span
          key={index}
          className={`${styles.dot} ${
            index === currentIndex ? styles.activeDot : ""
          }`}
          onClick={() => setCurrentIndex(index)}
          aria-label={`Gå till bild ${index + 1}`}
        />
      ))}
    </div>
  </div>
);

const SlideshowAddon = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState(null);
  const [isCaptionExpanded, setIsCaptionExpanded] = useState(true);
  const initialTouch = useRef({ x: 0, y: 0 });
  const threshold = 10;

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

  const handleZoom = (index) => {
    setZoomedIndex(index);
  };

  const toggleCaption = () => {
    setIsCaptionExpanded(!isCaptionExpanded);
  };

  return (
    <section>
      <div className={styles.container}>
        <header className={styles.title}>
          <h3>Mer bilder</h3>
        </header>
        <main>
          <article
            className={styles.slideshowContainer}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.slideshowInner}>
              <div className={styles.counter}>
                <span
                  className={styles.counterPrev}
                  onClick={goToPrevSlide}
                  aria-label="Previous slide"
                >
                  <RxChevronLeft strokeWidth={0.8} />
                </span>
                <span>
                  {currentIndex + 1} av {images.length}
                </span>
                <span
                  className={styles.counterNext}
                  onClick={goToNextSlide}
                  aria-label="Next slide"
                >
                  <RxChevronRight strokeWidth={0.8} />
                </span>
              </div>
              <div
                className={styles.slider}
                style={{
                  transform: `translateX(calc(-${
                    currentIndex * 100
                  }% + ${deltaX}px))`,
                  transition: isSwiping ? "none" : "transform 0.3s ease",
                }}
              >
                {images.map((image, index) => (
                  <div key={index} className={styles.slideWrapper}>
                    <div
                      className={styles.zoomIcon}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleZoom(index);
                      }}
                      aria-label={`Zoom image ${index + 1}`}
                    >
                      <RxZoomIn />
                    </div>
                    <figure
                      tabIndex="0"
                      className={styles.slide}
                      aria-label={image.text}
                      onClick={() => handleZoom(index)}
                    >
                      <img src={image.url} alt={image.text} />
                    </figure>
                    <div
                      className={`${styles.captionContainer} ${
                        isCaptionExpanded ? styles.expanded : styles.collapsed
                      }`}
                    >
                      <figcaption className={styles.caption}>
                        <p>{image.text}</p>
                      </figcaption>
                      <button
                        className={styles.captionToggle}
                        onClick={toggleCaption}
                        aria-label="Visa & göm caption"
                      >
                        {isCaptionExpanded ? (
                          <RxChevronDown strokeWidth={0.8} />
                        ) : (
                          <RxChevronUp strokeWidth={0.8} />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </main>
      </div>
      {zoomedIndex !== null && (
        <ZoomedImage
          images={images}
          currentIndex={zoomedIndex}
          onClose={() => setZoomedIndex(null)}
          onPrev={() =>
            setZoomedIndex((prev) => (prev - 1 + images.length) % images.length)
          }
          onNext={() => setZoomedIndex((prev) => (prev + 1) % images.length)}
        />
      )}
    </section>
  );
};

export default SlideshowAddon;

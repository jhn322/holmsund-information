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
import slideshowImg1 from "../../assets/slideshow/slideshow1.jpg";
import slideshowImg2 from "../../assets/slideshow/slideshow2.jpg";
import slideshowImg3 from "../../assets/slideshow/slideshow3.jpg";
import slideshowImg4 from "../../assets/slideshow/slideshow4.jpg";
import slideshowImg5 from "../../assets/slideshow/slideshow5.jpg";
import slideshowImg6 from "../../assets/slideshow/slideshow6.jpg";

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
      />
      <button className={styles.close} onClick={onClose}>
        <RxCross2 className={styles.closeIcon} />
      </button>
      <button
        className={`${styles.zoomBtn} ${styles.zoomPrev}`}
        onClick={onPrev}
      >
        <RxChevronLeft className={styles.navIcon} />
      </button>
      <button
        className={`${styles.zoomBtn} ${styles.zoomNext}`}
        onClick={onNext}
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
        />
      ))}
    </div>
  </div>
);

const SlideshowAddon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState(null);
  const [isCaptionExpanded, setIsCaptionExpanded] = useState(true);
  const initialTouch = useRef({ x: 0, y: 0 });

  const images = [
    {
      url: slideshowImg1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit facilis animi totam.",
    },
    {
      url: slideshowImg2,
      text: "Lorem ipsum dolor sit ducimus vero numquam elit facilis animi totam.",
    },
    {
      url: slideshowImg3,
      text: "Lorem ipsum dolor sit amet consectetur ullam vel illo voluptatum odit nihil.",
    },
    {
      url: slideshowImg4,
      text: "Lorem ipsum dolor sit amet consectetur qui quo iure, eos distinctio eaque.",
    },
    {
      url: slideshowImg5,
      text: "Lorem ipsum dolor sit amet consectetur qui quo iure, eos distinctio eaque.",
    },
    {
      url: slideshowImg6,
      text: "Lorem ipsum dolor sit amet consectetur qui quo iure, eos distinctio eaque.",
    },
  ];

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

  const handleZoom = (index) => {
    setZoomedIndex(index);
  };

  const toggleCaption = () => {
    setIsCaptionExpanded(!isCaptionExpanded);
  };

  return (
    <section>
      <div className={styles.container}>
        <section>
          <div className={styles.title}>
            <h3>Mer bilder</h3>
          </div>
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
                  role="button"
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
                  role="button"
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
                    >
                      <RxZoomIn />
                    </div>
                    <figure
                      tabIndex="0"
                      className={styles.slide}
                      aria-label={` ${image.text}`}
                      onClick={() => handleZoom(index)}
                    >
                      <img src={image.url} alt={image.text} />
                    </figure>
                    <div
                      className={`${styles.captionContainer} ${
                        isCaptionExpanded ? styles.expanded : styles.collapsed
                      }`}
                    >
                      <div className={styles.caption}>
                        <p>{image.text}</p>
                      </div>
                      <button
                        className={styles.captionToggle}
                        onClick={toggleCaption}
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
        </section>
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

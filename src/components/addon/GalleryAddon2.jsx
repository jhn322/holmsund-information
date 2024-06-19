import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

// CSS
import styles from "../../styles/home/Gallery.module.css";
// Component specific styling
import styles2 from "../../styles/addon/GalleryAddon2.module.css";

// Icons
import { RxChevronLeft, RxChevronRight, RxArrowRight } from "react-icons/rx";

// Static image and carousel of images
import staticGalleryImage from "../../assets/gallery/staticGallery.jpg";
import galleryImage1 from "../../assets/discover/discoverInspired1.jpg";
import galleryImage2 from "../../assets/discover/discoverInspired2.jpg";
import galleryImage3 from "../../assets/discover/discoverInspired3.jpg";
import galleryImage4 from "../../assets/discover/discoverInspired4.jpg";
import galleryCircle from "../../assets/other/circle.png";

const GalleryAddon2 = ({ title }) => {
  const images = [
    {
      url: galleryImage1,
      title: "Badställe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec, porttitor sem.",
      link: "/upptäck-5",
    },
    {
      url: galleryImage2,
      title: "Skog",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec, porttitor sem.",
      link: "/upptäck-6",
    },
    {
      url: galleryImage3,
      title: "Vattentorn",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec.",
      link: "/upptäck-7",
    },
    {
      url: galleryImage4,
      title: "Storsjöskolan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum.",
      link: "/upptäck-8",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlideTimeout, setAutoSlideTimeout] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);

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

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNextSlide,
    onSwipedRight: goToPrevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Additional useState to prevent hover trigger on other elements by the nav buttons
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleNavMouseEnter = () => {
    setIsNavHovered(true);
  };

  const handleNavMouseLeave = () => {
    setIsNavHovered(false);
  };
  // <---------------------------------------------------------------------------> //

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
          >
            <div className={styles.carouselInner}>
              {images.map((image, index) => (
                <figure
                  key={index}
                  className={`${styles.slide} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                >
                  <NavLink to={image.link}>
                    <img src={image.url} alt={`Slide ${index}`} />
                  </NavLink>
                </figure>
              ))}
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
                    >
                      Läs Mer...
                    </a>
                  </div>
                  <div className={styles.arrowContainer}>
                    <a href={images[currentIndex].link}>
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
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default GalleryAddon2;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// CSS
import styles from "../styles/Gallery.module.css";

// Icons
import { HiChevronLeft, HiChevronRight, HiArrowRight } from "react-icons/hi2";

// Static image and carousel of images
import staticGalleryImage from "../assets/staticGallery.jpg";
import galleryImage1 from "../assets/gallery1.jpg";
import galleryImage2 from "../assets/gallery2.jpg";
import galleryImage3 from "../assets/gallery3.jpg";
import galleryImage4 from "../assets/gallery4.jpg";
import galleryCircle from "../assets/circle.png";

const Gallery = () => {
  const images = [
    {
      url: galleryImage1,
      title: "Badställe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec, porttitor sem.",
      link: "/galleri-1",
    },
    {
      url: galleryImage2,
      title: "Skog",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec, porttitor sem.",
      link: "/galleri-2",
    },
    {
      url: galleryImage3,
      title: "Vattentorn",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum, sollicitudin metus nec.",
      link: "/galleri-3",
    },
    {
      url: galleryImage4,
      title: "Storsjöskolan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et libero vestibulum.",
      link: "/galleri-4",
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
      <div className={styles.galleryContainer}>
        <div className={styles.galleryImageContainer}>
          <div className={styles.galleryImageInner}>
            <article
              className={styles.galleryImage}
              style={{ backgroundImage: `url(${staticGalleryImage})` }}
            >
              <div
                className={styles.galleryCircle}
                style={{ backgroundImage: `url(${galleryCircle})` }}
              ></div>
              <h2 className={styles.galleryTitle}>
                Första & <br /> Andra
              </h2>
            </article>
          </div>
        </div>
        <div className={styles.galleryCarousel}>
          <div
            className={`${styles.carouselContainer} ${
              isHovered && !isNavHovered ? styles.hover : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.carouselInner}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${styles.slide} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                >
                  <NavLink to={image.link}>
                    <img src={image.url} alt={`Slide ${index}`} />
                  </NavLink>
                </div>
              ))}
              <div
                className={styles.carouselNav}
                onMouseEnter={handleNavMouseEnter}
                onMouseLeave={handleNavMouseLeave}
              >
                <span className={styles.navPrev} onClick={goToPrevSlide}>
                  <HiChevronLeft strokeWidth={1.5} />
                </span>
                <span className={styles.navNext} onClick={goToNextSlide}>
                  <HiChevronRight strokeWidth={1.5} />
                </span>
              </div>
            </div>
            <div className={styles.carouselText}>
              <NavLink to={images[currentIndex].link}>
                <div className={styles.hoverContainer}>
                  <h2>{images[currentIndex].title}</h2>
                  <p>{images[currentIndex].text} </p>
                  <div className={styles.linkContainer}>
                    <a
                      className={styles.carouselLink}
                      href={images[currentIndex].link}
                    >
                      Läs Mer...
                    </a>
                  </div>
                  <div className={styles.arrowContainer}>
                    <a href={images[currentIndex].link}>
                      <HiArrowRight className={styles.arrowIcon} />
                    </a>
                  </div>
                </div>
              </NavLink>
            </div>
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
      </div>
    </section>
  );
};

export default Gallery;

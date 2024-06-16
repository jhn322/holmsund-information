import { useState } from "react";
import { useSwipeable } from "react-swipeable";

// CSS
import styles from "../../styles/home/Activity.module.css";

// Component specific styling
import styles2 from "../../styles/addon/DiscoverAddon.module.css";

// Icons
import { RxChevronLeft, RxChevronRight, RxArrowRight } from "react-icons/rx";

// Images
import image1 from "../../assets/discover/discover1.jpg";
import image2 from "../../assets/discover/discover2.jpg";
import image3 from "../../assets/discover/discover3.jpg";
import image4 from "../../assets/discover/discover4.jpg";
import featuredCircle from "../../assets/other/circle.png";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      src: image1,
      title: "Vin Festival",
      description:
        "Fira med oss den 8 juni i Kellogg Mall Park. Upplev en fantastisk kväll med utsökta viner från lokala vingårdar, musik och god mat. Ta chansen att träffa vinmakare och delta i exklusiva vinprovningar.",
      link: "/upptäck-1",
    },
    {
      src: image2,
      title: "Kattmuseum",
      description:
        "Katten sov lugnt på den mysiga, varma soffan. Utforska vårt kattmuseum där du kan lära dig om katternas historia och deras roll i olika kulturer.",
      link: "/upptäck-2",
    },
    {
      src: image3,
      title: "Simlektioner",
      description:
        "Hon skrattade högt åt det roliga skämtet hennes vän berättade. Välkommen till våra simlektioner, där du kan lära dig att simma eller förbättra dina simfärdigheter. Våra erfarna instruktörer ger personlig uppmärksamhet och ser till att varje lektion är både säker och rolig. Perfekt för alla åldrar och nivåer!",
      link: "/upptäck-3",
    },
    {
      src: image4,
      title: "Auktionsshow",
      description:
        "De kom tidigt, till deras värds stora glädje. Delta i vår spännande auktionsshow där unika föremål från hela världen går under klubban. Möt samlare och säljare, och kanske gå hem med en oväntad skatt.",
      link: "/upptäck-4",
    },
  ];

  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...swipeHandlers} className={styles.carousel}>
      <div className={styles.container}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ""
            }`}
          >
            <a href={slide.link}>
              <img src={slide.src} alt={`Slide ${index + 1}`} />
            </a>
            <div className={styles.slideCounter}>
              {index + 1}/{slides.length}
            </div>
            <div className={styles.caption}>
              <a href={slide.link}>
                <h3 className={styles.captionTitle}>{slide.title}</h3>
              </a>
              <p>{truncateDescription(slide.description, 25)}</p>
              <div className={styles.linkContainer}>
                <a className={styles.captionLink} href={slide.link}>
                  Läs Mer...
                </a>
              </div>
              <div className={styles.arrowContainer}>
                <a href={slide.link}>
                  <RxArrowRight className={styles.arrowIcon} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.nav}>
        <span className={styles.navPrev} onClick={handlePrev}>
          <RxChevronLeft strokeWidth={0.2} />
        </span>
        <span className={styles.navNext} onClick={handleNext}>
          <RxChevronRight strokeWidth={0.2} />
        </span>
      </div>
    </div>
  );
};

const FeatureAddon2 = () => {
  return (
    <div className={styles.featuredContainer}>
      <div className={styles2.featuredImage}></div>
      <div className={styles2.featuredInner}>
        <div
          className={styles.featuredCircle}
          style={{ backgroundImage: `url(${featuredCircle})` }}
        ></div>
        <h2 className={styles.featuredTitle}>Mer att Utforska</h2>
        <Carousel />
      </div>
    </div>
  );
};

export default FeatureAddon2;

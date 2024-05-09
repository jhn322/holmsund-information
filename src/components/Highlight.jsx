import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/Highlight.module.css";
import Separator from "./Separator";

// Images
import cardImage1 from "../assets/highlight1.jpg";
import cardImage2 from "../assets/highlight2.jpg";
import cardImage3 from "../assets/highlight3.jpg";
import cardImage4 from "../assets/highlight4.jpg";

// Card Array
const cardData = [
  {
    image: cardImage1,
    title: "Aqua Arena",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas, molestias incidunt minima quod, illo possimus hic.",
  },
  {
    image: cardImage2,
    title: "Vattentornet",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas, molestias incidunt minima quod, illo possimus hic.",
  },
  {
    image: cardImage3,
    title: "Golfbana",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas, molestias incidunt minima quod, illo possimus hic.",
  },
  {
    image: cardImage4,
    title: "Storsjöhallen",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas, molestias incidunt minima quod, illo possimus hic.",
  },
];

const Highlight = () => {
  const highlightContainerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [overlayStates, setOverlayStates] = useState(
    Array(cardData.length).fill(false)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!highlightContainerRef.current) return;

      const cards = highlightContainerRef.current.querySelectorAll(
        `.${styles.highlightCard}`
      );

      cards.forEach((card, i) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (
          cardTop < windowHeight * 0.75 &&
          !card.classList.contains(styles.fadeInSlideIn)
        ) {
          card.classList.add(styles.fadeInSlideIn);
          setIsVisible(true);

          const newOverlayStates = [...overlayStates];
          newOverlayStates[i] = true;
          setOverlayStates(newOverlayStates);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHover = (index, hovered) => {
    setIsHovered(hovered);
    const newOverlayStates = overlayStates.map((state, i) =>
      i === index ? hovered : false
    );
    setOverlayStates(newOverlayStates);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section>
      <Separator />
      <div className={styles.highlightContainer}>
        <div className={styles.highlightInner}>
          <div className={styles.highlightTitle}>
            <h2>Höjdpunkter</h2>
          </div>
        </div>
        <div
          ref={highlightContainerRef}
          className={styles.highlightCardContainer}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`${styles.highlightCard} ${
                index === currentImageIndex ? styles.expanded : ""
              } ${isVisible ? styles.fadeInSlideIn : ""}`}
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
              style={{
                transform: `translateX(${(index - currentImageIndex) * 8}vw)`,
              }}
            >
              <div
                className={styles.cardImage}
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              >
                <div
                  className={`${styles.cardOverlay} ${
                    overlayStates[index] && isHovered
                      ? styles.expandedOverlay
                      : ""
                  }`}
                >
                  <h3 className={styles.cardOverlayTitle}>{card.title}</h3>
                  {overlayStates[index] && (
                    <div>
                      <p className={styles.expandedText}>{card.text}</p>
                      <button>Läs mer</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.nextPrevBtn}>
        <button className={styles.highlightBtn} onClick={prevImage}>
          Bakåt
        </button>
        <button className={styles.highlightBtn} onClick={nextImage}>
          Nästa
        </button>
      </div>
      <Separator />
    </section>
  );
};

export default Highlight;

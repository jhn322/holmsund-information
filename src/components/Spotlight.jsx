import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/Spotlight.module.css";

// Images
import cardImage5 from "../assets/spotlight5.jpg";
import cardImage6 from "../assets/spotlight6.jpg";
import cardImage7 from "../assets/spotlight7.jpg";
import cardImage8 from "../assets/spotlight8.jpg";

// Card Array
const cardData = [
  {
    image: cardImage5,
    title: "Nästa ställe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas, molestias incidunt minima quod, illo possimus hic.",
  },
  {
    image: cardImage6,
    title: "Någon annanstans",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas, molestias incidunt minima quod, illo possimus hic.",
  },
  {
    image: cardImage7,
    title: "Ett spännande ställe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas, molestias incidunt minima quod, illo possimus hic.",
  },
  {
    image: cardImage8,
    title: "Sista stället",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas, molestias incidunt minima quod, illo possimus hic.",
  },
];

const Spotlight = () => {
  const spotlightContainerRef = useRef(null);
  const [totalCardsHeight, setTotalCardsHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [overlayStates, setOverlayStates] = useState(
    Array(cardData.length).fill(false)
  );

  useEffect(() => {
    const calculateTotalHeight = () => {
      if (spotlightContainerRef.current) {
        const totalHeight = Array.from(
          spotlightContainerRef.current.querySelectorAll(
            `.${styles.spotlightCard}`
          )
        ).reduce((acc, card) => acc + card.offsetHeight, 0);
        setTotalCardsHeight(totalHeight);
      }
    };

    const handleScroll = () => {
      if (!spotlightContainerRef.current) return;

      const cards = spotlightContainerRef.current.querySelectorAll(
        `.${styles.spotlightCard}`
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

    calculateTotalHeight();
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      calculateTotalHeight();
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

  return (
    <section>
      <div ref={spotlightContainerRef} className={styles.spotlightContainer}>
        <div className={styles.spotlightInner}>
          <div className={styles.spotlightTitle}>
            <h2>Upptäck Holmsund</h2>
          </div>
          <div className={styles.spotlightCardContainer}>
            {cardData.map((card, index) => (
              <div
                key={index} // Add unique key prop here
                className={`${styles.spotlightCard} ${
                  overlayStates[index] ? styles.expanded : ""
                } ${isVisible ? styles.fadeInSlideIn : ""}`}
                onMouseEnter={() => handleHover(index, true)}
                onMouseLeave={() => handleHover(index, false)}
              >
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${card.image})` }}
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
      </div>
    </section>
  );
};

export default Spotlight;

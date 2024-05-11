import React, { useRef, useState } from "react";
import styles from "../styles/Highlight.module.css";
import Separator from "./Separator";

// Images
import cardImage1 from "../assets/highlight1.jpg";
import cardImage2 from "../assets/highlight2.jpg";
import cardImage3 from "../assets/highlight3.jpg";
import cardImage4 from "../assets/highlight4.jpg";
import cardImage5 from "../assets/spotlight5.jpg";
import cardImage6 from "../assets/spotlight6.jpg";
import cardImage7 from "../assets/spotlight7.jpg";
import cardImage8 from "../assets/spotlight8.jpg";

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
  {
    image: cardImage5,
    title: "Storsjöhallen",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas, molestias incidunt minima quod, illo possimus hic.",
  },
  {
    image: cardImage6,
    title: "Storsjöhallen",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas, molestias incidunt minima quod, illo possimus hic.",
  },
  {
    image: cardImage7,
    title: "Storsjöhallen",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas, molestias incidunt minima quod, illo possimus hic.",
  },
  {
    image: cardImage8,
    title: "Storsjöhallen",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas, molestias incidunt minima quod, illo possimus hic.",
  },
];

const duplicatedCardData = [...cardData, ...cardData];

const Highlight = () => {
  const highlightContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scalingFactor = 2;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const offsetX = e.pageX - startX;
    setCurrentOffset(offsetX * scalingFactor);
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    const indexChange = Math.round(currentOffset / 300);
    setCurrentOffset(0);

    let newIndex = currentImageIndex - indexChange;

    newIndex =
      (newIndex + duplicatedCardData.length) % duplicatedCardData.length;

    setCurrentImageIndex(newIndex);
  };

  return (
    <section>
      <Separator />
      <div className={styles.highlightContainer}>
        <div
          ref={highlightContainerRef}
          className={styles.highlightCardContainer}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {duplicatedCardData.map((card, index) => {
            let adjustedIndex = (index + currentImageIndex) % cardData.length;
            if (adjustedIndex < 0) adjustedIndex += cardData.length;
            return (
              <div
                key={index}
                className={`${styles.highlightCard} ${
                  index === currentImageIndex ? styles.expanded : ""
                }`}
                style={{
                  transform: `translateX(${
                    (index - currentImageIndex) * 40 + currentOffset
                  }%)`,
                  zIndex:
                    duplicatedCardData.length -
                    Math.abs(index - currentImageIndex),
                }}
              >
                <div
                  className={styles.cardImage}
                  style={{
                    backgroundImage: `url(${card.image})`,
                  }}
                >
                  <div className={`${styles.cardOverlay}`}>
                    <h3 className={styles.cardOverlayTitle}>{card.title}</h3>
                    <p className={styles.expandedText}>{card.text}</p>
                    <button className={styles.expandedBtn}>Läs mer</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Separator />
    </section>
  );
};

export default Highlight;

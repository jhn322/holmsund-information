import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// CSS
import styles from "../../styles/home/Discover.module.css";

// Images
import discoverImage1 from "../../assets/discover/discover1.jpg";
import discoverImage2 from "../../assets/discover/discover2.jpg";
import discoverImage3 from "../../assets/discover/discover3.jpg";
import discoverImage4 from "../../assets/discover/discover4.jpg";

// Card Array with NavLinks
const cardData = [
  {
    image: discoverImage1,
    title: "Nästa ställe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas.",
    link: "/utforska-1",
  },
  {
    image: discoverImage2,
    title: "Någon annanstans",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas.",
    link: "/utforska-2",
  },
  {
    image: discoverImage3,
    title: "Ett spännande ställe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas.",
    link: "/utforska-3",
  },
  {
    image: discoverImage4,
    title: "Sista stället",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veritatis amet cum nesciunt illum dolores maiores odio assumenda iste eos neque harum quas.",
    link: "/utforska-4",
  },
];

const DiscoverAddon1 = ({ title }) => {
  const discoverContainerRef = useRef(null);
  const [totalCardsHeight, setTotalCardsHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [overlayStates, setOverlayStates] = useState(
    Array(cardData.length).fill(false)
  );

  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const calculateTotalHeight = () => {
      if (discoverContainerRef.current) {
        const totalHeight = Array.from(
          discoverContainerRef.current.querySelectorAll(
            `.${styles.discoverCard}`
          )
        ).reduce((acc, card) => acc + card.offsetHeight, 0);
        setTotalCardsHeight(totalHeight);
      }
    };

    const handleScroll = () => {
      if (!discoverContainerRef.current) return;

      const cards = discoverContainerRef.current.querySelectorAll(
        `.${styles.discoverCard}`
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
      <main ref={discoverContainerRef} className={styles.discoverContainer}>
        <article className={styles.discoverInner}>
          <header className={styles.discoverTitle}>
            <h2>{title}</h2>
          </header>
          <section className={styles.discoverCardContainer}>
            {cardData.map((card, index) => (
              <article
                key={index}
                className={`${styles.discoverCard} ${
                  overlayStates[index] ? styles.expanded : ""
                } ${isVisible ? styles.fadeInSlideIn : ""}`}
                onMouseEnter={() => handleHover(index, true)}
                onMouseLeave={() => handleHover(index, false)}
              >
                <figure
                  className={`${styles.cardImage} ${
                    currentPath === card.link ? styles.currentPageImage : ""
                  }`}
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <figcaption
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
                        <button
                          className={styles.expandedBtn}
                          onClick={() => {
                            window.location.href = card.link;
                          }}
                        >
                          <span className={styles.expandedBtnText}>
                            Läs mer
                          </span>
                        </button>
                      </div>
                    )}
                  </figcaption>
                </figure>
                {currentPath === card.link && (
                  <div className={`${styles.currentPageMessage}`}>
                    Nuvarande Sida
                  </div>
                )}
              </article>
            ))}
          </section>
        </article>
      </main>
    </section>
  );
};

export default DiscoverAddon1;

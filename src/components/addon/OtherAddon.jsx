import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { trackOtherAddonElementClick } from "../analytics/addon";
import styles from "../../styles/home/Discover.module.css";
import styles2 from "../../styles/addon/OtherAddon.module.css";
import otherImage1 from "../../assets/other/aboutusCircle.jpg";
import otherImage2 from "../../assets/other/cookiesCircle.jpg";
import otherImage3 from "../../assets/other/termsofserviceCircle.jpg";

// Card Array with NavLinks
const cardData = [
  {
    image: otherImage1,
    title: "Om Oss",
    text: "Välkommen till vår webbplats! Vi är dedikerade till att erbjuda högkvalitativa tjänster och produkter som uppfyller dina behov. Läs vår fullständiga Om Oss för mer information.",
    link: "/om-oss",
  },
  {
    image: otherImage2,
    title: "Cookiepolicy",
    text: "På vår webbplats använder vi cookies för att förbättra användarupplevelsen och analysera trafiken. Läs våra fullständiga cookiepolicy för mer information.",
    link: "/cookiepolicy",
  },
  {
    image: otherImage3,
    title: "Användarvillkor",
    text: "Genom att använda vår webbplats godkänner du våra användarvillkor som reglerar användningen av våra tjänster, inklusive insamling av data och ansvarsfrihet. Läs våra fullständiga användarvillkor för mer information.",
    link: "/användarvillkor",
  },
];

const OtherAddon = () => {
  const discoverContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [overlayStates, setOverlayStates] = useState(
    Array(cardData.length).fill(false)
  );

  const location = useLocation();

  useEffect(() => {
    setCurrentPath(decodeURIComponent(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
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

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [overlayStates]);

  const handleHover = (index, hovered) => {
    setIsHovered(hovered);
    const newOverlayStates = overlayStates.map((state, i) =>
      i === index ? hovered : false
    );
    setOverlayStates(newOverlayStates);
  };

  return (
    <section>
      <main ref={discoverContainerRef} className={styles2.discoverContainer}>
        <article className={styles.discoverInner}>
          <section className={styles2.discoverCardContainer}>
            {cardData
              .filter((card) => card.link !== currentPath)
              .map((card, index) => (
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
                            aria-label={`Navigera till ${card.title}`}
                            onClick={() => {
                              trackOtherAddonElementClick(
                                "Card",
                                card.title,
                                card.link
                              );
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
                </article>
              ))}
          </section>
        </article>
      </main>
    </section>
  );
};

export default OtherAddon;

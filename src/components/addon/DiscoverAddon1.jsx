import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { discoverAddonSet1 } from "../data/DiscoverAddonSet";
import { trackDiscoverButtonClick } from "../analytics/addon";
import styles from "../../styles/home/Discover.module.css";

const DiscoverAddon1 = ({ title }) => {
  const discoverContainerRef = useRef(null);
  const titleRef = useRef(null);
  const [totalCardsHeight, setTotalCardsHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [overlayStates, setOverlayStates] = useState(
    Array(discoverAddonSet1.length).fill(false)
  );
  const [currentPathIndex, setCurrentPathIndex] = useState(-1);

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

    const observeTitle = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animated);
          titleObserver.unobserve(entry.target);
        }
      });
    };

    const titleObserver = new IntersectionObserver(observeTitle, {
      threshold: 0.1,
    });

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

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
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const index = discoverAddonSet1.findIndex(
      (card) => card.link === currentPath
    );
    setCurrentPathIndex(index);
  }, [currentPath, discoverAddonSet1]);

  const handleHover = (index, hovered) => {
    setIsHovered(hovered);
    const newOverlayStates = overlayStates.map((state, i) =>
      i === index ? hovered : false
    );
    setOverlayStates(newOverlayStates);
  };

  // Google Analytics
  const handleButtonClick = (buttonText, buttonUrl) => {
    trackDiscoverButtonClick(buttonText, buttonUrl);
  };

  return (
    <section>
      <main ref={discoverContainerRef} className={styles.discoverContainer}>
        <article className={styles.discoverInner}>
          <header className={styles.discoverTitle}>
            <h2 ref={titleRef}>{title}</h2>
          </header>
          <section className={styles.discoverCardContainer}>
            {discoverAddonSet1.map((card, index) => (
              <article
                key={index}
                className={`${styles.discoverCard} ${
                  overlayStates[index] ? styles.expanded : ""
                } ${isVisible ? styles.fadeInSlideIn : ""}`}
                onMouseEnter={() => handleHover(index, true)}
                onMouseLeave={() => handleHover(index, false)}
                tabIndex="0"
                aria-label={`Utforska ${card.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleHover(index, !overlayStates[index]);
                  }
                }}
              >
                <figure
                  className={`${styles.cardImage} ${
                    currentPath === card.link ? styles.currentPageImage : ""
                  }`}
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <figcaption
                    className={`${styles.cardOverlay} ${
                      overlayStates[index] &&
                      isHovered &&
                      index !== currentPathIndex
                        ? styles.expandedOverlay
                        : ""
                    } ${
                      index === currentPathIndex
                        ? styles.currentPathOverlay
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
                            handleButtonClick(card.title, card.link);
                            window.location.href = card.link;
                          }}
                          aria-label={`Läs mer om ${card.title}`}
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

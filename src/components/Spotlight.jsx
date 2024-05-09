import { useRef, useEffect, useState } from "react";
import styles from "../styles/Spotlight.module.css";

// Images
import cardImage1 from "../assets/spotlight1.jpg";
import cardImage2 from "../assets/spotlight2.jpg";
import cardImage3 from "../assets/spotlight3.jpg";
import cardImage4 from "../assets/spotlight4.jpg";
import cardImage5 from "../assets/spotlight5.jpg";
import cardImage6 from "../assets/spotlight6.jpg";
import cardImage7 from "../assets/spotlight7.jpg";
import cardImage8 from "../assets/spotlight8.jpg";

const Spotlight = () => {
  const spotlightContainerRef = useRef(null);
  const [totalCardsHeight, setTotalCardsHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [overlayHeight, setOverlayHeight] = useState("0");

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

      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (
          cardTop < windowHeight * 0.75 &&
          !card.classList.contains(styles.fadeInSlideIn)
        ) {
          card.classList.add(styles.fadeInSlideIn);
          setIsVisible(true);
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

  const handleHover = (hovered) => {
    setIsHovered(hovered);
    setOverlayHeight(hovered ? "100%" : "18%");
  };

  return (
    <section>
      <div ref={spotlightContainerRef} className={styles.spotlightContainer}>
        <div className={styles.spotlightInner}>
          <div className={styles.spotlightTitle}>
            <h2>Upptäck Holmsund</h2>
          </div>
          <div className={styles.spotlightCardContainer}>
            {/* Image 1 */}
            <div
              className={`${styles.spotlightCard} ${
                isHovered ? styles.expanded : ""
              } ${isVisible ? styles.fadeInSlideIn : ""}`}
              visible
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage1})` }}
              >
                <div
                  className={`${styles.cardOverlay} ${
                    isHovered ? styles.expandedOverlay : ""
                  }`}
                  style={{}}
                >
                  <h3 className={styles.cardOverlayTitle}>En längre titel</h3>
                  {isHovered && (
                    <div>
                      <p className={styles.expandedText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id, nostrum asperiores eos tempora sunt magnam natus
                        sapiente sed atque nesciunt assumenda! Eum labore, a
                        nesciunt animi culpa eveniet aperiam fuga.
                      </p>
                      <button>Läs mer</button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.stackedImagesContainer}>
              {/* Image 2 */}
              <div
                className={`${styles.spotlightCard} ${
                  isHovered ? styles.expanded : ""
                } ${isVisible ? styles.fadeInSlideIn : ""}`}
                visible
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${cardImage2})` }}
                >
                  <div
                    className={`${styles.cardOverlay} ${
                      isHovered ? styles.expandedOverlay : ""
                    }`}
                    style={{}}
                  >
                    <h3 className={styles.cardOverlayTitle}>
                      Saker man kan göra
                    </h3>
                    {isHovered && (
                      <div>
                        <p className={styles.expandedText}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Id, nostrum asperiores eos tempora sunt magnam
                          natus sapiente sed atque nesciunt assumenda! Eum
                          labore, a nesciunt animi culpa eveniet aperiam fuga.
                        </p>
                        <button>Läs mer</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Image 3 */}
              <div
                className={`${styles.spotlightCard} ${
                  styles.thirdSpotlightCard
                } ${isHovered ? styles.expanded : ""} ${
                  isVisible ? styles.fadeInSlideIn : ""
                }`}
                visible
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${cardImage3})` }}
                >
                  <div
                    className={`${styles.cardOverlay} ${
                      isHovered ? styles.expandedOverlay : ""
                    }`}
                    style={{}}
                  >
                    <h3 className={styles.cardOverlayTitle}>Aqua Arena</h3>
                    {isHovered && (
                      <div>
                        <p className={styles.expandedText}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Id, nostrum asperiores eos tempora sunt magnam
                          natus sapiente sed atque nesciunt assumenda! Eum
                          labore, a nesciunt animi culpa eveniet aperiam fuga.
                        </p>
                        <button>Läs mer</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Image 4 */}
            <div
              className={`${styles.spotlightCard} ${
                styles.fourthSpotlightCard
              } ${isHovered ? styles.expanded : ""} ${
                isVisible ? styles.fadeInSlideIn : ""
              }`}
              visible
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage4})` }}
              >
                <div
                  className={`${styles.cardOverlay} ${
                    isHovered ? styles.expandedOverlay : ""
                  }`}
                  style={{}}
                >
                  <h3 className={styles.cardOverlayTitle}>Golfbana</h3>
                  {isHovered && (
                    <div>
                      <p className={styles.expandedText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id, nostrum asperiores eos tempora sunt magnam natus
                        sapiente sed atque nesciunt assumenda! Eum labore, a
                        nesciunt animi culpa eveniet aperiam fuga.
                      </p>
                      <button>Läs mer</button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.spotlightSecondTitle}>
              <h2>Upptäck Mer</h2>
            </div>

            {/* Image 5 */}
            <div
              className={`${styles.spotlightCard} ${
                isHovered ? styles.expanded : ""
              } ${isVisible ? styles.fadeInSlideIn : ""}`}
              visible
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage5})` }}
              >
                <div
                  className={`${styles.cardOverlay} ${
                    isHovered ? styles.expandedOverlay : ""
                  }`}
                  style={{}}
                >
                  <h3 className={styles.cardOverlayTitle}>Nästa ställe</h3>
                  {isHovered && (
                    <div>
                      <p className={styles.expandedText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id, nostrum asperiores eos tempora sunt magnam natus
                        sapiente sed atque nesciunt assumenda! Eum labore, a
                        nesciunt animi culpa eveniet aperiam fuga.
                      </p>
                      <button>Läs mer</button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.stackedImagesContainer}>
              {/* Image 6 */}
              <div
                className={`${styles.spotlightCard} ${
                  isHovered ? styles.expanded : ""
                } ${isVisible ? styles.fadeInSlideIn : ""}`}
                visible
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${cardImage6})` }}
                >
                  <div
                    className={`${styles.cardOverlay} ${
                      isHovered ? styles.expandedOverlay : ""
                    }`}
                    style={{}}
                  >
                    <h3 className={styles.cardOverlayTitle}>
                      Någon annanstans
                    </h3>
                    {isHovered && (
                      <div>
                        <p className={styles.expandedText}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Id, nostrum asperiores eos tempora sunt magnam
                          natus sapiente sed atque nesciunt assumenda! Eum
                          labore, a nesciunt animi culpa eveniet aperiam fuga.
                        </p>
                        <button>Läs mer</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Image 7 */}
              <div
                className={`${styles.spotlightCard} ${
                  styles.seventhSpotlightCard
                } ${isHovered ? styles.expanded : ""} ${
                  isVisible ? styles.fadeInSlideIn : ""
                }`}
                visible
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${cardImage7})` }}
                >
                  <div
                    className={`${styles.cardOverlay} ${
                      isHovered ? styles.expandedOverlay : ""
                    }`}
                    style={{}}
                  >
                    <h3 className={styles.cardOverlayTitle}>
                      Ett spännande ställe
                    </h3>
                    {isHovered && (
                      <div>
                        <p className={styles.expandedText}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Id, nostrum asperiores eos tempora sunt magnam
                          natus sapiente sed atque nesciunt assumenda! Eum
                          labore, a nesciunt animi culpa eveniet aperiam fuga.
                        </p>
                        <button>Läs mer</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              // Image 8
              className={`${styles.spotlightCard} ${styles.lastSpotlightCard} ${
                isHovered ? styles.expanded : ""
              } ${isVisible ? styles.fadeInSlideIn : ""}`}
              visible
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage8})` }}
              >
                <div
                  className={`${styles.cardOverlay} ${
                    isHovered ? styles.expandedOverlay : ""
                  }`}
                  style={{}}
                >
                  <h3 className={styles.cardOverlayTitle}>Sista stället</h3>
                  {isHovered && (
                    <div>
                      <p className={styles.expandedText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id, nostrum asperiores eos tempora sunt magnam natus
                        sapiente sed atque nesciunt assumenda! Eum labore, a
                        nesciunt animi culpa eveniet aperiam fuga.
                      </p>
                      <button>Läs mer</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;

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

    calculateTotalHeight();

    const handleScroll = () => {
      if (!spotlightContainerRef.current) return;

      const cards = spotlightContainerRef.current.querySelectorAll(
        `.${styles.spotlightCard}`
      );

      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight * 1 && !card.classList.contains("slideIn")) {
          card.classList.add(styles.slideInUp, "slideIn");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      calculateTotalHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      {/* Image 1 */}
      <div ref={spotlightContainerRef} className={styles.spotlightContainer}>
        <div className={styles.spotlightInner}>
          <div className={styles.spotlightTitle}>
            <h2>Upptäck Holmsund</h2>
          </div>
          <div className={styles.spotlightCardContainer}>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage1})` }}
              >
                {/* Image 2 */}
                <div className={styles.cardOverlay}>
                  <h3>En längre titel</h3>
                </div>
              </div>
            </div>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage2})` }}
              >
                {/* Image 3 */}
                <div className={styles.cardOverlay}>
                  <h3>Saker man kan göra</h3>
                </div>
              </div>
            </div>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage3})` }}
              >
                {/* Image 4 */}
                <div className={styles.cardOverlay}>
                  <h3>Aqua Arena</h3>
                </div>
              </div>
            </div>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage4})` }}
              >
                {/* Image 5 */}
                <div className={styles.cardOverlay}>
                  <h3>Golfbana</h3>
                </div>
              </div>
            </div>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage5})` }}
              >
                {/* Image 6 */}
                <div className={styles.cardOverlay}>
                  <h3>Nästa ställe</h3>
                </div>
              </div>
            </div>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage6})` }}
              >
                {/* Image 7 */}
                <div className={styles.cardOverlay}>
                  <h3>Någonstans där</h3>
                </div>
              </div>
            </div>
            <div className={styles.spotlightCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage7})` }}
              >
                {/* Image 8 */}
                <div className={styles.cardOverlay}>
                  <h3>Ett spännande ställe</h3>
                </div>
              </div>
            </div>
            <div
              className={`${styles.spotlightCard} ${styles.lastSpotlightCard}`}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cardImage8})` }}
              >
                <div className={styles.cardOverlay}>
                  <h3>SISTA STÄLLET</h3>
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

import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { trackExtraHomeElementClick } from "../analytics/home";
import styles from "../../styles/home/ExtraHome.module.css";
import shareImage from "../../assets/other/share.jpg";

const ExtraHome = () => {
  const elementsRef = useRef([]);

  // Google Analytics
  const trackNavLinkClick = (buttonText, linkUrl) => {
    trackExtraHomeElementClick("navlink_button", buttonText, linkUrl);
  };

  useEffect(() => {
    const observeElements = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animated);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observeElements, {
      threshold: 0.1,
    });

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className={styles.mainContainer}>
      <header className={styles.inner}>
        <article className={styles.shareContainer}>
          <header className={styles.shareHeader}>
            <h2
              className={`animate ${styles.shareTitle}`}
              ref={(el) => elementsRef.current.push(el)}
            >
              Dela din story <span className={styles.shareDot}>⬤ </span>
              #Holmsund
            </h2>
          </header>
          <aside className={styles.shareImageContainer}>
            <aside
              className={styles.shareImage}
              style={{ backgroundImage: `url(${shareImage})` }}
              aria-label="Share your story image background"
            ></aside>
          </aside>
          <div className={styles.extraContainer}>
            {/* Navigate to weather section */}
            <section className={styles.weatherContainer}>
              <div className={styles.weatherInner}>
                <article className={styles.weatherText}>
                  <header className={styles.weather}>
                    <h3
                      className="animate"
                      ref={(el) => elementsRef.current.push(el)}
                    >
                      Väderinformation
                    </h3>
                  </header>
                  <article className={styles.weatherContent}>
                    <div className={styles.weather}>
                      <p
                        className="animate"
                        ref={(el) => elementsRef.current.push(el)}
                      >
                        Här kan du hitta regelbundet uppdaterade väderprognoser
                        för Homsund, inklusive temperatur, nederbörd och
                        vindförhållanden för de kommande dagarna.
                      </p>
                    </div>
                  </article>
                </article>
                <NavLink
                  to="/vader"
                  onClick={() =>
                    trackNavLinkClick("Kolla vädret i Holmsund", "/vader")
                  }
                  aria-label="Kolla vädret i Holmsund"
                >
                  <p
                    className={`animate ${styles.weatherBtnText}`}
                    ref={(el) => elementsRef.current.push(el)}
                  >
                    Kolla vädret i Holmsund
                  </p>
                </NavLink>
              </div>
            </section>
            {/* Navigate to maps section */}
            <section className={styles.mapContainer}>
              <div className={styles.mapInner}>
                <div className={styles.mapText}>
                  <header className={styles.map}>
                    <h3
                      className="animate"
                      ref={(el) => elementsRef.current.push(el)}
                    >
                      Platsinformation
                    </h3>
                  </header>
                  <div className={styles.mapContent}>
                    <div className={styles.map}>
                      <p
                        className="animate"
                        ref={(el) => elementsRef.current.push(el)}
                      >
                        Kulgränd 1, Holmsund
                      </p>
                    </div>
                    <div className={styles.map}>
                      <p
                        className="animate"
                        ref={(el) => elementsRef.current.push(el)}
                      >
                        Umeå, Västerbotten
                      </p>
                    </div>
                    <div className={styles.map}>
                      <p
                        className="animate"
                        ref={(el) => elementsRef.current.push(el)}
                      >
                        Sverige, 913 32
                      </p>
                    </div>
                    <div className={styles.map}>
                      <p
                        className="animate"
                        ref={(el) => elementsRef.current.push(el)}
                      >
                        63.7066° N / 20.3686° E
                      </p>
                    </div>
                  </div>
                </div>
                <NavLink
                  to="/kartor"
                  onClick={() =>
                    trackNavLinkClick("Se karta över Holmsund", "/kartor")
                  }
                  aria-label="Se karta över Holmsund"
                >
                  <p
                    className={`animate ${styles.mapBtnText}`}
                    ref={(el) => elementsRef.current.push(el)}
                  >
                    Se karta över Holmsund
                  </p>
                </NavLink>
              </div>
            </section>
          </div>
        </article>
      </header>
    </section>
  );
};

export default ExtraHome;

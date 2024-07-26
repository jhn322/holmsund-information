import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import headerSet from "../data/HeaderSet";
import { trackHeaderButtonClick } from "../analytics/home";
import styles from "../../styles/home/Header.module.css";

// Season generator
const getCurrentSeason = () => {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) {
    return "Vår";
  } else if (month >= 6 && month <= 8) {
    return "Sommar";
  } else if (month >= 9 && month <= 11) {
    return "Höst";
  } else {
    return "Vinter";
  }
};

const Header = () => {
  // Array of header images randomized
  const currentSeason = getCurrentSeason();
  const images = headerSet[currentSeason];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const headerClass = `${styles.headerContainer} ${
    styles[currentSeason.split(" ")[0]]
  }`;

  // Button path & text randomized
  const buttonOptions = [
    {
      text: `Aktiviteter man kan hitta på denna ${currentSeason}`,
      path: "/aktiviteter",
    },
    { text: `Utforska Holmsund denna ${currentSeason}`, path: "/utforska" },
    { text: `Titta in i Galleriet denna ${currentSeason}`, path: "/galleri" },
  ];

  const [currentButton, setCurrentButton] = useState(buttonOptions[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * buttonOptions.length);
    setCurrentButton(buttonOptions[randomIndex]);
  }, []);

  // Google Analytics
  const handleButtonClick = () => {
    trackHeaderButtonClick(currentButton.text, currentButton.path);
  };

  return (
    <header
      className={headerClass}
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      <section className={styles.innerHeader}>
        <article className={styles.header}>
          <h1 className={styles.headerTitle + " " + styles.animateTitle}>
            {currentSeason} i Holmsund
          </h1>
          <div className={styles.btnContainer}>
            <NavLink
              to={currentButton.path}
              aria-label={`Navigera till ${currentButton.text}`}
            >
              <button
                className={styles.headerBtn + " " + styles.animateButton}
                onClick={handleButtonClick}
                aria-label={currentButton.text}
              >
                {currentButton.text}
              </button>
            </NavLink>
          </div>
        </article>
      </section>
    </header>
  );
};

export default Header;

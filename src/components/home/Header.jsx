import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import styles from "../../styles/home/Header.module.css";

// Images
import headerSpring1 from "../../assets/header/headerSpring1.jpg";
import headerSpring2 from "../../assets/header/headerSpring2.jpg";
import headerSpring3 from "../../assets/header/headerSpring3.jpg";
import headerSpring4 from "../../assets/header/headerSpring4.jpg";
import headerSummer1 from "../../assets/header/headerSummer1.jpg";
import headerSummer2 from "../../assets/header/headerSummer2.jpg";
import headerSummer3 from "../../assets/header/headerSummer3.jpg";
import headerSummer4 from "../../assets/header/headerSummer4.jpg";
import headerAutumn1 from "../../assets/header/headerAutumn1.jpg";
import headerAutumn2 from "../../assets/header/headerAutumn2.jpg";
import headerAutumn3 from "../../assets/header/headerAutumn3.jpg";
import headerAutumn4 from "../../assets/header/headerAutumn4.jpg";
import headerWinter1 from "../../assets/header/headerWinter1.jpg";
import headerWinter2 from "../../assets/header/headerWinter2.jpg";
import headerWinter3 from "../../assets/header/headerWinter3.jpg";
import headerWinter4 from "../../assets/header/headerWinter4.jpg";

const seasonImages = {
  Vår: [headerSpring1, headerSpring2, headerSpring3, headerSpring4],
  Sommar: [headerSummer1, headerSummer2, headerSummer3, headerSummer4],
  Höst: [headerAutumn1, headerAutumn2, headerAutumn3, headerAutumn4],
  Vinter: [headerWinter1, headerWinter2, headerWinter3, headerWinter4],
};

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
  const currentSeason = getCurrentSeason();
  const images = seasonImages[currentSeason];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const headerClass = `${styles.headerContainer} ${
    styles[currentSeason.split(" ")[0]]
  }`;

  return (
    <main
      className={headerClass}
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      <div className={styles.innerHeader}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>{currentSeason} i Holmsund</h1>

          <div className={styles.btnContainer}>
            <NavLink to="/aktiviteter">
              <button className={styles.headerBtn}>
                Aktiviteter man kan hitta på denna {currentSeason}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;

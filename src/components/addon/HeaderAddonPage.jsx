import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { trackHeaderAddonPageClick } from "../analytics/addon";
import styles from "../../styles/addon/HeaderAddon.module.css";
import styles2 from "../../styles/addon/HeaderAddonPage.module.css";
import styles3 from "../../styles/home/Header.module.css";

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

const HeaderAddonPage = ({ title, backgroundImage }) => {
  const currentSeason = getCurrentSeason();
  const { pathname } = useLocation();

  // Defines a mapping from category identifiers to base paths
  const categoryToPath = {
    aktiviteter: "/aktiviteter",
    utforska: "/utforska",
    galleri: "/galleri",
  };

  // Extract category identifier from pathname
  const getCategoryFromPath = (pathname) => {
    const parts = pathname.split("-");
    if (parts.length >= 1) {
      return parts[0].split("/")[1];
    }
    return "";
  };

  const currentCategory = getCategoryFromPath(pathname);
  const basePath = categoryToPath[currentCategory];

  // Custom message for each category
  const categoryMessages = {
    utforska: "Se allt du kan utforska",
    aktiviteter: "Se alla aktiviteter du kan hitta på",
    galleri: "Inspireras av det som finns i galleriet",
  };

  const handleClick = () => {
    trackHeaderAddonPageClick(
      "Header Button",
      categoryMessages[currentCategory],
      basePath
    );
  };

  return (
    <header
      className={`${styles.headerContainer} ${styles2.headerContainer}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <section className={`${styles.header} ${styles3.header}`}>
        <h1 className={`${styles.headerTitle} ${styles2.headerTitle}`}>
          {title}
        </h1>
        <article className={`${styles.btnContainer} ${styles3.btnContainer}`}>
          <NavLink to={basePath}>
            <button
              className={`${styles.headerBtn} ${styles3.headerBtn}`}
              onClick={handleClick}
            >
              {categoryMessages[currentCategory]} denna {currentSeason}
            </button>
          </NavLink>
        </article>
      </section>
    </header>
  );
};

export default HeaderAddonPage;

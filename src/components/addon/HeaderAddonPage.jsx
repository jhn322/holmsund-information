import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { trackHeaderAddonPageClick } from "../analytics/addon";
import styles from "../../styles/addon/HeaderAddon.module.css";
import styles2 from "../../styles/addon/HeaderAddonPage.module.css";
import styles3 from "../../styles/home/Header.module.css";

const getCurrentSeason = () => {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return "Vår";
  if (month >= 6 && month <= 8) return "Sommar";
  if (month >= 9 && month <= 11) return "Höst";
  return "Vinter";
};

const pageToSectionMap = {
  // Utforska pages
  branteberget: "utforska",
  kajutan: "utforska",
  ljumviken: "utforska",
  revet: "utforska",
  storsjoskolan: "utforska",
  solbackakyrkan: "utforska",
  lovosundet: "utforska",
  kasaviken: "utforska",
  // Aktiviteter pages
  "sandviks-idrottsklubb": "aktiviteter",
  elljussparet: "aktiviteter",
  "umea-golfklubb": "aktiviteter",
  storsjohallen: "aktiviteter",
  omberget: "aktiviteter",
  djupvik: "aktiviteter",
  "holmsunds-tennisklubb": "aktiviteter",
  vasterlangsladan: "aktiviteter",
  // Galleri pages
  osterfjarden: "galleri",
  storsjoparken: "galleri",
  sikskarsvaken: "galleri",
  "holmsunds-kyrka": "galleri",
  holmsundsbanan: "galleri",
  holmen: "galleri",
  skargardsskolan: "galleri",
  "holmsund-hamn": "galleri",
};

const HeaderAddonPage = ({ title, backgroundImage }) => {
  const currentSeason = getCurrentSeason();
  const { pathname } = useLocation();

  const getCategoryFromPath = (pathname) => {
    const pageName = pathname.split("/").pop();
    return pageToSectionMap[pageName] || "";
  };

  const currentCategory = getCategoryFromPath(pathname);
  const basePath = `/${currentCategory}`;

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
              aria-label="Knapp till huvudsida för kategori"
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

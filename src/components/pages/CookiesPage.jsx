import React from "react";
import LayoutOther from "../layouts/LayoutOther";
import styles from "../../styles/pages/CookiesPage.module.css";

const CookiesPage = () => {
  return (
    <LayoutOther renderCookiesCircleAddon={true} renderOtherAddon={true}>
      <div className={styles.container}>
        <h3 className={styles.title}>Generellt</h3>
        <p className={styles.text}>
          Vår webbplats använder cookies för att förbättra din upplevelse. Genom
          att fortsätta använda vår webbplats samtycker du till användningen av
          cookies i enlighet med vår <a href="/privacy">Integritetspolicy</a>.
        </p>

        <h3 className={styles.title}>Vad är cookies</h3>
        <p className={styles.text}>
          Cookies är små textfiler som skickas av din webbläsare från en
          webbplats du besöker. En cookie-fil lagras i din webbläsare och gör
          det möjligt för Tjänsten eller en tredje part att känna igen dig och
          göra ditt nästa besök enklare och Tjänsten mer användbar för dig.
        </p>

        <h3 className={styles.title}>Hur vi använder cookies</h3>
        <p className={styles.text}>
          När du använder och får tillgång till Tjänsten kan vi placera ett
          antal cookie-filer i din webbläsare. Vi använder cookies för följande
          ändamål:
        </p>
        <ul>
          <li className={styles.list}>
            För att aktivera vissa funktioner i Tjänsten
          </li>
          <li className={styles.list}>För att tillhandahålla analys</li>
          <li className={`${styles.list} ${styles.lastList}`}>
            För att lagra dina preferenser
          </li>
        </ul>

        <h3 className={styles.title}>Dina val angående cookies</h3>
        <p className={styles.text}>
          Om du vill radera cookies eller instruera din webbläsare att radera
          eller vägra cookies, vänligen besök hjälpsidorna för din webbläsare.
          Observera dock att om du raderar cookies eller vägrar att acceptera
          dem, kanske du inte kan använda alla funktioner vi erbjuder, du kanske
          inte kan lagra dina preferenser, och vissa av våra sidor kanske inte
          visas korrekt.
        </p>

        <h3 className={styles.title}>Ändringar i denna cookiepolicy</h3>
        <p className={styles.text}>
          Vi kan uppdatera vår cookiepolicy från tid till annan. Vi kommer att
          meddela dig om eventuella ändringar genom att publicera den nya
          cookiepolicyn på denna sida. Du uppmanas att granska denna
          cookiepolicy periodiskt för eventuella ändringar.
        </p>

        <p className={styles.text}>
          <em>Verkställandedatum: 2024-06-19</em>
        </p>
      </div>
    </LayoutOther>
  );
};

export default CookiesPage;

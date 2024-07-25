import styles from "../../styles/home/ContentCircle.module.css";
import styles2 from "../../styles/addon/CookiesCircleAddon.module.css";
import circle1Image from "../../assets/other/cookiesCircle.jpg";
import circle2Image from "../../assets/other/circleOrange.png";

const CookiesCircleAddon = () => {
  return (
    <section className={styles.contentContainer}>
      <div className={styles.innerContent}>
        <article className={styles.content}>
          <div className={`${styles.textContent} ${styles2.hidden}`}>
            <header>
              <h2 className={styles2.titleContent}>Cookiepolicy</h2>
            </header>
            <p className={styles.paragraphContent}>
              Vår Cookiepolicy förklarar hur vi använder cookies och liknande
              tekniker på vår webbplats för att förbättra din upplevelse.
              Cookies är små textfiler som lagras i din webbläsare och hjälper
              oss att känna igen dig och anpassa innehållet efter dina
              preferenser. Genom att fortsätta använda vår webbplats samtycker
              du till vår användning av cookies enligt beskrivningen i vår
              Cookiepolicy.
            </p>
          </div>
        </article>
      </div>
      <aside className={styles2.circleContainer}>
        <div className={styles.circleBackground}>
          <h2 className={styles2.hidden}>Double Circle</h2>
          <img
            src={circle2Image}
            className={`${styles.circleBack} ${styles2.circleBack}`}
            alt="Orange bild"
          />
          <img
            src={circle1Image}
            className={`${styles.circleFront} ${styles2.circleFront}`}
            alt="Kakor bild"
          />
        </div>
      </aside>
    </section>
  );
};

export default CookiesCircleAddon;

import { useState, useEffect, useRef } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { activityAccordion4 } from "../data/ActivityPageSet";
import LayoutPage from "../layouts/LayoutPage";
import { RxPlus, RxMinus } from "react-icons/rx";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/activity/activityPage4.jpg";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <article className={styles.accordionItem}>
      <button
        className={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`dragspel-innehåll-${title}`}
        id={`dragspel-titel-${title}`}
      >
        {title}
        <span
          className={`${styles.accordionIcon} ${isOpen ? styles.openIcon : ""}`}
        >
          {isOpen ? (
            <RxMinus strokeWidth={0.8} className={styles.icon} />
          ) : (
            <RxPlus strokeWidth={0.8} className={styles.icon} />
          )}
        </span>
      </button>
      <div
        ref={contentRef}
        className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
        id={`dragspel-innehåll-${title}`}
        role="region"
        aria-labelledby={`dragspel-titel-${title}`}
      >
        <div className={styles.accordionContentInner}>{content}</div>
      </div>
    </article>
  );
};

const ActivityPage4 = () => {
  useEffect(() => {
    setDocumentTitle("Storsjöhallen");
  }, []);

  return (
    <LayoutPage
      headerTitle="Storsjöhallen"
      headerBackgroundImage={backgroundImage}
    >
      <main className={styles.container}>
        <header>
          <h2 className={styles.title}>Storsjöhallen</h2>
        </header>
        <section>
          <p className={styles.boldText}>
            Storsjöhallen – en mångsidig och välutrustad idrottshall som har
            blivit en central punkt för både sport och samhällsaktiviteter i
            regionen. Med sina moderna faciliteter och flexibla utrymmen
            erbjuder hallen en plats för allt från idrottstävlingar till sociala
            evenemang.
          </p>

          <p className={styles.text}>
            Storsjöhallen är designad för att möta behoven hos både
            idrottsutövare och allmänheten. Den rymliga och funktionella hallen
            är utrustad för en rad olika sporter, inklusive handboll, basket,
            volleyboll och badminton. Den mångsidiga inredningen gör det möjligt
            att snabbt och enkelt anpassa utrymmet efter olika typer av
            aktiviteter och evenemang. <br /> Hallen är också hem för flera
            lokala sportklubbar och föreningar som använder den för träningar
            och tävlingar. Den moderna inredningen och de väl underhållna ytorna
            bidrar till en högkvalitativ idrottsupplevelse, oavsett om det är en
            ungdomsturnering eller en vuxenmatch.
          </p>

          <h5 className={styles.headline}>Sociala Evenemang</h5>
          <p className={styles.text}>
            Utöver idrottsaktiviteter är Storsjöhallen en viktig plats för
            sociala evenemang och föreningsliv i Holmsund. Hallen är ofta värd
            för mässor, kulturella evenemang och community-sammankomster. Dess
            flexibla design gör det möjligt att arrangera stora evenemang med
            många deltagare eller mindre, mer intima tillställningar. <br />
            Klubbar och föreningar i Holmsund använder regelbundet hallen för
            sina aktiviteter, och det är en central plats för att främja lokal
            gemenskap och samarbete. Från barnens sportträningar till vuxnas
            hobbygrupper, Storsjöhallen är en plats där människor i alla åldrar
            kan mötas och skapa gemenskap.
          </p>

          <h5 className={styles.headline}>Utrustning</h5>
          <p className={styles.text}>
            Storsjöhallen är utrustad med en rad moderna faciliteter som
            förbättrar upplevelsen för både spelare och besökare. Det finns
            omklädningsrum, duschar och en kafédel där besökare kan köpa mat och
            dryck. Hallen är också utrustad med ett ljud- och ljussystem som kan
            användas för evenemang och tävlingar. <br /> För att säkerställa en
            hög nivå av säkerhet och komfort är hallen väl underhållen och
            regelbundet uppdaterad med den senaste utrustningen. Detta skapar en
            trygg och välkomnande miljö för alla som använder anläggningen.
          </p>
        </section>
        <section className={styles.accordion}>
          {activityAccordion4.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </section>
      </main>
    </LayoutPage>
  );
};

export default ActivityPage4;

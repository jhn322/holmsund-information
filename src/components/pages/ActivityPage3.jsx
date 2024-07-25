import { useState, useEffect, useRef } from "react";
import { activityAccordion3 } from "../data/ActivityPageSet";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import LayoutPage from "../layouts/LayoutPage";
import { RxPlus, RxMinus } from "react-icons/rx";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/activity/activityPage3.jpg";

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

const ActivityPage3 = () => {
  useEffect(() => {
    setDocumentTitle("Aktiviteter-3");
  }, []);

  return (
    <LayoutPage
      headerTitle="Umeå Golfklubb"
      headerBackgroundImage={backgroundImage}
    >
      <main className={styles.container}>
        <header>
          <h2 className={styles.title}>Umeå Golfklubb</h2>
        </header>
        <section>
          <p className={styles.boldText}>
            Umeå Golfklubb – en av regionens mest uppskattade golfanläggningar.
            Med sin fantastiska miljö och välskötta bana erbjuder klubben både
            en utmanande och naturskön golfupplevelse som lockar golfare från
            när och fjärran.
          </p>
          <p className={styles.text}>
            Umeå Golfklubb ligger vid Bottenvikens kust och erbjuder en
            spektakulär utsikt över det omgivande landskapet. Golfbanan är känd
            för sin vackra layout och natursköna omgivningar, som inkluderar
            både öppna fält och lummiga skogspartier. Det är en plats där du kan
            njuta av golfspel samtidigt som du får uppleva den fridfulla och
            vackra Västerbottniska naturen. <br /> Den 18-hålsbana som erbjuds
            är designad för att tillgodose både nybörjare och erfarna golfare.
            Med varierande svårighetsgrad och strategiska utmaningar, erbjuder
            banan en stimulerande upplevelse för alla. Den är känd för sina
            välskötta fairways och greener, som gör att varje rundgång blir en
            njutning.
          </p>
          <p className={styles.text}>
            Umeå Golfklubb är inte bara en plats för golfspel; det är också en
            livlig och välkomnande gemenskap. Klubben organiserar regelbundet
            tävlingar, träningstillfällen och sociala evenemang, vilket skapar
            en aktiv och inkluderande atmosfär. Oavsett om du är en
            tävlingsinriktad spelare eller bara vill njuta av en avkopplande
            runda golf, finns det något för alla på klubben. <br /> För
            nybörjare och de som vill förbättra sitt spel erbjuds golflektioner
            och kurser av erfarna proffs. Detta gör det möjligt för spelare på
            alla nivåer att utvecklas och njuta av sporten på bästa sätt.
            Klubben är också känd för sin vänliga och hjälpsamma atmosfär, där
            alla medlemmar och gäster känner sig välkomna.
          </p>
          <p className={styles.text}>
            Klubben erbjuder en rad faciliteter som förbättrar golfupplevelsen.
            Det finns en välutrustad klubbhus med restaurang och café, där du
            kan njuta av en måltid eller fika mellan rundorna. Det finns också
            en golfshop där du kan köpa utrustning och tillbehör, samt få råd
            och tips från kunnig personal. <br /> För dem som vill förbättra
            sitt spel finns även en driving range och övningsområden för putting
            och chipping. Dessa faciliteter är perfekt för att finslipa tekniken
            eller bara för att värma upp innan en runda på banan.
          </p>
        </section>
        <section className={styles.accordion}>
          {activityAccordion3.map((item, index) => (
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

export default ActivityPage3;

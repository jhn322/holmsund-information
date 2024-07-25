import { useState, useEffect, useRef } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { activityAccordion2 } from "../data/ActivityPageSet";
import LayoutPage from "../layouts/LayoutPage";
import { RxPlus, RxMinus } from "react-icons/rx";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/activity/activityPage2.jpg";

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

const ActivityPage2 = () => {
  useEffect(() => {
    setDocumentTitle("Aktiviteter-2");
  }, []);

  return (
    <LayoutPage
      headerTitle="Elljusspåret"
      headerBackgroundImage={backgroundImage}
    >
      <main className={styles.container}>
        <header>
          <h2 className={styles.title}>Elljusspåret</h2>
        </header>
        <section>
          <p className={styles.boldText}>
            Elljusspåret – ett populärt friluftsområde som bjuder in till både
            motion och avkoppling. Detta välskötta spår är en skatt för alla som
            älskar att vistas utomhus, och det erbjuder en mångsidig upplevelse
            året runt.
          </p>
          <p className={styles.text}>
            Elljusspåret sträcker sig över 6,5 kilometer och slingrar sig genom
            en naturskön miljö. Beläget precis utanför Holmsund, vid kusten av
            Bottenviken, är spåret lättillgängligt för både invånare och
            besökare. Den noggrant planerade belysningen längs hela sträckan gör
            det möjligt att njuta av naturen även efter mörkrets inbrott, vilket
            ger en särskild magi till kvällspromenader och nattliga
            joggingturer. Under vintern, när snön täcker landskapet, får spåret
            en drömsk och stillsam karaktär som lockar till vinteraktiviteter.
          </p>
          <p className={styles.text}>
            Elljusspåret är utformat för att vara en mångsidig plats för olika
            friluftsaktiviteter. Under sommarhalvåret är det ett populärt val
            för promenader, löpning och cykling. De varierande landskapen, med
            både skogsdungar och öppna ytor, ger en omväxlande och behaglig
            upplevelse. Spåret är välskött och lätt att navigera, vilket gör det
            lämpligt för både vana löpare och de som bara vill ta en lugn
            promenad. <br /> När vinterkylan sätter in, förvandlas Elljusspåret
            till en idealisk plats för längdskidåkning och vinterpromenader. Det
            belysta spåret ger en trygg och vacker miljö för de som vill njuta
            av vinterns fröjder även när det är mörkt. Här är det inte ovanligt
            att se både nybörjare och erfarna skidåkare glida fram genom den
            snöiga terrängen.
          </p>
          <p className={styles.text}>
            Förutom att vara en plats för fysisk aktivitet är Elljusspåret också
            en social samlingspunkt. Många använder spåret som en plats för att
            umgås med vänner och familj, eller för att delta i organiserade
            aktiviteter och evenemang. Den vänliga och avslappnade atmosfären
            gör det till en perfekt plats för att både träna och knyta sociala
            band. <br /> Elljusspåret bidrar också till en hälsosam livsstil
            genom att erbjuda en inbjudande miljö för regelbunden motion. Med
            sina väl underhållna ytor och vackra omgivningar är det lätt att bli
            motiverad att vara aktiv och njuta av den friska luften.
          </p>
        </section>
        <section className={styles.accordion}>
          {activityAccordion2.map((item, index) => (
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

export default ActivityPage2;

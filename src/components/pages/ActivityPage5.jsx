import { useState, useEffect, useRef } from "react";
import { activityAccordion5 } from "../data/ActivityPageSet";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import LayoutPage from "../layouts/LayoutPage";
import { RxPlus, RxMinus } from "react-icons/rx";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/activity/activityPage5.jpg";

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

const ActivityPage5 = () => {
  useEffect(() => {
    setDocumentTitle("Aktiviteter-5");
  }, []);

  return (
    <LayoutPage headerTitle="Omberget" headerBackgroundImage={backgroundImage}>
      <main className={styles.container}>
        <header>
          <h2 className={styles.title}>Omberget</h2>
        </header>
        <section>
          <p className={styles.boldText}>
            Omberget – en naturskön destination som erbjuder en rad
            friluftsaktiviteter för både invånare och besökare. Med sina
            vidsträckta vyer, välbevarade stigar och vackra landskap är Omberget
            en idealisk plats för alla som älskar att vara ute i naturen.
          </p>

          <p className={styles.text}>
            Omberget är känt för sina spektakulära utsikter och natursköna
            omgivningar. Berget erbjuder en varierad terräng med både lätta och
            mer utmanande vandringsleder som slingrar sig genom den vackra
            skogsmiljön. Från de högsta punkterna på berget har du en fantastisk
            vy över Bottenviken och det omgivande landskapet, vilket gör det
            till en utmärkt plats för fotografering och att bara njuta av
            naturens storslagenhet. <br /> Vandring är den mest populära
            aktiviteten på Omberget, med leder som passar både nybörjare och
            erfarna vandrare. Stigarna är väl markerade och erbjuder något för
            alla, från korta promenader till längre och mer krävande rutter.
            Under sommaren är det en idealisk plats för att njuta av friluftsliv
            och få en paus från vardagens stress.
          </p>

          <h5 className={styles.headline}>Vintertider</h5>
          <p className={styles.text}>
            När vintermånaderna kommer förvandlas Omberget till en snötäckt
            idyll. Här kan du njuta av skidåkning, snöskovandring och
            vinterpromenader i en magisk vintermiljö. De snötäckta stigar och
            vidsträckta vyerna skapar en fridfull och avkopplande atmosfär,
            perfekt för att tillbringa en dag ute i det fria. <br /> Omberget är
            också en populär plats för att uppleva den genuina svenska vintern,
            med möjligheter till både lugna promenader och mer aktiva
            vinteräventyr. De välunderhållna lederna gör det enkelt att njuta av
            vinterns alla fröjder, oavsett om du är en erfaren vinterutövare
            eller bara vill ta en stund för att njuta av snön.
          </p>

          <h5 className={styles.headline}>Gemenskap</h5>
          <p className={styles.text}>
            Förutom att vara en plats för fysisk aktivitet, är Omberget också en
            social mötesplats för lokalbefolkningen och besökare. Här kan du
            träffa andra friluftsentusiaster, delta i organiserade evenemang och
            kanske till och med ta del av gemensamma aktiviteter som guidade
            vandringar eller naturinformationstillfällen. <br /> Det är en plats
            där människor samlas för att njuta av gemenskapen och dela sin
            kärlek till naturen. Många väljer att använda Omberget som en plats
            för att umgås med vänner och familj, eller för att delta i lokala
            arrangemang som främjar en aktiv och hälsosam livsstil.
          </p>
        </section>
        <section className={styles.accordion}>
          {activityAccordion5.map((item, index) => (
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

export default ActivityPage5;

import { useState, useEffect, useRef } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { activityAccordion8 } from "../data/ActivityPageSet";
import LayoutPage from "../layouts/LayoutPage";
import { RxPlus, RxMinus } from "react-icons/rx";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/activity/activityPage8.jpg";

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

const ActivityPage8 = () => {
  useEffect(() => {
    setDocumentTitle("Västerlångslädan");
  }, []);

  return (
    <LayoutPage
      headerTitle="Västerlångslädan"
      headerBackgroundImage={backgroundImage}
    >
      <main className={styles.container}>
        <header>
          <h2 className={styles.title}>Västerlångslädan</h2>
        </header>
        <section>
          <p className={styles.boldText}>
            Västerlångslädan, belägen i den pittoreska orten Holmsund i
            Västerbotten, är en fascinerande plats som bär på en rik historia
            och kulturell betydelse. Området är känt för sin charm och sin
            historiska betydelse som speglar det traditionella livet i
            Västerbotten.
          </p>
          <p className={styles.text}>
            Västerlångslädan är en del av Holmsunds gamla bystruktur, där många
            av byggnaderna och landskapet fortfarande bevarar spår från tidigare
            tider. Holmsund, som ligger vid Umeälvens utlopp i Bottenviken, har
            historiskt varit en viktig plats för handel och fiske, och
            Västerlångslädan är ett av de områden som speglar dessa traditioner.
            <br />
            Under 1800-talet och tidigt 1900-tal var Holmsund ett knutpunkt för
            sjöfart och industri. Västerlångslädan var då en del av det livliga
            handelsområdet, och här kunde man se ångbåtar och lastfartyg som kom
            och gick. Idag är området ett fridfullt minnesmärke över denna
            livliga tid.
          </p>
          <p className={styles.text}>
            Västerlångslädan är också känd för sina kulturella och traditionella
            inslag. Här hålls regelbundet evenemang och festivaler som speglar
            den lokala kulturen och traditionerna. Från midsommarfirande till
            marknader och hantverksutställningar, Västerlångslädan erbjuder en
            autentisk upplevelse av det norrländska livet. <br /> En särskild
            attraktion är det traditionella smedjärnet som fortfarande används i
            området. Det är inte bara en teknisk artefakt, utan även ett levande
            exempel på hur hantverk och traditioner har bevarats och fortsatt
            genom generationer.
          </p>
          <p className={styles.text}>
            Västerlångslädan är inte bara en plats med historiskt och kulturellt
            värde; det erbjuder också vacker natur och friluftsaktiviteter. Den
            omgivande landsbygden är perfekt för vandring och naturupplevelser.
            Den närliggande skogen och sjöarna erbjuder en fristad för både
            lokalbefolkningen och besökare som söker lugn och avkoppling. <br />
            Det finns flera markerade vandringsleder i området som ger möjlighet
            att utforska den norrländska naturen. De spegelblanka sjöarna och de
            täta skogarna skapar en fridfull miljö för utomhusaktiviteter och
            naturskådning.
          </p>
        </section>
        <section className={styles.accordion}>
          {activityAccordion8.map((item, index) => (
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

export default ActivityPage8;

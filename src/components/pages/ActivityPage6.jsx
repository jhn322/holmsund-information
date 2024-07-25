import { useState, useEffect, useRef } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { activityAccordion6 } from "../data/ActivityPageSet";
import { slideshowSet9 } from "../data/SlideshowSet";
import SlideshowAddon from "../addon/SlideshowAddon";
import LayoutPage from "../layouts/LayoutPage";
import { RxPlus, RxMinus } from "react-icons/rx";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/activity/activityPage6.jpg";

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

const ActivityPage6 = () => {
  useEffect(() => {
    setDocumentTitle("Djupvik");
  }, []);

  return (
    <LayoutPage headerTitle="Djupvik" headerBackgroundImage={backgroundImage}>
      <main className={styles.container}>
        <header>
          <h2 className={styles.title}>Djupvik</h2>
        </header>
        <section>
          <p className={styles.boldText}>
            Vid kusten av Bottenviken, strax utanför Umeå, ligger den idylliska
            platsen Djupvik i Holmsund. Känd för sin natursköna skönhet och
            fridfulla atmosfär, erbjuder Djupvik en perfekt tillflyktsort för
            alla som söker en paus från vardagens stress och ett sätt att njuta
            av Västerbottens unika kustlandskap.
          </p>
          <p className={styles.text}>
            Trots att Djupvik saknar en strand, har platsen en speciell
            dragningskraft tack vare det kristallklara vattnet och de
            lättillgängliga hoppen ner i vattnet. Det är en populär plats för
            dem som vill ha ett snabbt dopp utan att behöva gå genom sand eller
            grus. Besökare och lokalbor samlas här under varma sommardagar för
            att njuta av sol och bad på ett mer direkt sätt. Klipporna vid
            Djupvik erbjuder en naturlig plattform för att hoppa ner i det
            friska vattnet, vilket gör det till ett attraktivt alternativ för
            både barn och vuxna.
          </p>
          <p className={styles.text}>
            För länge sedan var Djupvik en viktig punkt för lokal båttrafik.
            Även om moderna båtar nu i huvudsak använder andra hamnar och
            bryggor, var Djupvik en gång i tiden en plats där båtar brukade
            lägga till och parkera. Det är lätt att föreställa sig hur vattnet
            här var fyllt med liv och aktivitet, och hur platsen spelade en roll
            i den maritima historien i Holmsund. Idag är det en mer stillsam och
            fridfull plats, men de historiska rötterna ger en extra dimension
            till upplevelsen av Djupvik.
          </p>
          <p className={styles.text}>
            Djupvik är inte bara en plats för bad och historiska reflektioner;
            det är också en trivsam samlingspunkt för både lokalbefolkning och
            besökare. Många njuter av att tillbringa tid här, antingen genom att
            ta ett dopp, sola på klipporna eller bara koppla av med vänner och
            familj. Trots att det inte finns någon strand, erbjuder Djupvik en
            unik och härlig upplevelse vid vattnet som är värt att utforska.
          </p>
        </section>
        <section className={styles.accordion}>
          {activityAccordion6.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </section>
        <SlideshowAddon images={slideshowSet9} />
      </main>
    </LayoutPage>
  );
};

export default ActivityPage6;

import { useState, useEffect, useRef } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { activityAccordion1 } from "../data/ActivityPageSet";
import LayoutPage from "../layouts/LayoutPage";
import { RxPlus, RxMinus } from "react-icons/rx";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/activity/activityPage1.jpg";

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

const ActivityPage1 = () => {
  useEffect(() => {
    setDocumentTitle("Sandviks Idrottsklubb");
  }, []);

  return (
    <LayoutPage
      headerTitle="Sandviks Idrottsklubb"
      headerBackgroundImage={backgroundImage}
    >
      <main className={styles.container}>
        <header>
          <h2 className={styles.title}>Sandviks Idrottsklubb</h2>
        </header>
        <section>
          <p className={styles.boldText}>
            Sandviks IK idrottsplats är en central plats för idrott och
            gemenskap i Holmsund, en tätort belägen i Västerbotten. Denna
            idrottsplats är hemmaplan för Sandviks IK, en idrottsförening med en
            rik historia och stark lokal förankring.
          </p>
          <h5 className={styles.headline}>Historik</h5>
          <p className={styles.text}>
            Sandviks IK grundades år 1928 och har sedan dess varit en viktig del
            av Holmsunds idrottsliv. Föreningen har erbjudit en rad olika
            sporter genom åren, men det är främst fotboll som har varit i fokus.
            Sandviks IK idrottsplats har spelat en central roll i föreningens
            verksamhet och har varit skådeplats för många spännande matcher och
            evenemang. <br /> Idrottsplatsen har genom åren utvecklats och
            förbättrats för att möta moderna standarder och för att ge bästa
            möjliga upplevelse för både spelare och publik. Med sina välskötta
            planer och anläggningar är idrottsplatsen en stolthet för Holmsund
            och en plats där unga talanger kan utvecklas och nå sina drömmar.
          </p>
          <p className={styles.text}>
            Sandviks IK idrottsplats erbjuder en rad olika faciliteter för olika
            idrotter. Här finns bland annat flera fotbollsplaner, både gräs- och
            konstgräsplaner, vilket gör det möjligt att spela året runt. Det
            finns även omklädningsrum, klubblokaler och träningsutrymmen som
            stödjer lagens träning och matcher. <br /> Förutom fotbollsplanerna
            finns det även områden för andra aktiviteter, som löpning och
            friidrott, vilket gör idrottsplatsen till en mångsidig anläggning.
            Under vinterhalvåret förvandlas delar av området till isbanor för
            skridskoåkning och ishockey, vilket ytterligare breddar utbudet av
            aktiviteter.
          </p>
          <p className={styles.text}>
            Sandviks IK idrottsplats är mer än bara en plats för sport; det är
            en mötesplats för hela samhället. Här anordnas regelbundet olika
            evenemang som lockar både unga och gamla. Föreningen arrangerar
            fotbollsturneringar, träningsläger, och sociala aktiviteter som
            skapar en stark gemenskapskänsla. <br /> Särskilt populära är de
            årliga sommarfotbollsskolorna för barn och ungdomar. Dessa läger
            erbjuder inte bara möjligheten att förbättra sina fotbollskunskaper
            utan även att träffa nya vänner och ha roligt tillsammans. Föräldrar
            och andra anhöriga deltar ofta som volontärer, vilket ytterligare
            stärker den lokala gemenskapen.
          </p>
        </section>
        <section className={styles.accordion}>
          {activityAccordion1.map((item, index) => (
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

export default ActivityPage1;

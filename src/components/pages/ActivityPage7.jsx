import { useState, useEffect, useRef } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { activityAccordion7 } from "../data/ActivityPageSet";
import LayoutPage from "../layouts/LayoutPage";
import { RxPlus, RxMinus } from "react-icons/rx";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/activity/activityPage7.jpg";

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

const ActivityPage7 = () => {
  useEffect(() => {
    setDocumentTitle("Aktiviteter-7");
  }, []);

  return (
    <LayoutPage
      headerTitle="Holmsunds Tennisklubb"
      headerBackgroundImage={backgroundImage}
    >
      <main className={styles.container}>
        <header>
          <h2 className={styles.title}>Holmsunds Tennisklubb</h2>
        </header>
        <section>
          <p className={styles.boldText}>
            Holmsunds Tennisklubb i Holmsund, Västerbotten, har länge varit en
            viktig del av det lokala sportlivet och har erbjudit
            tennisentusiaster en plats för träning och tävling. Klubbens
            anläggningar har tidigare varit kända för sina välskötta banor och
            vänliga atmosfär, vilket gjorde den till en uppskattad mötesplats
            för både nybörjare och erfarna spelare.
          </p>
          <p className={styles.text}>
            Under många år var Holmsunds Tennisklubb en livfull och aktiv klubb
            med ett brett utbud av träningsprogram och sociala evenemang.
            Klubben arrangerade regelbundet tävlingar och turneringar som drog
            till sig spelare från hela regionen, vilket skapade en stark
            gemenskap bland medlemmarna. <br /> Tyvärr har klubben under de
            senaste åren blivit alltmer övergiven. Brist på underhåll och en
            minskande medlemsbas har lett till att anläggningarna nu ofta står
            tomma och förfallna. Detta har orsakat en stor besvikelse bland de
            tidigare medlemmarna och lokalbefolkningen som minns klubbens forna
            glansdagar.
          </p>
          <p className={styles.text}>
            Den övergivna statusen hos Holmsunds Tennisklubb står i kontrast
            till den vitalitet och livskraft som en gång definierade platsen.
            Det finns en önskan bland många att se en återuppvaknande av klubben
            och en återgång till den aktiva och inkluderande miljö som en gång
            gjorde den till en central del av Holmsunds idrottsliv.
          </p>
          <p className={styles.text}>
            Holmsunds Tennisklubb har fortfarande potential att återigen bli en
            viktig plats för tennis i Holmsund, men det krävs engagemang och
            resurser för att återställa den till sitt forna skick och återvinna
            den gemenskap och entusiasm som tidigare präglade klubbens
            verksamhet.
          </p>
        </section>
        <section className={styles.accordion}>
          {activityAccordion7.map((item, index) => (
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

export default ActivityPage7;

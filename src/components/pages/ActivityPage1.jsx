import { useState, useEffect, useRef } from "react";
import { activityAccordion1 } from "../data/ActivityPageSet";
import { setDocumentTitle } from "../utils/setDocumentTitle";
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
    setDocumentTitle("Aktiviteter-1");
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            omnis possimus incidunt quo voluptatibus sunt libero.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex velit
            eum molestias cupiditate vero, et error sequi quidem. Labore ratione
            veniam esse, neque iste accusantium accusamus ut eveniet voluptas
            quos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className={styles.text}>
            Quos nemo nisi nostrum magnam pariatur debitis, necessitatibus
            repellat rem molestiae et nam ipsum assumenda ipsa esse saepe cumque
            recusandae vitae molestias? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum sint vero, ab officia quibusdam dolor?
            Accusantium maxime ipsam sunt porro id nam sed accusamus, possimus
            ullam earum iure modi vitae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <p className={styles.text}>
            Ipsam alias nobis eveniet vero totam sapiente tempora aut
            dignissimos vel! Fugiat illo, tempora quia voluptatibus
            exercitationem debitis veritatis facere error omnis. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Distinctio dolore qui
            est esse ipsa aliquam minus optio nesciunt quasi? Optio deleniti
            harum vero quibusdam aspernatur nostrum vel repellendus culpa
            tempore.
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

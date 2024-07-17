import { useState, useEffect, useRef } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/activity/activityPage4.jpg";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className={styles.accordionItem}>
      <button
        className={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span
          className={styles.accordionIcon}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
        >
          +
        </span>
      </button>
      <div
        ref={contentRef}
        className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
      >
        <div className={styles.accordionContentInner}>{content}</div>
      </div>
    </div>
  );
};

const ActivityPage4 = () => {
  useEffect(() => {
    setDocumentTitle("Aktiviteter-4");
  }, []);

  const accordionData = [
    {
      title: "Den första frågan om denna aktivitet?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et dolore quos sunt explicabo aspernatur.",
    },
    {
      title: "Den andra frågan om denna aktivitet?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et dolore quos libero minima inventore enim eveniet sunt explicabo aspernatur.",
    },
    {
      title: "Den tredje frågan om denna aktivitet?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et dolore quos libero minima eveniet sunt explicabo aspernatur.",
    },
    {
      title: "Den fjärde frågan om denna aktivitet?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et dolore quos libero enim eveniet sunt explicabo aspernatur.",
    },
    {
      title: "Den femte frågan om denna aktivitet?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et dolore quos libero minima inventore enim eveniet sunt explicabo aspernatur. provident officiis voluptas iusto repellendus earum.",
    },
  ];

  return (
    <LayoutPage
      headerTitle="Activity Page 4"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon3={true}
      renderActivityAddon1={true}
      renderGalleryAddon2={true}
      discoverTitle3="Aktiviteter"
      galleryTitle2="Utforska 2"
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Activity 4</h2>
        <p className={styles.boldText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          omnis possimus incidunt quo voluptatibus sunt libero.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex velit eum
          molestias cupiditate vero, et error sequi quidem. Labore ratione
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
          Ipsam alias nobis eveniet vero totam sapiente tempora aut dignissimos
          vel! Fugiat illo, tempora quia voluptatibus exercitationem debitis
          veritatis facere error omnis. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Distinctio dolore qui est esse ipsa aliquam minus
          optio nesciunt quasi? Optio deleniti harum vero quibusdam aspernatur
          nostrum vel repellendus culpa tempore.
        </p>

        <div className={styles.accordion}>
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </article>
    </LayoutPage>
  );
};

export default ActivityPage4;

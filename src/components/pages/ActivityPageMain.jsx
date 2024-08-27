import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { trackMainPagesClick } from "../analytics/pages";
import LayoutPageMain from "../layouts/LayoutPageMain";
import styles from "../../styles/pages/AllPageMain.module.css";

// Images
import header5 from "../../assets/header/header5.jpg";
import header6 from "../../assets/header/header6.jpg";
import header7 from "../../assets/header/header7.jpg";
import header8 from "../../assets/header/header8.jpg";
import activityPage1 from "../../assets/activity/activityPageMain1.jpg";
import activityPage2 from "../../assets/activity/activityPageMain2.jpg";
import activityPage3 from "../../assets/activity/activityPageMain3.jpg";
import activityPage4 from "../../assets/activity/activityPageMain4.jpg";
import activityPage5 from "../../assets/activity/activityPageMain5.jpg";
import activityPage6 from "../../assets/activity/activityPageMain6.jpg";
import activityPage7 from "../../assets/activity/activityPageMain7.jpg";
import activityPage8 from "../../assets/activity/activityPageMain8.jpg";

const ActivityPageMain = () => {
  const headerImages = [header5, header6, header7, header8];

  const gridImages = [
    {
      src: activityPage1,
      title: "Sandviks Idrottsklubb",
      path: "/sandviks-idrottsklubb",
    },
    { src: activityPage2, title: "Elljusspåret", path: "/elljussparet" },
    { src: activityPage3, title: "Umeå Golfklubb", path: "/umea-golfklubb" },
    { src: activityPage4, title: "Storsjöhallen", path: "/storsjohallen" },
    { src: activityPage5, title: "Omberget", path: "/omberget" },
    { src: activityPage6, title: "Djupvik", path: "/djupvik" },
    {
      src: activityPage7,
      title: "Holmsunds Tennisklubb",
      path: "/holmsunds-tennisklubb",
    },
    {
      src: activityPage8,
      title: "Västerlångslädan",
      path: "/vasterlangsladan",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const gridRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    setDocumentTitle("Aktiviteter");
  }, []);

  // Preload header images
  useEffect(() => {
    const preloadImages = [];
    headerImages.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
      preloadImages.push(img);
    });
    return () => {
      preloadImages.forEach((img) => (img.src = ""));
    };
  }, [headerImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % headerImages.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [headerImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animated);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = gridRefs.current;
    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    const textElements = textRefs.current;
    textElements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
      textElements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Render grid items for all pages in the category
  const gridItems = gridImages.map((image, index) => (
    <NavLink
      to={image.path}
      className={styles.gridItemLink}
      key={index}
      aria-label="Länkar till aktiviteter sidor"
      onClick={() => {
        trackMainPagesClick("Grid Image", image.title, image.path);
      }}
    >
      <div
        className={styles.gridItem}
        ref={(el) => (gridRefs.current[index] = el)} // Assign ref
      >
        <img src={image.src} alt={`Image ${index}`} />
        <h4 className={styles.title}>{image.title}</h4>
      </div>
    </NavLink>
  ));

  return (
    <LayoutPageMain
      headerTitle="Aktiviteter"
      headerBackgroundImage={headerImages[currentImageIndex]}
      renderActivityAddon1={true}
      renderDiscoverAddon2={true}
      renderGalleryAddon4={true}
      discoverTitle2="Utforska 2"
      galleryTitle4="Galleri"
    >
      <section className={styles.textContainer}>
        <h2
          className={`${styles.mainTitle} ${styles.animate}`}
          ref={(el) => (textRefs.current[0] = el)}
        >
          Välkommen till aktiviteter
        </h2>
        <p
          className={`${styles.mainText} ${styles.animate}`}
          ref={(el) => (textRefs.current[1] = el)}
        >
          Du kan välja bland flera spännande aktiviteter här nere. Oavsett om du
          föredrar att förbättra din golfsving, spela en omgång fotboll, ta en
          löptur längs vattnet, simma några längder, eller åka skidor i vackra
          omgivningar, finns det något som passar alla träningsnivåer och
          intressen.
        </p>
      </section>
      <div className={styles.gridContainer}>{gridItems}</div>
    </LayoutPageMain>
  );
};

export default ActivityPageMain;

import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import LayoutPageMain from "../layouts/LayoutPageMain";
import { trackMainPagesClick } from "../analytics/pages";
import styles from "../../styles/pages/AllPageMain.module.css";
import header1 from "../../assets/header/header1.jpg";
import header2 from "../../assets/header/header2.jpg";
import header3 from "../../assets/header/header3.jpg";
import header4 from "../../assets/header/header4.jpg";
import discoverPageMain1 from "../../assets/discover/discoverPageMain1.jpg";
import discoverPageMain2 from "../../assets/discover/discoverPageMain2.jpg";
import discoverPageMain3 from "../../assets/discover/discoverPageMain3.jpg";
import discoverPageMain4 from "../../assets/discover/discoverPageMain4.jpg";
import discoverPageMain5 from "../../assets/discover/discoverPageMain5.jpg";
import discoverPageMain6 from "../../assets/discover/discoverPageMain6.jpg";
import discoverPageMain7 from "../../assets/discover/discoverPageMain7.jpg";
import discoverPageMain8 from "../../assets/discover/discoverPageMain8.jpg";

const DiscoverPageMain = () => {
  const headerImages = [header1, header2, header3, header4];

  const gridImages = [
    { src: discoverPageMain1, title: "Bränteberget", path: "/branteberget" },
    { src: discoverPageMain2, title: "Kajutan", path: "/kajutan" },
    { src: discoverPageMain3, title: "Ljumviken", path: "/ljumviken" },
    { src: discoverPageMain4, title: "Revet", path: "/revet" },
    { src: discoverPageMain5, title: "Storsjöskolan", path: "/storsjoskolan" },
    {
      src: discoverPageMain6,
      title: "Solbackakyrkan",
      path: "/solbackakyrkan",
    },
    { src: discoverPageMain7, title: "Lövösundet", path: "/lovosundet" },
    { src: discoverPageMain8, title: "Kasaviken", path: "/kasaviken" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const gridRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    setDocumentTitle("Utforska");
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
    }, 5000);

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
      aria-label="Länkar till utforska sidor"
      onClick={() => {
        trackMainPagesClick("Grid Image", image.title, image.path);
      }}
    >
      <div
        className={styles.gridItem}
        ref={(el) => (gridRefs.current[index] = el)}
      >
        <img src={image.src} alt={`Image ${index}`} />
        <h4 className={styles.title}>{image.title}</h4>
      </div>
    </NavLink>
  ));

  return (
    <LayoutPageMain
      headerTitle="Utforska"
      headerBackgroundImage={headerImages[currentImageIndex]}
      renderDiscoverAddon3={true}
      renderActivityAddon4={true}
      discoverTitle3="Aktiviteter"
    >
      <section className={styles.textContainer}>
        <h2
          className={`${styles.mainTitle} ${styles.animate}`}
          ref={(el) => (textRefs.current[0] = el)}
        >
          Välkommen att utforska
        </h2>
        <p
          className={`${styles.mainText} ${styles.animate}`}
          ref={(el) => (textRefs.current[1] = el)}
        >
          Du kan utforska flera fascinerande platser här nere. Oavsett om du
          föredrar att vandra längs kusten, upptäcka lokala butiker och
          marknader, eller besöka historiska sevärdheter, finns det många
          spännande möjligheter att utforska och uppleva.
        </p>
      </section>
      <div className={styles.gridContainer}>{gridItems}</div>
    </LayoutPageMain>
  );
};

export default DiscoverPageMain;

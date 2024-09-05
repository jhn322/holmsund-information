import { useEffect, useRef, useState } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage6.jpg";
import { galleryPhotos6 } from "../data/PhotoGridSet";

const GalleryPage6 = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    setDocumentTitle("Holmen");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            setTitleVisible(true);
          } else if (entry.target === textRef.current) {
            setTextVisible(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <LayoutPage headerTitle="Holmen" headerBackgroundImage={backgroundImage}>
      <article className={styles.container}>
        <h2
          ref={titleRef}
          className={`${styles.title} ${styles.animatedElement} ${
            titleVisible ? styles.visible : ""
          }`}
        >
          Holmen
        </h2>
        <p
          ref={textRef}
          className={`${styles.text} ${styles.animatedElement} ${
            textVisible ? styles.visible : ""
          }`}
        >
          Kolerakyrkogården på Holmen i Holmsund, Västerbotten, är en historisk
          plats som minner om en svår tid då koleraepidemier härjade.
          Kyrkogården anlades på 1800-talet för att begrava offren för dessa
          epidemier och är idag ett tyst vittnesmål om de utmaningar samhället
          stod inför. Den är ett kulturhistoriskt minnesmärke och påminner om de
          medicinska och sociala problem som drabbade området under den tiden.
          Besökare kan fortfarande se de enkla gravarna och en minnestavla som
          hedrar de avlidna.
        </p>
        <PhotoGridAddon photos={galleryPhotos6} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage6;

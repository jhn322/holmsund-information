import { useEffect, useRef, useState } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage3.jpg";
import { galleryPhotos3 } from "../data/PhotoGridSet";

const GalleryPage3 = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    setDocumentTitle("Sikskärsvaken");

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
    <LayoutPage
      headerTitle="Sikskärsvaken"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2
          ref={titleRef}
          className={`${styles.title} ${styles.animatedElement} ${
            titleVisible ? styles.visible : ""
          }`}
        >
          Sikskärsvaken
        </h2>
        <p
          ref={textRef}
          className={`${styles.text} ${styles.animatedElement} ${
            textVisible ? styles.visible : ""
          }`}
        >
          Sikskärsvaken och dess omgivningar bär på en rik kulturhistoria.
          Historiska lämningar och berättelser från tidigare generationer ger
          besökare en inblick i områdets förflutna. Detta gör det inte bara till
          en plats för rekreation, utan också till en destination för dem som är
          intresserade av historia och kulturarv.
        </p>
        <PhotoGridAddon photos={galleryPhotos3} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage3;

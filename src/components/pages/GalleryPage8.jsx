import { useEffect, useRef, useState } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage8.jpg";
import { galleryPhotos8 } from "../data/PhotoGridSet";

const GalleryPage8 = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    setDocumentTitle("Holmsund hamn");

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
      headerTitle="Holmsund hamn"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2
          ref={titleRef}
          className={`${styles.title} ${styles.animatedElement} ${
            titleVisible ? styles.visible : ""
          }`}
        >
          Holmsund hamn
        </h2>
        <p
          ref={textRef}
          className={`${styles.text} ${styles.animatedElement} ${
            textVisible ? styles.visible : ""
          }`}
        >
          Holmsunds hamn, som idag är en del av Umeå hamn, har sina rötter i
          slutet av 1800-talet. Den grundades för att hantera de växande export-
          och importbehoven, särskilt från den lokala sågverksindustrin, som
          blomstrade i regionen.
        </p>
        <PhotoGridAddon photos={galleryPhotos8} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage8;

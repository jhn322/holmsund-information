import { useEffect, useRef, useState } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage7.jpg";
import { galleryPhotos7 } from "../data/PhotoGridSet";

const GalleryPage7 = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    setDocumentTitle("Skärgårdsskolan");

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
      headerTitle="Skärgårdsskolan"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2
          ref={titleRef}
          className={`${styles.title} ${styles.animatedElement} ${
            titleVisible ? styles.visible : ""
          }`}
        >
          Skärgårdsskolan
        </h2>
        <p
          ref={textRef}
          className={`${styles.text} ${styles.animatedElement} ${
            textVisible ? styles.visible : ""
          }`}
        >
          Med fokus på både fysisk och psykisk hälsa erbjuder Skärgårdsskolan
          ett omfattande stödprogram, inklusive kuratorer och specialpedagoger,
          för att säkerställa alla elevers välmående och utveckling.
        </p>
        <PhotoGridAddon photos={galleryPhotos7} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage7;

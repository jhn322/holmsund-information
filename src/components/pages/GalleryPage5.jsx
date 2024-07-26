import { useEffect, useRef, useState } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage5.jpg";
import { galleryPhotos5 } from "../data/PhotoGridSet";

const GalleryPage5 = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    setDocumentTitle("Holmsundsbanan");

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
      headerTitle="Holmsundsbanan"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2
          ref={titleRef}
          className={`${styles.title} ${styles.animatedElement} ${
            titleVisible ? styles.visible : ""
          }`}
        >
          Holmsundsbanan
        </h2>
        <p
          ref={textRef}
          className={`${styles.text} ${styles.animatedElement} ${
            textVisible ? styles.visible : ""
          }`}
        >
          Holmsunds järnväg byggdes under slutet av 1800-talet, med byggstart år
          1899 och färdigställande 1901, för att förbättra
          transportmöjligheterna i regionen. Den blev snabbt en viktig länk för
          både person- och godstrafik mellan Holmsund och Umeå.
        </p>
        <PhotoGridAddon photos={galleryPhotos5} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage5;

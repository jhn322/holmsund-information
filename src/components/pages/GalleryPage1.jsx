import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage1.jpg";
import { galleryPhotos1 } from "../data/PhotoGridSet";

const GalleryPage1 = () => {
  useEffect(() => {
    setDocumentTitle("Österfjärden");
  }, []);

  return (
    <LayoutPage
      headerTitle="Österfjärden"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Österfjärden</h2>
        <p className={styles.text}>
          Österfjärden är också en populär plats för fiske, där både amatörer
          och erfarna fiskare kan fånga olika arter av sötvattens- och havsfisk.
          De lugna vattnen och den omgivande naturen bidrar till en avkopplande
          och fridfull fiskeupplevelse.
        </p>
        <PhotoGridAddon photos={galleryPhotos1} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage1;

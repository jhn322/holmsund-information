import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage3.jpg";
import { galleryPhotos3 } from "../data/PhotoGridSet";

const GalleryPage3 = () => {
  useEffect(() => {
    setDocumentTitle("Galleri-3");
  }, []);

  return (
    <LayoutPage
      headerTitle="Sikskärsvaken"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Sikskärsvaken</h2>
        <p className={styles.text}>
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

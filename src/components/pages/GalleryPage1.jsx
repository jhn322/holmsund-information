import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage1.jpg";
import { galleryPhotos1 } from "../data/PhotoGridSet";

const GalleryPage1 = () => {
  useEffect(() => {
    setDocumentTitle("Galleri-1");
  }, []);

  return (
    <LayoutPage
      headerTitle="Gallery Page 1"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Gallery 1</h2>
        <p className={styles.boldText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          omnis possimus incidunt quo voluptatibus sunt libero.
        </p>
        <PhotoGridAddon photos={galleryPhotos1} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage1;

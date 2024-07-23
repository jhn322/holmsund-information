import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage6.jpg";
import { galleryPhotos6 } from "../data/PhotoGridSet";

const GalleryPage6 = () => {
  useEffect(() => {
    setDocumentTitle("Galleri-6");
  }, []);

  return (
    <LayoutPage
      headerTitle="Gallery Page 6"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Gallery 6</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          omnis possimus incidunt quo voluptatibus sunt libero.
        </p>
        <PhotoGridAddon photos={galleryPhotos6} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage6;

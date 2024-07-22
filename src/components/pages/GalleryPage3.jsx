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
      headerTitle="Gallery Page 3"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Gallery 3</h2>
        <p className={styles.boldText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          omnis possimus incidunt quo voluptatibus sunt libero.
        </p>
        <PhotoGridAddon photos={galleryPhotos3} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage3;

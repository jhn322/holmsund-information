import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage7.jpg";
import { galleryPhotos7 } from "../data/PhotoGridSet";

const GalleryPage7 = () => {
  useEffect(() => {
    setDocumentTitle("Galleri-7");
  }, []);

  return (
    <LayoutPage
      headerTitle="Gallery Page 7"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Gallery 7</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          omnis possimus incidunt quo voluptatibus sunt libero.
        </p>
        <PhotoGridAddon photos={galleryPhotos7} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage7;

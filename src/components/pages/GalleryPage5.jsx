import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage5.jpg";
import { galleryPhotos5 } from "../data/PhotoGridSet";

const GalleryPage5 = () => {
  useEffect(() => {
    setDocumentTitle("Galleri-5");
  }, []);

  return (
    <LayoutPage
      headerTitle="Gallery Page 5"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Gallery 5</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          omnis possimus incidunt quo voluptatibus sunt libero.
        </p>
        <PhotoGridAddon photos={galleryPhotos5} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage5;

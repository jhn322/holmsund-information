import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage2.jpg";
import { galleryPhotos4 } from "../data/PhotoGridSet";

const GalleryPage4 = () => {
  useEffect(() => {
    setDocumentTitle("Galleri-4");
  }, []);

  return (
    <LayoutPage
      headerTitle="Gallery Page 4"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Gallery 4</h2>
        <p className={styles.boldText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          omnis possimus incidunt quo voluptatibus sunt libero.
        </p>
        <PhotoGridAddon photos={galleryPhotos4} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage4;

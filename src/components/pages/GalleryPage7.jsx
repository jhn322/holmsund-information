import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage7.jpg";
import { galleryPhotos7 } from "../data/PhotoGridSet";

const GalleryPage7 = () => {
  useEffect(() => {
    setDocumentTitle("Skärgårdsskolan");
  }, []);

  return (
    <LayoutPage
      headerTitle="Skärgårdsskolan"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Skärgårdsskolan</h2>
        <p className={styles.text}>
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

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
        <PhotoGridAddon photos={galleryPhotos3} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage3;

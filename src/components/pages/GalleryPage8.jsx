import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage8.jpg";
import { galleryPhotos8 } from "../data/PhotoGridSet";

const GalleryPage8 = () => {
  useEffect(() => {
    setDocumentTitle("Holmsund hamn");
  }, []);

  return (
    <LayoutPage
      headerTitle="Holmsund hamn"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Holmsund hamn</h2>
        <p className={styles.text}>
          Holmsunds hamn, som idag är en del av Umeå hamn, har sina rötter i
          slutet av 1800-talet. Den grundades för att hantera de växande export-
          och importbehoven, särskilt från den lokala sågverksindustrin, som
          blomstrade i regionen.
        </p>
        <PhotoGridAddon photos={galleryPhotos8} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage8;

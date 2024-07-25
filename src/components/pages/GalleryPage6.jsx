import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage6.jpg";
import { galleryPhotos6 } from "../data/PhotoGridSet";

const GalleryPage6 = () => {
  useEffect(() => {
    setDocumentTitle("Holmen");
  }, []);

  return (
    <LayoutPage headerTitle="Holmen" headerBackgroundImage={backgroundImage}>
      <article className={styles.container}>
        <h2 className={styles.title}>Holmen</h2>
        <p className={styles.text}>
          Kolerakyrkogården på Holmen i Holmsund, Västerbotten, är en historisk
          plats som minner om en svår tid då koleraepidemier härjade.
          Kyrkogården anlades på 1800-talet för att begrava offren för dessa
          epidemier och är idag ett tyst vittnesmål om de utmaningar samhället
          stod inför. Den är ett kulturhistoriskt minnesmärke och påminner om de
          medicinska och sociala problem som drabbade området under den tiden.
          Besökare kan fortfarande se de enkla gravarna och en minnestavla som
          hedrar de avlidna.
        </p>
        <PhotoGridAddon photos={galleryPhotos6} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage6;

import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage4.jpg";
import { galleryPhotos4 } from "../data/PhotoGridSet";

const GalleryPage4 = () => {
  useEffect(() => {
    setDocumentTitle("Galleri-4");
  }, []);

  return (
    <LayoutPage
      headerTitle="Holmsunds kyrka"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Holmsunds kyrka</h2>
        <p className={styles.text}>
          Holmsunds kyrka, belägen i Holmsund i Umeå kommun, är en träkyrka som
          uppfördes 1863. Kyrkan ritades av Johan Anders Linder, en arkitekt och
          byggmästare känd för sina träkonstruktioner. Byggnaden kännetecknas av
          sin enkla men eleganta arkitektur, typisk för norrländska träkyrkor
          från 1800-talet.
        </p>
        <PhotoGridAddon photos={galleryPhotos4} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage4;

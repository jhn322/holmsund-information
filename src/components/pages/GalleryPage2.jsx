import { useEffect } from "react";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import PhotoGridAddon from "../addon/PhotoGridAddon";
import LayoutPage from "../layouts/LayoutPage";
import styles from "../../styles/pages/AllPage.module.css";
import backgroundImage from "../../assets/gallery/galleryPage2.jpg";
import { galleryPhotos2 } from "../data/PhotoGridSet";

const GalleryPage2 = () => {
  useEffect(() => {
    setDocumentTitle("Storsjöparken");
  }, []);

  return (
    <LayoutPage
      headerTitle="Storsjöparken"
      headerBackgroundImage={backgroundImage}
    >
      <article className={styles.container}>
        <h2 className={styles.title}>Storsjöparken</h2>
        <p className={styles.text}>
          Storsjöparken i Holmsund är en populär park som erbjuder en
          avkopplande miljö för både lokalbor och besökare. Parken har
          natursköna promenadstigar, lekplatser för barn och ett vackert
          sjölandskap som lockar till picknick och friluftsaktiviteter.
        </p>
        <PhotoGridAddon photos={galleryPhotos2} />
      </article>
    </LayoutPage>
  );
};

export default GalleryPage2;

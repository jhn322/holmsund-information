import React from "react";

// CSS
import styles from "../../styles/pages/GalleryPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/gallery/galleryPage2.jpg";

const GalleryPage2 = () => {
  return (
    <LayoutPage
      headerTitle="Gallery Page 2"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon3={true}
      renderActivityAddon1={true}
      renderGalleryAddon2={true}
      discoverTitle2="Aktiviteter"
      galleryTitle3="Utforska 2"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default GalleryPage2;

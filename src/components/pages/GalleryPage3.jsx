import React from "react";

// CSS
import styles from "../../styles/pages/GalleryPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/gallery/galleryPage3.jpg";

const GalleryPage3 = () => {
  return (
    <LayoutPage
      headerTitle="Gallery Page 3"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon2={true}
      renderActivityAddon4={true}
      renderGalleryAddon3={true}
      discoverTitle2="Upptäck 2"
      galleryTitle3="Aktiviteter"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default GalleryPage3;

import React from "react";

// CSS
import styles from "../../styles/pages/GalleryPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/gallery/galleryPage4.jpg";

const GalleryPage4 = () => {
  return (
    <LayoutPage
      headerTitle="Gallery Page 4"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon4={true}
      renderActivityAddon3={true}
      renderGalleryAddon1={true}
      discoverTitle2="Galleri"
      galleryTitle3="Upptäck 1"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default GalleryPage4;

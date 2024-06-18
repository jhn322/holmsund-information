import React from "react";

// CSS
import styles from "../../styles/pages/GalleryPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/gallery/galleryPage1.jpg";

const GalleryPage1 = () => {
  return (
    <LayoutPage
      headerTitle="Gallery Page 1"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon1={true}
      renderActivityAddon2={true}
      renderGalleryAddon4={true}
      discoverTitle2="Utforska 1"
      galleryTitle3="Galleri"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default GalleryPage1;

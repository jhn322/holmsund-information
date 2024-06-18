import React from "react";

// CSS
import styles from "../../styles/pages/DiscoverPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/discover/discoverPage8.jpg";

const DiscoverPage8 = () => {
  return (
    <LayoutPage
      headerTitle="Discover Page 8 "
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon2={true}
      renderActivityAddon4={true}
      renderGalleryAddon1={true}
      discoverTitle2="Utforska 2"
      galleryTitle1="Utforska 1"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default DiscoverPage8;

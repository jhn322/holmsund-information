import React from "react";

// CSS
import styles from "../../styles/pages/DiscoverPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/discover/discoverPage2.jpg";

const DiscoverPage2 = () => {
  return (
    <LayoutPage
      headerTitle="Discover Page 2"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon3={true}
      renderActivityAddon1={true}
      renderGalleryAddon2={true}
      discoverTitle3="Aktiviteter"
      galleryTitle2="Upptäck 2"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default DiscoverPage2;

import React from "react";

// CSS
import styles from "../../styles/pages/DiscoverPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/discover/discoverPage4.jpg";

const DiscoverPage4 = () => {
  return (
    <LayoutPage
      headerTitle="Discover Page 4"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon3={true}
      renderActivityAddon4={true}
      renderGalleryAddon1={true}
      discoverTitle3="Aktiviteter"
      galleryTitle1="Upptäck 1"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default DiscoverPage4;

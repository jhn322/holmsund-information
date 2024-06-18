import React from "react";

// CSS
import styles from "../../styles/pages/DiscoverPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/discover/discoverPage3.jpg";

const DiscoverPage3 = () => {
  return (
    <LayoutPage
      headerTitle="Discover Page 3"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon1={true}
      renderActivityAddon3={true}
      renderGalleryAddon3={true}
      discoverTitle1="Utforska 1"
      galleryTitle3="Aktiviteter"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default DiscoverPage3;

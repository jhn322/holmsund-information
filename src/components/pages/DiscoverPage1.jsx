import React from "react";

// CSS
import styles from "../../styles/pages/DiscoverPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/discover/discoverPage1.jpg";

const DiscoverPage1 = () => {
  return (
    <LayoutPage
      headerTitle="Discover Page 1"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon2={true}
      renderActivityAddon1={true}
      renderGalleryAddon4={true}
      discoverTitle2="Utforska 2"
      galleryTitle4="Galleri"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default DiscoverPage1;

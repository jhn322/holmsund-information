import React from "react";

// CSS
import styles from "../../styles/pages/DiscoverPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/discover/discoverPage6.jpg";

const DiscoverPage6 = () => {
  return (
    <LayoutPage
      headerTitle="Discover Page 6"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon4={true}
      renderActivityAddon2={true}
      renderGalleryAddon3={true}
      discoverTitle4="Galleri"
      galleryTitle3="Aktiviteter"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default DiscoverPage6;

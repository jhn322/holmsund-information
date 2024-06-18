import React from "react";

// CSS
import styles from "../../styles/pages/DiscoverPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/discover/discoverPage7.jpg";

const DiscoverPage7 = () => {
  return (
    <LayoutPage
      headerTitle="Discover Page 7"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon1={true}
      renderActivityAddon2={true}
      renderGalleryAddon4={true}
      discoverTitle1="Utforska 1"
      galleryTitle4="Galleri"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default DiscoverPage7;

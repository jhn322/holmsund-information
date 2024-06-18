import React from "react";

// CSS
import styles from "../../styles/pages/DiscoverPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/discover/discoverPage5.jpg";

const DiscoverPage5 = () => {
  return (
    <LayoutPage
      headerTitle="Discover Page 5"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon4={true}
      renderActivityAddon3={true}
      renderGalleryAddon2={true}
      discoverTitle4="Galleri"
      galleryTitle2="Utforska 2"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default DiscoverPage5;

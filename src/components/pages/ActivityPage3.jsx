import React from "react";

// CSS
import styles from "../../styles/pages/ActivityPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/activity/activityPage3.jpg";

const ActivityPage3 = () => {
  return (
    <LayoutPage
      headerTitle="Activity Page 3"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon1={true}
      renderActivityAddon2={true}
      renderGalleryAddon4={true}
      discoverTitle1="Upptäck 1"
      galleryTitle4="Galleri"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default ActivityPage3;

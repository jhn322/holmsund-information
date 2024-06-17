import React from "react";

// CSS
import styles from "../../styles/pages/ActivityPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/activity/activityPage1.jpg";

const ActivityPage1 = () => {
  return (
    <LayoutPage
      headerTitle="Activity Page 1"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon2={true}
      renderActivityAddon4={true}
      renderGalleryAddon3={true}
      discoverTitle2="Upptäck 2"
      galleryTitle3="Aktiviteter"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default ActivityPage1;

import React from "react";

// CSS
import styles from "../../styles/pages/ActivityPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/activity/activityPage4.jpg";

const ActivityPage4 = () => {
  return (
    <LayoutPage
      headerTitle="Activity Page 4"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon3={true}
      renderActivityAddon1={true}
      renderGalleryAddon2={true}
      discoverTitle3="Aktiviteter"
      galleryTitle4="Galleri"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default ActivityPage4;

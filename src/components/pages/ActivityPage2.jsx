import React from "react";

// CSS
import styles from "../../styles/pages/ActivityPage.module.css";

// Components
import LayoutPage from "../layouts/LayoutPage";

// Image
import backgroundImage from "../../assets/activity/activityPage2.jpg";

const ActivityPage2 = () => {
  return (
    <LayoutPage
      headerTitle="Activity Page 2"
      headerBackgroundImage={backgroundImage}
      renderDiscoverAddon4={true}
      renderActivityAddon3={true}
      renderGalleryAddon1={true}
      discoverTitle4="Galleri"
      galleryTitle1="Utforska 1"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutPage>
  );
};

export default ActivityPage2;

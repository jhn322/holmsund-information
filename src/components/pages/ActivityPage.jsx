import React from "react";
import GalleryAddon from "../addon/GalleryAddon";

// CSS
import styles from "../../styles/pages/GalleryPageMain.module.css";

// Images
import headerBackgroundImage1 from "../../assets/headerBackgroundImage1.jpg";

// Components
import Layout from "../layouts/Layout";

const ActivityPage = () => {
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  const gridItems = images.map((image, index) => (
    <div className={styles.gridItem} key={index}>
      <img src={image} alt={`Image ${index}`} />
    </div>
  ));

  return (
    <Layout
      headerTitle="Activity Page"
      headerBackgroundImage={headerBackgroundImage1}
    >
      <div className={styles.gridContainer}>{gridItems}</div>
      <GalleryAddon />
    </Layout>
  );
};

export default ActivityPage;

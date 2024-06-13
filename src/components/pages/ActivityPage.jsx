import React from "react";
import GalleryAddon from "../addon/GalleryAddon";

// CSS
import styles from "../../styles/pages/GalleryPageMain.module.css";

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
    <Layout>
      <div className={styles.gridContainer}>{gridItems}</div>
      <GalleryAddon />
    </Layout>
  );
};

export default ActivityPage;

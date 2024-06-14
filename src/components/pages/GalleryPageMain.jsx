// GalleryPageMain.jsx
import React from "react";
import DiscoverAddon from "../addon/DiscoverAddon";

// CSS
import styles from "../../styles/pages/GalleryPageMain.module.css";

// Images
import headerBackgroundImage3 from "../../assets/headerBackgroundImage3.jpg";

// Components
import Layout from "../layouts/Layout";

const GalleryPageMain = () => {
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
      headerTitle="Gallery Main Page"
      headerBackgroundImage={headerBackgroundImage3}
    >
      <div className={styles.gridContainer}>{gridItems}</div>
      <DiscoverAddon />
    </Layout>
  );
};

export default GalleryPageMain;

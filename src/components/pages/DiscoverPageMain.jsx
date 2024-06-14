// DiscoverPageMain.jsx
import React from "react";
import ActivityAddon from "../addon/ActivityAddon";

// CSS
import styles from "../../styles/pages/DiscoverPageMain.module.css";

// Components
import Layout from "../layouts/Layout";

// Images
import headerBackgroundImage2 from "../../assets/headerBackgroundImage2.jpg";

const DiscoverPageMain = () => {
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
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
      headerTitle="Discover Main Page"
      headerBackgroundImage={headerBackgroundImage2}
    >
      <div className={styles.gridContainer}>{gridItems}</div>
      <ActivityAddon />
    </Layout>
  );
};

export default DiscoverPageMain;

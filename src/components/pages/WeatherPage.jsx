// WeatherPage.jsx
import React from "react";
import DiscoverInspiredAddon from "../addon/DiscoverInspiredAddon";

// CSS
import styles from "../../styles/pages/WeatherPage.module.css";

// Components
import Layout from "../layouts/Layout";

// Images
import headerBackgroundImage4 from "../../assets/headerBackgroundImage4.jpg";

const WeatherPage = () => {
  return (
    <Layout
      headerTitle="Weather Page"
      headerBackgroundImage={headerBackgroundImage4}
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
      <DiscoverInspiredAddon />
    </Layout>
  );
};

export default WeatherPage;

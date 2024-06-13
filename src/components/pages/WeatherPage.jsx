import React from "react";
import DiscoverInspiredAddon from "../addon/DiscoverInspiredAddon";

// CSS
import styles from "../../styles/pages/WeatherPage.module.css";

// Components
import Layout from "../layouts/Layout";

const WeatherPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
      <DiscoverInspiredAddon />
    </Layout>
  );
};

export default WeatherPage;

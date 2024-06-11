import React from "react";

// Components
import Layout from "../layouts/Layout";
import Header from "../components/Header";
import ContentCircle from "../components/ContentCircle";
import Activity from "../components/Activity";
import Discover from "../components/Discover";
import DiscoverInspired from "../components/DiscoverInspired";
import Gallery from "../components/Gallery";
import Separator from "../components/Separator";
import ShareExtra from "../components/ShareExtra";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <ContentCircle />
      <Separator />
      <Discover />
      <Activity />
      <DiscoverInspired />
      <Gallery />
      <ShareExtra />
    </Layout>
  );
};

export default HomePage;

import React from "react";

// Components
import Layout from "../layouts/Layout";
import Header from "../home/Header";
import ContentCircle from "../home/ContentCircle";
import Activity from "../home/Activity";
import Discover from "../home/Discover";
import DiscoverInspired from "../home/DiscoverInspired";
import Gallery from "../home/Gallery";
import Separator from "../home/Separator";
import ExtraHome from "../home/ExtraHome";

const HomePage = () => {
  return (
    <Layout renderExtra={false} renderHeaderAddon={false}>
      <Header />
      <ContentCircle />
      <Separator />
      <Discover />
      <Activity />
      <DiscoverInspired />
      <Gallery />
      <ExtraHome />
    </Layout>
  );
};

export default HomePage;

import React from "react";

// Components
import Navigation from "../common/Navigation";
import Header from "../home/Header";
import ContentCircle from "../home/ContentCircle";
import Separator from "../home/Separator";
import Discover from "../home/Discover";
import Activity from "../home/Activity";
import DiscoverInspired from "../home/DiscoverInspired";
import Gallery from "../home/Gallery";
import ExtraHome from "../home/ExtraHome";
import ScrollUp from "../common/ScrollUp";
import Cookies from "../common/Cookies";
import Footer from "../common/Footer";

const LayoutHome = () => {
  return (
    <div>
      <Navigation />
      <ScrollUp />
      <Header />
      <ContentCircle />
      <Separator />
      <Discover />
      <Activity />
      <DiscoverInspired />
      <Gallery />
      <ExtraHome />
      <Cookies />
      <Footer />
    </div>
  );
};

export default LayoutHome;

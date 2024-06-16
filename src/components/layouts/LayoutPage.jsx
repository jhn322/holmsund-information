import React from "react";

// Components
import Navigation from "../common/Navigation";
import HeaderAddon from "../addon/HeaderAddon";
import ActivityAddon from "../addon/FeatureAddon1";
import DiscoverAddon from "../addon/FeatureAddon2";
import DiscoverInspiredAddon from "../addon/FeatureAddon3";
import GalleryAddon from "../addon/FeatureAddon4";
import Extra from "../common/Extra";
import ScrollUp from "../common/ScrollUp";
import Cookies from "../common/Cookies";
import Footer from "../common/Footer";

const LayoutPage = ({
  children,
  headerTitle,
  headerBackgroundImage,
  renderActivityAddon = false,
  renderDiscoverAddon = false,
  renderDiscoverInspiredAddon = false,
  renderGalleryAddon = false,
}) => {
  return (
    <div>
      <Navigation />
      <HeaderAddon
        title={headerTitle}
        backgroundImage={headerBackgroundImage}
      />
      <main>{children}</main>
      {renderActivityAddon && <ActivityAddon />}
      {renderDiscoverAddon && <DiscoverAddon />}
      {renderDiscoverInspiredAddon && <DiscoverInspiredAddon />}
      {renderGalleryAddon && <GalleryAddon />}
      <Extra />
      <ScrollUp />
      <Cookies />
      <Footer />
    </div>
  );
};

export default LayoutPage;

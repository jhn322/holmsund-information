import React from "react";

// Components
import Navigation from "../common/Navigation";
import HeaderAddon from "../addon/HeaderAddon";
import FeatureAddon1 from "../addon/FeatureAddon1";
import FeatureAddon2 from "../addon/FeatureAddon2";
import FeatureAddon3 from "../addon/FeatureAddon3";
import FeatureAddon4 from "../addon/FeatureAddon4";
import Extra from "../common/Extra";
import ScrollUp from "../common/ScrollUp";
import Cookies from "../common/Cookies";
import Footer from "../common/Footer";

const LayoutMainPage = ({
  children,
  headerTitle,
  headerBackgroundImage,
  renderFeatureAddon1 = false,
  renderFeatureAddon2 = false,
  renderFeatureAddon3 = false,
  renderFeatureAddon4 = false,
}) => {
  return (
    <div>
      <Navigation />
      <HeaderAddon
        title={headerTitle}
        backgroundImage={headerBackgroundImage}
      />
      <main>{children}</main>
      {renderFeatureAddon1 && <FeatureAddon1 />}
      {renderFeatureAddon2 && <FeatureAddon2 />}
      {renderFeatureAddon3 && <FeatureAddon3 />}
      {renderFeatureAddon4 && <FeatureAddon4 />}
      <Extra />
      <ScrollUp />
      <Cookies />
      <Footer />
    </div>
  );
};

export default LayoutMainPage;

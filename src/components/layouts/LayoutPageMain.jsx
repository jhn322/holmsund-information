import React from "react";

// Components
import Navigation from "../common/Navigation";
import HeaderAddon from "../addon/HeaderAddon";
import SeparatorAddon from "../addon/SeparatorAddon";
import FeaturedAddon1 from "../addon/FeaturedAddon1";
import FeaturedAddon2 from "../addon/FeaturedAddon2";
import FeaturedAddon3 from "../addon/FeaturedAddon3";
import FeaturedAddon4 from "../addon/FeaturedAddon4";
import DiscoverAddon1 from "../addon/DiscoverAddon1";
import DiscoverAddon2 from "../addon/DiscoverAddon2";
import DiscoverAddon3 from "../addon/DiscoverAddon3";
import DiscoverAddon4 from "../addon/DiscoverAddon4";
import Extra from "../common/Extra";
import ScrollUp from "../common/ScrollUp";
import Cookies from "../common/Cookies";
import Footer from "../common/Footer";

const LayoutMainPage = ({
  children,
  headerTitle,
  discoverTitle1,
  discoverTitle2,
  discoverTitle3,
  discoverTitle4,
  headerBackgroundImage,
  renderFeaturedAddon1 = false,
  renderFeaturedAddon2 = false,
  renderFeaturedAddon3 = false,
  renderFeaturedAddon4 = false,
  renderDiscoverAddon1 = false,
  renderDiscoverAddon2 = false,
  renderDiscoverAddon3 = false,
  renderDiscoverAddon4 = false,
}) => {
  return (
    <div>
      <Navigation />
      <HeaderAddon
        title={headerTitle}
        backgroundImage={headerBackgroundImage}
      />
      <main>{children}</main>
      <SeparatorAddon />
      {renderDiscoverAddon1 && <DiscoverAddon1 title={discoverTitle1} />}
      {renderDiscoverAddon2 && <DiscoverAddon2 title={discoverTitle2} />}
      {renderDiscoverAddon3 && <DiscoverAddon3 title={discoverTitle3} />}
      {renderDiscoverAddon4 && <DiscoverAddon4 title={discoverTitle4} />}
      {renderFeaturedAddon1 && <FeaturedAddon1 />}
      {renderFeaturedAddon2 && <FeaturedAddon2 />}
      {renderFeaturedAddon3 && <FeaturedAddon3 />}
      {renderFeaturedAddon4 && <FeaturedAddon4 />}
      <Extra />
      <ScrollUp />
      <Cookies />
      <Footer />
    </div>
  );
};

export default LayoutMainPage;

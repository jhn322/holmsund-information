import React from "react";

// Components
import Navigation from "../common/Navigation";
import HeaderAddon from "../addon/HeaderAddon";
import Extra from "../common/Extra";
import ScrollUp from "../common/ScrollUp";
import Cookies from "../common/Cookies";
import Footer from "../common/Footer";

const Layout = ({
  children,
  renderExtra = true,
  renderHeaderAddon = true,
  headerTitle,
  headerBackgroundImage,
}) => {
  return (
    <div>
      <Navigation />
      {renderHeaderAddon && (
        <HeaderAddon
          title={headerTitle}
          backgroundImage={headerBackgroundImage}
        />
      )}
      <main>{children}</main>
      {renderExtra && <Extra />}
      <ScrollUp />
      <Cookies />
      <Footer />
    </div>
  );
};

export default Layout;

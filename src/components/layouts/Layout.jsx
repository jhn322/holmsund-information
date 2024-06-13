import React from "react";

// Components
import Navigation from "../common/Navigation";
import ScrollUp from "../common/ScrollUp";
import Extra from "../common/Extra";
import Cookies from "../common/Cookies";
import Footer from "../common/Footer";

const Layout = ({ children, showExtra = true }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <ScrollUp />
      {showExtra && <Extra />}
      <Cookies />
      <Footer />
    </div>
  );
};

export default Layout;

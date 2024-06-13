import React from "react";

// Components
import Navigation from "../common/Navigation";
import Footer from "../common/Footer";
import ScrollUp from "../common/ScrollUp";
import Cookies from "../common/Cookies";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <ScrollUp />
      <Cookies />
    </div>
  );
};

export default Layout;

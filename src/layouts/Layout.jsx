import React from "react";

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import Cookies from "../components/Cookies";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <ScrollUp />
      <main>{children}</main>
      <Footer />
      <Cookies />
    </div>
  );
};

export default Layout;

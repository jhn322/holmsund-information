import React from "react";
import Navigation from "../common/Navigation";
import Header from "../home/Header";
import ContentCircle from "../home/ContentCircle";
import Separator from "../home/Separator";
import Discover from "../home/Discover";
import Activity from "../home/Activity";
import DiscoverInspired from "../home/DiscoverInspired";
import Gallery from "../home/Gallery";
import ExtraHome from "../home/ExtraHome";
import ScrollDown from "../common/ScrollDown";
import ScrollUp from "../common/ScrollUp";
import ScrollToTop from "../common/ScrollToTop";
import Cookies from "../common/Cookies";
import Footer from "../common/Footer";
import { ThemeProvider } from "../context/ThemeContext";

const LayoutHome = () => {
  return (
    <ThemeProvider>
      <main>
        <Navigation />
        <Header />
        <ContentCircle />
        <Separator />
        <Discover />
        <Activity />
        <DiscoverInspired />
        <Gallery />
        <ExtraHome />
        <ScrollDown />
        <ScrollUp />
        <ScrollToTop />
        <Cookies />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default LayoutHome;

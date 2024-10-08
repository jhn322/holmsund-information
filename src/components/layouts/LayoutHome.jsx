import React from "react";
import Nav from "../common/Nav";
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
      <div>
        <Nav />
        <header>
          <Header />
        </header>
        <main>
          <section>
            <ContentCircle />
          </section>
          <Separator />
          <section>
            <Discover />
          </section>
          <section>
            <Activity />
          </section>
          <section>
            <DiscoverInspired />
          </section>
          <section>
            <Gallery />
          </section>
          <section>
            <ExtraHome />
          </section>
          <ScrollDown />
          <ScrollUp />
          <ScrollToTop />
        </main>
        <footer>
          <Cookies />
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default LayoutHome;

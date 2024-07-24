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

import ActivityAddon2 from "../addon/ActivityAddon2";
import ActivityAddon3 from "../addon/ActivityAddon3";
import ActivityAddon4 from "../addon/ActivityAddon4";
import DiscoverAddon2 from "../addon/DiscoverAddon2";
import DiscoverAddon3 from "../addon/DiscoverAddon3";
import DiscoverAddon4 from "../addon/DiscoverAddon4";
import GalleryAddon2 from "../addon/GalleryAddon2";
import GalleryAddon3 from "../addon/GalleryAddon3";
import GalleryAddon4 from "../addon/GalleryAddon4";

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
          {/* <DiscoverAddon2 /> */}
          {/* <DiscoverAddon3 />
          <DiscoverAddon4 /> */}
          {/* <ActivityAddon2 /> */}
          {/* <ActivityAddon3 />
          <ActivityAddon4 /> */}
          {/* <GalleryAddon2 /> */}
          {/* <GalleryAddon3 />
          <GalleryAddon4 /> */}
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

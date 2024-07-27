import React, { useEffect, useState } from "react";
import Nav from "../common/Nav";
import HeaderAddonPage from "../addon/HeaderAddonPage";
import Breadcrumb from "../common/Breadcrumb";
import SeparatorAddon from "../addon/SeparatorAddon";
import ActivityAddon1 from "../addon/ActivityAddon1";
import ActivityAddon2 from "../addon/ActivityAddon2";
import ActivityAddon3 from "../addon/ActivityAddon3";
import ActivityAddon4 from "../addon/ActivityAddon4";
import ActivityAddon5 from "../addon/ActivityAddon5";
import ActivityAddon6 from "../addon/ActivityAddon6";
import DiscoverAddon1 from "../addon/DiscoverAddon1";
import DiscoverAddon2 from "../addon/DiscoverAddon2";
import DiscoverAddon3 from "../addon/DiscoverAddon3";
import DiscoverAddon4 from "../addon/DiscoverAddon4";
import DiscoverAddon5 from "../addon/DiscoverAddon5";
import DiscoverAddon6 from "../addon/DiscoverAddon6";
import GalleryAddon1 from "../addon/GalleryAddon1";
import GalleryAddon2 from "../addon/GalleryAddon2";
import GalleryAddon3 from "../addon/GalleryAddon3";
import GalleryAddon4 from "../addon/GalleryAddon4";
import GalleryAddon5 from "../addon/GalleryAddon5";
import GalleryAddon6 from "../addon/GalleryAddon6";
import Extra from "../common/Extra";
import ScrollDown from "../common/ScrollDown";
import ScrollUp from "../common/ScrollUp";
import ScrollToTop from "../common/ScrollToTop";
import Cookies from "../common/Cookies";
import Footer from "../common/Footer";
import { ThemeProvider } from "../context/ThemeContext";

const LayoutPage = ({ children, headerTitle, headerBackgroundImage }) => {
  const [randomComponents, setRandomComponents] = useState([]);

  useEffect(() => {
    const activityComponents = [
      <ActivityAddon1 key="activity1" />,
      <ActivityAddon2 key="activity2" />,
      <ActivityAddon3 key="activity3" />,
      <ActivityAddon4 key="activity4" />,
      <ActivityAddon5 key="activity5" />,
      <ActivityAddon6 key="activity6" />,
    ];

    const discoverComponents = [
      <DiscoverAddon1 key="discover1" title="Res Genom Orten" />,
      <DiscoverAddon2 key="discover2" title="Varierade Möjligheter" />,
      <DiscoverAddon3 key="discover3" title="Håll Kroppen Aktiv" />,
      <DiscoverAddon4 key="discover4" title="Nya Äventyr Väntar" />,
      <DiscoverAddon5 key="discover5" title="Naturens Tysta Vägar" />,
      <DiscoverAddon6 key="discover6" title="Upptäck Nya Platser" />,
    ];

    const galleryComponents = [
      <GalleryAddon1 key="gallery1" title="Fridfullt Liv" />,
      <GalleryAddon2 key="gallery2" title="Koppla Av" />,
      <GalleryAddon3 key="gallery3" title="Aktiva Dagar" />,
      <GalleryAddon4 key="gallery4" title="Nya Äventyr" />,
      <GalleryAddon5 key="gallery5" title="Unika Minnen" />,
      <GalleryAddon6 key="gallery6" title="Utmana Dig" />,
    ];

    const getRandomComponent = (array) => {
      return array[Math.floor(Math.random() * array.length)];
    };

    const selectedComponents = [
      getRandomComponent(activityComponents),
      getRandomComponent(discoverComponents),
      getRandomComponent(galleryComponents),
    ];

    // Shuffle the selected components
    for (let i = selectedComponents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [selectedComponents[i], selectedComponents[j]] = [
        selectedComponents[j],
        selectedComponents[i],
      ];
    }

    setRandomComponents(selectedComponents);
  }, []);

  return (
    <ThemeProvider>
      <div>
        <Nav />
        <HeaderAddonPage
          title={headerTitle}
          backgroundImage={headerBackgroundImage}
        />
        <Breadcrumb />
        <main>
          <section>{children}</section>
          <SeparatorAddon />
          {randomComponents}
          <Extra />
          <ScrollDown />
          <ScrollUp />
          <ScrollToTop />
        </main>
        <Cookies />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default LayoutPage;

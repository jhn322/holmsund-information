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

const LayoutPage = ({
  children,
  headerTitle,
  discoverTitle1,
  discoverTitle2,
  discoverTitle3,
  discoverTitle4,
  discoverTitle5,
  discoverTitle6,
  galleryTitle1,
  galleryTitle2,
  galleryTitle3,
  galleryTitle4,
  galleryTitle5,
  galleryTitle6,
  headerBackgroundImage,
  renderActivityAddon1 = false,
  renderActivityAddon2 = false,
  renderActivityAddon3 = false,
  renderActivityAddon4 = false,
  renderActivityAddon5 = false,
  renderActivityAddon6 = false,
  renderDiscoverAddon1 = false,
  renderDiscoverAddon2 = false,
  renderDiscoverAddon3 = false,
  renderDiscoverAddon4 = false,
  renderDiscoverAddon5 = false,
  renderDiscoverAddon6 = false,
  renderGalleryAddon1 = false,
  renderGalleryAddon2 = false,
  renderGalleryAddon3 = false,
  renderGalleryAddon4 = false,
  renderGalleryAddon5 = false,
  renderGalleryAddon6 = false,
}) => {
  const [shuffleComponents, setShuffleComponents] = useState([]);

  useEffect(() => {
    const components = [
      renderDiscoverAddon1 && (
        <DiscoverAddon1 key="discover1" title={discoverTitle1} />
      ),
      renderDiscoverAddon2 && (
        <DiscoverAddon2 key="discover2" title={discoverTitle2} />
      ),
      renderDiscoverAddon3 && (
        <DiscoverAddon3 key="discover3" title={discoverTitle3} />
      ),
      renderDiscoverAddon4 && (
        <DiscoverAddon4 key="discover4" title={discoverTitle4} />
      ),
      renderDiscoverAddon5 && (
        <DiscoverAddon5 key="discover5" title={discoverTitle5} />
      ),
      renderDiscoverAddon6 && (
        <DiscoverAddon6 key="discover6" title={discoverTitle6} />
      ),
      renderActivityAddon1 && <ActivityAddon1 key="activity1" />,
      renderActivityAddon2 && <ActivityAddon2 key="activity2" />,
      renderActivityAddon3 && <ActivityAddon3 key="activity3" />,
      renderActivityAddon4 && <ActivityAddon4 key="activity4" />,
      renderActivityAddon5 && <ActivityAddon5 key="activity5" />,
      renderActivityAddon6 && <ActivityAddon6 key="activity6" />,
      renderGalleryAddon1 && (
        <GalleryAddon1 key="gallery1" title={galleryTitle1} />
      ),
      renderGalleryAddon2 && (
        <GalleryAddon2 key="gallery2" title={galleryTitle2} />
      ),
      renderGalleryAddon3 && (
        <GalleryAddon3 key="gallery3" title={galleryTitle3} />
      ),
      renderGalleryAddon4 && (
        <GalleryAddon4 key="gallery4" title={galleryTitle4} />
      ),
      renderGalleryAddon5 && (
        <GalleryAddon5 key="gallery5" title={galleryTitle5} />
      ),
      renderGalleryAddon6 && (
        <GalleryAddon6 key="gallery6" title={galleryTitle6} />
      ),
    ].filter(Boolean);

    // Function to shuffle array
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    setShuffleComponents(shuffleArray(components));
  }, [
    renderActivityAddon1,
    renderActivityAddon2,
    renderActivityAddon3,
    renderActivityAddon4,
    renderActivityAddon5,
    renderActivityAddon6,
    renderDiscoverAddon1,
    renderDiscoverAddon2,
    renderDiscoverAddon3,
    renderDiscoverAddon4,
    renderDiscoverAddon5,
    renderDiscoverAddon6,
    renderGalleryAddon1,
    renderGalleryAddon2,
    renderGalleryAddon3,
    renderGalleryAddon4,
    renderGalleryAddon5,
    renderGalleryAddon6,
    discoverTitle1,
    discoverTitle2,
    discoverTitle3,
    discoverTitle4,
    discoverTitle5,
    discoverTitle6,
    galleryTitle1,
    galleryTitle2,
    galleryTitle3,
    galleryTitle4,
    galleryTitle5,
    galleryTitle6,
  ]);

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
          {shuffleComponents}
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

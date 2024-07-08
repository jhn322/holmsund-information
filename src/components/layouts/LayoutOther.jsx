import { useState, useEffect } from "react";

// Components
import Navigation from "../common/Navigation";
import TermsCircleAddon from "../addon/TermsCircleAddon";
import CookiesCircleAddon from "../addon/CookiesCircleAddon";
import AboutCircleAddon from "../addon/AboutCircleAddon";
import MapCircleAddon from "../addon/MapCircleAddon";
import Breadcrumb from "../common/Breadcrumb";
import OtherAddon from "../addon/OtherAddon";
import SeparatorAddon from "../addon/SeparatorAddon";
import ActivityAddon1 from "../addon/ActivityAddon1";
import ActivityAddon2 from "../addon/ActivityAddon2";
import ActivityAddon3 from "../addon/ActivityAddon3";
import ActivityAddon4 from "../addon/ActivityAddon4";
import DiscoverAddon1 from "../addon/DiscoverAddon1";
import DiscoverAddon2 from "../addon/DiscoverAddon2";
import DiscoverAddon3 from "../addon/DiscoverAddon3";
import DiscoverAddon4 from "../addon/DiscoverAddon4";
import GalleryAddon1 from "../addon/GalleryAddon1";
import GalleryAddon2 from "../addon/GalleryAddon2";
import GalleryAddon3 from "../addon/GalleryAddon3";
import GalleryAddon4 from "../addon/GalleryAddon4";
import Extra from "../common/Extra";
import ScrollDown from "../common/ScrollDown";
import ScrollUp from "../common/ScrollUp";
import Cookies from "../common/Cookies";
import Footer from "../common/Footer";

const LayoutPageOther = ({
  children,
  renderOtherAddon = false,
  renderSeparatorAddon = false,
  renderTermsCircleAddon = false,
  renderCookiesCircleAddon = false,
  renderAboutCircleAddon = false,
  renderMapCircleAddon = false,
  discoverTitle1,
  discoverTitle2,
  discoverTitle3,
  discoverTitle4,
  galleryTitle1,
  galleryTitle2,
  galleryTitle3,
  galleryTitle4,
  renderActivityAddon1 = false,
  renderActivityAddon2 = false,
  renderActivityAddon3 = false,
  renderActivityAddon4 = false,
  renderDiscoverAddon1 = false,
  renderDiscoverAddon2 = false,
  renderDiscoverAddon3 = false,
  renderDiscoverAddon4 = false,
  renderGalleryAddon1 = false,
  renderGalleryAddon2 = false,
  renderGalleryAddon3 = false,
  renderGalleryAddon4 = false,
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
      renderActivityAddon1 && <ActivityAddon1 key="activity1" />,
      renderActivityAddon2 && <ActivityAddon2 key="activity2" />,
      renderActivityAddon3 && <ActivityAddon3 key="activity3" />,
      renderActivityAddon4 && <ActivityAddon4 key="activity4" />,
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
    renderDiscoverAddon1,
    renderDiscoverAddon2,
    renderDiscoverAddon3,
    renderDiscoverAddon4,
    renderGalleryAddon1,
    renderGalleryAddon2,
    renderGalleryAddon3,
    renderGalleryAddon4,
    discoverTitle1,
    discoverTitle2,
    discoverTitle3,
    discoverTitle4,
    galleryTitle1,
    galleryTitle2,
    galleryTitle3,
    galleryTitle4,
  ]);

  return (
    <main>
      <Navigation />
      {renderTermsCircleAddon && <TermsCircleAddon />}
      {renderCookiesCircleAddon && <CookiesCircleAddon />}
      {renderAboutCircleAddon && <AboutCircleAddon />}
      {renderMapCircleAddon && <MapCircleAddon />}
      <Breadcrumb />
      <section>{children}</section>
      {renderSeparatorAddon && <SeparatorAddon />}
      {shuffleComponents}
      {renderOtherAddon && <OtherAddon />}
      <Extra />
      <ScrollDown />
      <ScrollUp />
      <Cookies />
      <Footer />
    </main>
  );
};

export default LayoutPageOther;

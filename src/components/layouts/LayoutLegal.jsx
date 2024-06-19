import React from "react";

// Components
import Navigation from "../common/Navigation";
import TermsCircleAddon from "../addon/TermsCircleAddon";
import CookiesCircleAddon from "../addon/CookiesCircleAddon";
import AboutCircleAddon from "../addon/AboutCircleAddon";
import Breadcrumb from "../common/Breadcrumb";
import Extra from "../common/Extra";
import ScrollDown from "../common/ScrollDown";
import ScrollUp from "../common/ScrollUp";
import Cookies from "../common/Cookies";
import Footer from "../common/Footer";

const LayoutPage = ({
  children,
  renderTermsCircleAddon = false,
  renderCookiesCircleAddon = false,
  renderAboutCircleAddon = false,
}) => {
  return (
    <main>
      <Navigation />
      {renderTermsCircleAddon && <TermsCircleAddon />}
      {renderCookiesCircleAddon && <CookiesCircleAddon />}
      {renderAboutCircleAddon && <AboutCircleAddon />}
      <Breadcrumb />
      <section>{children}</section>
      <Extra />
      <ScrollDown />
      <ScrollUp />
      <Cookies />
      <Footer />
    </main>
  );
};

export default LayoutPage;

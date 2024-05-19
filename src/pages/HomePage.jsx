import React from "react";

// Components
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ContentCircle from "../components/ContentCircle";
import Activity from "../components/Activity";
import Discover from "../components/Discover";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Separator from "../components/Separator";
import ScrollUp from "../components/ScrollUp";

const HomePage = () => {
  return (
    <main>
      <Navigation />
      <Header />
      <ContentCircle />
      <Separator />
      <Activity />
      <Discover />
      <Gallery />
      <Footer />
      <ScrollUp />
    </main>
  );
};

export default HomePage;

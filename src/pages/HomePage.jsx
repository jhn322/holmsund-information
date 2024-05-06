import React from "react";

// Components
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ContentCircle from "../components/ContentCircle";
import Separator from "../components/Separator";
import Spotlight from "../components/Spotlight";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

// Components
const HomePage = () => {
  return (
    <main>
      <Navigation />
      <Header />
      <ContentCircle />
      <Separator />
      <Spotlight />
      <Gallery />
      <Footer />
    </main>
  );
};

export default HomePage;

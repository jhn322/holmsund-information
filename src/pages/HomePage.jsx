import React from "react";

// Components
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Content from "../components/Content";
import Circle from "../components/Circle";
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
      <Content />
      <Circle />
      <Separator />
      <Spotlight />
      <Gallery />
      <Footer />
    </main>
  );
};

export default HomePage;

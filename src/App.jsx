import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import Weather from "./pages/Weather";
import SpotlightPage from "./pages/SpotlightPage";
import GalleryPage from "./pages/GalleryPage";
import MissingPage from "./pages/MissingPage";

const App = () => {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather" element={<Weather page="weather" />} />
          <Route
            path="/spotlightpage"
            element={<SpotlightPage page="spotlightpage" />}
          />
          <Route
            path="/gallerypage"
            element={<GalleryPage page="gallerypage" />}
          />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

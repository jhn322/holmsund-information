import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";
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
          <Route path="/väder" element={<WeatherPage page="väder" />} />
          <Route path="/upptäck" element={<SpotlightPage page="upptäck" />} />
          <Route path="/galleri" element={<GalleryPage page="galleri" />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

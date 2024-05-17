import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage";
import WeatherPage from "./pages/WeatherPage";
import DiscoverPage from "./pages/DiscoverPage1";
import GalleryPage from "./pages/GalleryPage";
import MissingPage from "./pages/MissingPage";

const App = () => {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/aktiviteter"
            element={<ActivityPage page="aktiviteter" />}
          />
          <Route path="/väder" element={<WeatherPage page="väder" />} />
          <Route path="/upptäck" element={<DiscoverPage page="upptäck" />} />
          <Route path="/galleri" element={<GalleryPage page="galleri" />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage";
import WeatherPage from "./pages/WeatherPage";
import DiscoverPage1 from "./pages/DiscoverPage1";
import DiscoverPage2 from "./pages/DiscoverPage2";
import DiscoverPage3 from "./pages/DiscoverPage3";
import DiscoverPage4 from "./pages/DiscoverPage4";
import GalleryPage from "./pages/GalleryPage";
import FooterPage from "./pages/FooterPage";
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
          <Route
            path="/upptäck-1"
            element={<DiscoverPage1 page="upptäck-1" />}
          />
          <Route
            path="/upptäck-2"
            element={<DiscoverPage2 page="upptäck-2" />}
          />
          <Route
            path="/upptäck-3"
            element={<DiscoverPage3 page="upptäck-3" />}
          />
          <Route
            path="/upptäck-4"
            element={<DiscoverPage4 page="upptäck-4" />}
          />
          <Route path="/galleri" element={<GalleryPage page="galleri" />} />
          <Route path="/footer" element={<FooterPage page="footer" />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

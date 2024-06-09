import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage";
import WeatherPage from "./pages/WeatherPage";
import DiscoverPageMain from "./pages/DiscoverPageMain";
import DiscoverPage1 from "./pages/DiscoverPage1";
import DiscoverPage2 from "./pages/DiscoverPage2";
import DiscoverPage3 from "./pages/DiscoverPage3";
import DiscoverPage4 from "./pages/DiscoverPage4";
import DiscoverPage5 from "./pages/DiscoverPage5";
import DiscoverPage6 from "./pages/DiscoverPage6";
import DiscoverPage7 from "./pages/DiscoverPage7";
import DiscoverPage8 from "./pages/DiscoverPage8";
import GalleryPageMain from "./pages/GalleryPageMain";
import GalleryPage1 from "./pages/GalleryPage1";
import GalleryPage2 from "./pages/GalleryPage2";
import GalleryPage3 from "./pages/GalleryPage3";
import GalleryPage4 from "./pages/GalleryPage4";
import MapPage from "./pages/MapPage";
import FooterPage from "./pages/FooterPage";
import MissingPage from "./pages/MissingPage";
import AboutUsPage from "./pages/AboutUsPage";
import CookiesPage from "./pages/CookiesPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

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

          {/* Upptäck sektion */}
          <Route
            path="/upptäck"
            element={<DiscoverPageMain page="upptäck" />}
          />
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
          <Route
            path="/upptäck-5"
            element={<DiscoverPage1 page="upptäck-5" />}
          />
          <Route
            path="/upptäck-6"
            element={<DiscoverPage2 page="upptäck-6" />}
          />
          <Route
            path="/upptäck-7"
            element={<DiscoverPage3 page="upptäck-7" />}
          />
          <Route
            path="/upptäck-8"
            element={<DiscoverPage4 page="upptäck-8" />}
          />

          {/* Galleri sektion */}
          <Route path="/galleri" element={<GalleryPageMain page="galleri" />} />
          <Route
            path="/galleri-1"
            element={<GalleryPage1 page="galleri-1" />}
          />
          <Route
            path="/galleri-2"
            element={<GalleryPage2 page="galleri-2" />}
          />
          <Route
            path="/galleri-3"
            element={<GalleryPage3 page="galleri-3" />}
          />
          <Route
            path="/galleri-4"
            element={<GalleryPage4 page="galleri-4" />}
          />
          <Route path="/karta" element={<MapPage page="karta" />} />
          <Route path="/footer" element={<FooterPage page="footer" />} />
          <Route path="/om-oss" element={<AboutUsPage page="om-oss" />} />
          <Route path="/kakor" element={<CookiesPage page="kakor" />} />
          <Route
            path="/anvandarvillkor"
            element={<TermsOfServicePage page="anvandarvillkor" />}
          />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

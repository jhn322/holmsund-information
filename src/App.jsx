import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./components/pages/HomePage";
import DiscoverPageMain from "./components/pages/DiscoverPageMain";
import DiscoverPage1 from "./components/pages/DiscoverPage1";
import DiscoverPage2 from "./components/pages/DiscoverPage2";
import DiscoverPage3 from "./components/pages/DiscoverPage3";
import DiscoverPage4 from "./components/pages/DiscoverPage4";
import DiscoverPage5 from "./components/pages/DiscoverPage5";
import DiscoverPage6 from "./components/pages/DiscoverPage6";
import DiscoverPage7 from "./components/pages/DiscoverPage7";
import DiscoverPage8 from "./components/pages/DiscoverPage8";
import ActivityPageMain from "./components/pages/ActivityPageMain";
import ActivityPage1 from "./components/pages/ActivityPage1";
import ActivityPage2 from "./components/pages/ActivityPage2";
import ActivityPage3 from "./components/pages/ActivityPage3";
import ActivityPage4 from "./components/pages/ActivityPage4";
import GalleryPageMain from "./components/pages/GalleryPageMain";
import GalleryPage1 from "./components/pages/GalleryPage1";
import GalleryPage2 from "./components/pages/GalleryPage2";
import GalleryPage3 from "./components/pages/GalleryPage3";
import GalleryPage4 from "./components/pages/GalleryPage4";
import WeatherPage from "./components/pages/WeatherPage";
import MapPage from "./components/pages/MapPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import CookiesPage from "./components/pages/CookiesPage";
import TermsOfServicePage from "./components/pages/TermsOfServicePage";
import MissingPage from "./components/pages/MissingPage";

const App = () => {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />

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
            element={<DiscoverPage5 page="upptäck-5" />}
          />
          <Route
            path="/upptäck-6"
            element={<DiscoverPage6 page="upptäck-6" />}
          />
          <Route
            path="/upptäck-7"
            element={<DiscoverPage7 page="upptäck-7" />}
          />
          <Route
            path="/upptäck-8"
            element={<DiscoverPage8 page="upptäck-8" />}
          />

          {/* Aktiviteter sektion */}
          <Route
            path="/aktiviteter"
            element={<ActivityPageMain page="aktiviteter" />}
          />
          <Route
            path="/aktiviteter-1"
            element={<ActivityPage1 page="aktiviteter-1" />}
          />
          <Route
            path="/aktiviteter-2"
            element={<ActivityPage2 page="aktiviteter-2" />}
          />
          <Route
            path="/aktiviteter-3"
            element={<ActivityPage3 page="aktiviteter-3" />}
          />
          <Route
            path="/aktiviteter-4"
            element={<ActivityPage4 page="aktiviteter-4" />}
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
          <Route path="/väder" element={<WeatherPage page="väder" />} />
          <Route path="/karta" element={<MapPage page="karta" />} />
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

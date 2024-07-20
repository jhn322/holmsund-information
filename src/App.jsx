import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
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
import ActivityPage5 from "./components/pages/ActivityPage5";
import ActivityPage6 from "./components/pages/ActivityPage6";
import ActivityPage7 from "./components/pages/ActivityPage7";
import ActivityPage8 from "./components/pages/ActivityPage8";
import GalleryPageMain from "./components/pages/GalleryPageMain";
import GalleryPage1 from "./components/pages/GalleryPage1";
import GalleryPage2 from "./components/pages/GalleryPage2";
import GalleryPage3 from "./components/pages/GalleryPage3";
import GalleryPage4 from "./components/pages/GalleryPage4";
import GalleryPage5 from "./components/pages/GalleryPage5";
import GalleryPage6 from "./components/pages/GalleryPage6";
import GalleryPage7 from "./components/pages/GalleryPage7";
import GalleryPage8 from "./components/pages/GalleryPage8";
import WeatherPage from "./components/pages/WeatherPage";
import MapPage from "./components/pages/MapPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import CookiesPage from "./components/pages/CookiesPage";
import TermsOfServicePage from "./components/pages/TermsOfServicePage";
import MissingPage from "./components/pages/MissingPage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Utforska section */}
          <Route
            path="/utforska"
            element={<DiscoverPageMain page="utforska" />}
          />
          <Route
            path="/utforska-1"
            element={<DiscoverPage1 page="utforska-1" />}
          />
          <Route
            path="/utforska-2"
            element={<DiscoverPage2 page="utforska-2" />}
          />
          <Route
            path="/utforska-3"
            element={<DiscoverPage3 page="utforska-3" />}
          />
          <Route
            path="/utforska-4"
            element={<DiscoverPage4 page="utforska-4" />}
          />
          <Route
            path="/utforska-5"
            element={<DiscoverPage5 page="utforska-5" />}
          />
          <Route
            path="/utforska-6"
            element={<DiscoverPage6 page="utforska-6" />}
          />
          <Route
            path="/utforska-7"
            element={<DiscoverPage7 page="utforska-7" />}
          />
          <Route
            path="/utforska-8"
            element={<DiscoverPage8 page="utforska-8" />}
          />
          {/* Aktiviteter section */}
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
          <Route
            path="/aktiviteter-5"
            element={<ActivityPage5 page="aktiviteter-5" />}
          />
          <Route
            path="/aktiviteter-6"
            element={<ActivityPage6 page="aktiviteter-6" />}
          />
          <Route
            path="/aktiviteter-7"
            element={<ActivityPage7 page="aktiviteter-7" />}
          />
          <Route
            path="/aktiviteter-8"
            element={<ActivityPage8 page="aktiviteter-8" />}
          />
          {/* Galleri section */}
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
          <Route
            path="/galleri-5"
            element={<GalleryPage5 page="galleri-5" />}
          />
          <Route
            path="/galleri-6"
            element={<GalleryPage6 page="galleri-6" />}
          />
          <Route
            path="/galleri-7"
            element={<GalleryPage7 page="galleri-7" />}
          />
          <Route
            path="/galleri-8"
            element={<GalleryPage8 page="galleri-8" />}
          />
          <Route path="/väder" element={<WeatherPage page="väder" />} />
          <Route path="/kartor" element={<MapPage page="kartor" />} />
          <Route path="/om-oss" element={<AboutUsPage page="om-oss" />} />
          <Route
            path="/cookiepolicy"
            element={<CookiesPage page="cookiepolicy" />}
          />
          <Route
            path="/användarvillkor"
            element={<TermsOfServicePage page="användarvillkor" />}
          />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

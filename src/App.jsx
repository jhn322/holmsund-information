import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";

const HomePage = lazy(() => import("./components/pages/HomePage"));
const DiscoverPageMain = lazy(() =>
  import("./components/pages/DiscoverPageMain")
);
const DiscoverPage1 = lazy(() => import("./components/pages/DiscoverPage1"));
const DiscoverPage2 = lazy(() => import("./components/pages/DiscoverPage2"));
const DiscoverPage3 = lazy(() => import("./components/pages/DiscoverPage3"));
const DiscoverPage4 = lazy(() => import("./components/pages/DiscoverPage4"));
const DiscoverPage5 = lazy(() => import("./components/pages/DiscoverPage5"));
const DiscoverPage6 = lazy(() => import("./components/pages/DiscoverPage6"));
const DiscoverPage7 = lazy(() => import("./components/pages/DiscoverPage7"));
const DiscoverPage8 = lazy(() => import("./components/pages/DiscoverPage8"));
const ActivityPageMain = lazy(() =>
  import("./components/pages/ActivityPageMain")
);
const ActivityPage1 = lazy(() => import("./components/pages/ActivityPage1"));
const ActivityPage2 = lazy(() => import("./components/pages/ActivityPage2"));
const ActivityPage3 = lazy(() => import("./components/pages/ActivityPage3"));
const ActivityPage4 = lazy(() => import("./components/pages/ActivityPage4"));
const GalleryPageMain = lazy(() =>
  import("./components/pages/GalleryPageMain")
);
const GalleryPage1 = lazy(() => import("./components/pages/GalleryPage1"));
const GalleryPage2 = lazy(() => import("./components/pages/GalleryPage2"));
const GalleryPage3 = lazy(() => import("./components/pages/GalleryPage3"));
const GalleryPage4 = lazy(() => import("./components/pages/GalleryPage4"));
const WeatherPage = lazy(() => import("./components/pages/WeatherPage"));
const MapPage = lazy(() => import("./components/pages/MapPage"));
const AboutUsPage = lazy(() => import("./components/pages/AboutUsPage"));
const CookiesPage = lazy(() => import("./components/pages/CookiesPage"));
const TermsOfServicePage = lazy(() =>
  import("./components/pages/TermsOfServicePage")
);
const MissingPage = lazy(() => import("./components/pages/MissingPage"));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* utforska section */}
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

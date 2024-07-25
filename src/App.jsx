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
            path="/branteberget"
            element={<DiscoverPage1 page="branteberget" />}
          />
          <Route path="/kajutan" element={<DiscoverPage2 page="kajutan" />} />
          <Route
            path="/ljumviken"
            element={<DiscoverPage3 page="ljumviken" />}
          />
          <Route path="/revet" element={<DiscoverPage4 page="revet" />} />
          <Route
            path="/storsjoskolan"
            element={<DiscoverPage5 page="storsjoskolan" />}
          />
          <Route
            path="/solbackakyrkan"
            element={<DiscoverPage6 page="solbackakyrkan" />}
          />
          <Route
            path="/lovosundet"
            element={<DiscoverPage7 page="lovosundet" />}
          />
          <Route
            path="/kasaviken"
            element={<DiscoverPage8 page="kasaviken" />}
          />
          {/* Aktiviteter section */}
          <Route
            path="/aktiviteter"
            element={<ActivityPageMain page="aktiviteter" />}
          />
          <Route
            path="/sandviks-idrottsklubb"
            element={<ActivityPage1 page="sandviks-idrottsklubb" />}
          />
          <Route
            path="/elljussparet"
            element={<ActivityPage2 page="elljussparet" />}
          />
          <Route
            path="/umea-golfklubb"
            element={<ActivityPage3 page="umea-golfklubb" />}
          />
          <Route
            path="/storsjohallen"
            element={<ActivityPage4 page="storsjohallen" />}
          />
          <Route path="/omberget" element={<ActivityPage5 page="omberget" />} />
          <Route path="/djupvik" element={<ActivityPage6 page="djupvik" />} />
          <Route
            path="/holmsunds-tennisklubb"
            element={<ActivityPage7 page="holmsunds-tennisklubb" />}
          />
          <Route
            path="/vasterlangsladan"
            element={<ActivityPage8 page="vasterlangsladan" />}
          />
          {/* Galleri section */}
          <Route path="/galleri" element={<GalleryPageMain page="galleri" />} />
          <Route
            path="/osterfjarden"
            element={<GalleryPage1 page="osterfjarden" />}
          />
          <Route
            path="/storsjoparken"
            element={<GalleryPage2 page="storsjoparken" />}
          />
          <Route
            path="/sikskarsvaken"
            element={<GalleryPage3 page="sikskarsvaken" />}
          />
          <Route
            path="/holmsunds-kyrka"
            element={<GalleryPage4 page="holmsunds-kyrka" />}
          />
          <Route
            path="/holmsundsbanan"
            element={<GalleryPage5 page="holmsundsbanan" />}
          />
          <Route path="/holmen" element={<GalleryPage6 page="holmen" />} />
          <Route
            path="/skargardsskolan"
            element={<GalleryPage7 page="skargardsskolan" />}
          />
          <Route
            path="/holmsund-hamn"
            element={<GalleryPage8 page="holmsund-hamn" />}
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

// Components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer";

// Pages
import Weather from "./pages/Weather";
import SpotlightPage from "./pages/SpotlightPage";
import GalleryPage from "./pages/GalleryPage";
import MissingPage from "./pages/MissingPage";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Navigation />
          <Routes>
            <Route>
              <Route path="/" element={<Header />} />
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
            </Route>
          </Routes>
        </nav>
        <main>
          <Content />
          <Weather />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;

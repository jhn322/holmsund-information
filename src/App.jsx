import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Navigation />
          <Routes>
            <Route>
              <Route path="/" element={<Content />} />
              <Route path="/link1" element={<Content page="link1" />} />
              <Route path="/link2" element={<Content page="link2" />} />
              <Route path="/link3" element={<Content page="link3" />} />
            </Route>
          </Routes>
        </nav>
        <main>
          <Header />
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

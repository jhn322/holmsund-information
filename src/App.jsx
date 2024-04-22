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
              <Route path="/site1" element={<Content page="site1" />} />
              <Route path="/site2" element={<Content page="site2" />} />
              <Route path="/site3" element={<Content page="site3" />} />
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

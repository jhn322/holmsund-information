import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Content from "../components/Content";
import Weather from "../components/Weather";
import Footer from "../components/Footer";

const App = () => {
  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Header />
        <Weather />
      </main>
      <article>
        <Content />
      </article>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

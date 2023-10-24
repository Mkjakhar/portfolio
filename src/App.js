import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
//
import "bootstrap/dist/css/bootstrap.min.css";
import PortfolioSection from "./components/PortfolioSection";
function App() {
  return (
    <>
      <Hero />
      <About />
      <PortfolioSection />
      <Footer />
    </>
  );
}

export default App;

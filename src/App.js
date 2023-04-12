import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import { cardsHero } from "./links";
import Panel from "./Components/Panel";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import Firstpanel from "./Components/Firstpanel";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Firstpanel />
      <div className="d-lg-flex d-md-flex mt-3 mb-4 mx-2">
        {cardsHero.map((card) => {
          return <Cards key={card.id} {...card} />;
        })}
      </div>
      <Panel />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;

import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Residencies from "./components/Residencies";
import Companies from "./components/Companies";
import Values from "./components/Values";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Values />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;

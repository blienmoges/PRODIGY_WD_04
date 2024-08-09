import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Portfolio />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

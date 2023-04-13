import "./bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Experience />
      <Education />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

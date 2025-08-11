import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import MyToolkit from "./components/MyToolkit";
import Snowfall from "react-snowfall";

function App() {
  return (
    <>
      {/* Snowfall should be OUTSIDE container and fixed */}
      <Snowfall
        color="#00BBA7"
        snowflakeCount={80}   
        wind={[-1, 1]}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 999,      
        }}
      />

      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto">
          <Hero />
          <About />
          <MyToolkit />
          <Skills />
          <Projects />
          <Education />
          <Contact />

          <ToastContainer />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;

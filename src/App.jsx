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
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-base-100">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#00BBA7]"></div>
      </div>
    );
  }

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

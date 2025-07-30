


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

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="container mx-auto">
        
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Education></Education>
        <Contact></Contact>
       
        <ToastContainer />
      </div>
       <Footer></Footer>
      </div>
    </>
  );
}

export default App;

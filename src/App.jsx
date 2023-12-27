import React from "react";
import Navbar from "./components/Navbar";
import"bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Project";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
     </>
  );
}

export default App;

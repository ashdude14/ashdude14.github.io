import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import"bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Project";
import { ThemeContext, useTheme } from "./context/themeContext";

function App() {
  const { theme,toggleTheme} =useTheme();
  useEffect(()=>{
   
  },[theme])
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className={`App ${theme}`}>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
      </ThemeContext.Provider>
  );
}

export default App;

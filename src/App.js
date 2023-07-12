import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Aboutme from "./Components/Aboutme/Aboutme";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Aboutme />
      <Education />
      <Skills />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

import { useState } from "react";
import React from "react";
import Navbar from "../src/Navbar";
import Home from "../src/component/FuntionalComp/Home.jsx";
import Services from "../src/component/FuntionalComp/Services.jsx";
import Skill from "../src/component/FuntionalComp/Skill.jsx";
import Education from "../src/component/FuntionalComp/Education.jsx";
import Experience from "../src/component/FuntionalComp/Experience.jsx";
import Contact from "../src/component/FuntionalComp/Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App=()=> {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/hm" element={<Home />} />
          <Route path="/ser" element={<Services />} />
          <Route path="/sk" element={<Skill />} />
          <Route path="/ed" element={<Education />} />
          <Route path="/ex" element={<Experience />} />
          <Route path="/con" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </main>
  );
}

export default App;

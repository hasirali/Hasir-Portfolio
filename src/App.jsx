import React from "react";
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import Education from "./Pages/Education";
import About from "./Pages/About";
import Projects from './Pages/Projects'
import ProjectDisplay from './Pages/ProjectDisplay'
import Contact from "./Pages/Contact";

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<ProjectDisplay />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App

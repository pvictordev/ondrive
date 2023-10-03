import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import Blog from './pages/Blog';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cars" element={<Cars />} />
        <Route path="blog" element={<Blog />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

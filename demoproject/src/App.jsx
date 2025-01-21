import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './FunctionComponent/Navbar';
import Home from './FunctionComponent/Home';
import About from './FunctionComponent/About';
import Contact from './FunctionComponent/Contact';
import Gallery from './FunctionComponent/Gallery';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
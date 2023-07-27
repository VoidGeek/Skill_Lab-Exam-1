import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/about';
import Homepage from './components/home';
import Course from './components/course';
import Footer from './components/Footer'; // Import the Footer component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';

// Main File is this
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

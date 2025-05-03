// src/App.js
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Home Page Components
import Header from './home/Header';
import Courses from './home/Courses';
import Contact from './home/Contact';
import Internship from './home/Intership';
import BestEthical from './home/BestEthical';
import EthicalHackingSyllabus from './home/EthicalHackingSyllabus';
import LatestSection from './home/LatestSection';
import PartnersSection from './home/PartnersSection';
import WhyChooseUs from './home/WhyChooseUs';
import Highlights from './home/Highlights';
import ContactUs from './home/ContactUs';
import Footer from './home/Footer';
// Import About Page
import About from "./about/about";
import Coursesfolder from './Coursesfolder/AppCourse';
import Contactfolder from './Contactfolder/AppContact';
import Blogfolder from './Blogfolder/AppBlog';
import Registerfolder from './Registerfolder/AppRegister';

function Home() {
  return (
    <>
      <Header />
      <Contact />
      <Courses />
      <BestEthical />
      <Internship />
      <EthicalHackingSyllabus />
      <LatestSection />
      <PartnersSection />
      <WhyChooseUs />
      <Highlights />
      <ContactUs />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Us Page */}
        <Route path="/about" element={<About />} />
        {/* Courses Page */}
        <Route path="/Courses" element={<Coursesfolder />} />
        {/* Add more routes as needed */}
        {/* Contact Us Page */}
        <Route path="/Contact" element={<Contactfolder />} />
        {/* Blog Page */}
        <Route path="/Blog" element={<Blogfolder />} />
        
        <Route path="/Register" element={<Registerfolder />} />
       
      </Routes>
    </Router>
  );
}

export default App;

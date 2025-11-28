import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import { About } from './Components/Pages/About';
import { Services } from './Components/Pages/Services';
import Portfolio from './Components/Pages/Portfolio';
import Team from './Components/Team';
import Contact from './Components/Pages/Contact';

import { VoIP } from './Components/Pages/VoIp';
import { WebDevelopment } from './Components/Pages/WebDevlopment';
import { SoftwareDevelopment } from './Components/Pages/SoftwareDevlopment';
import { DigitalMarketing } from './Components/Pages/DigitelMarketing';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/voip" element={<VoIP />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';

// Pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Feedback from './Pages/Feedback/Feedback';
import EmergencyTips from './Pages/EmergencyTips/EmergencyTips';
import Services from './Pages/Services/Services';
import Ambulances from './Pages/Ambulances/Ambulances';

function App() {
  // 👇 Detect environment and apply correct base path
  const isProduction = process.env.NODE_ENV === 'production';
  const basename = isProduction ? '/lifelink' : '/';

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/emergency" element={<EmergencyTips />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ambulances" element={<Ambulances />} />
        {/* 404 fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

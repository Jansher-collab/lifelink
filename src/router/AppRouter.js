import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Ambulances from "../Pages/Ambulances/Ambulances";
import EmergencyTips from "../Pages/EmergencyTips/EmergencyTips";
import Contact from "../Pages/Contact/Contact";
import Feedback from "../Pages/Feedback/Feedback";
import NotFound from "../Pages/NotFound/NotFound";

function AppRouter() {
  return (
    <Router basename="/lifelink"> {/* Add basename for GitHub Pages */}
      <ScrollToTop />
      <Navbar />
      <main className="page-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Ambulances" element={<Ambulances />} />
          <Route path="/Emergency-tips" element={<EmergencyTips />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRouter;

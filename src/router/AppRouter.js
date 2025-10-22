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
  // ✅ Automatically handle correct base path for both local and GitHub Pages
  const basename =
    window.location.hostname === "localhost" ? "/" : "/lifelink";

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Navbar />
      <main className="page-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ambulances" element={<Ambulances />} />
          <Route path="/emergency-tips" element={<EmergencyTips />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRouter;

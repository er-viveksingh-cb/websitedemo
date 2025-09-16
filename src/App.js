import AwardsSection from "./AwardsSection";
import ConsultationForm from "./ConsultationForm";
import DifferenceSection from "./DifferenceSection";
import DoctorsSection from "./DoctorsSection";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import HealthCareBanner from "./HealthCareBanner";
import { Frame } from "./Hearosaction";
import HeroCarousel from "./HeroCarousel";
import LocationsSection from "./LocationsSection";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About.jsx";

import StatsSection from "./StatsSection";
import StoriesSection from "./StoriesSection";
import TestimonialsSection from "./TestimonialsSection";
import TreatmentsSection from "./TreatmentsSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
 <>
 <Navbar/>
 <HeroCarousel/>
<StatsSection/>
  <TreatmentsSection/>
 <TestimonialsSection/>
  <DifferenceSection/>
 <LocationsSection/>
<DoctorsSection/>
<StoriesSection/>
 <FaqSection/>
 <AwardsSection/>
 <ConsultationForm/>
 <HealthCareBanner/>
 <Footer/> 

{/* 
  <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router> */}
 </>
  );
}

export default App;

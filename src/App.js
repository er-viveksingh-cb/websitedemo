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
import StatsSection from "./StatsSection";
import StoriesSection from "./StoriesSection";
import TestimonialsSection from "./TestimonialsSection";
import TreatmentsSection from "./TreatmentsSection";

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
 </>
  );
}

export default App;

// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PressKit from "./shared/pages/PressKit";
import AboutUs from "./shared/pages/AboutUs";
import TermServices from "./shared/pages/TermServices";
import Contact from "./shared/pages/Contact";
import PrivacyPolicy from "./shared/pages/PrivacyPolicy";
import ScrollToTop from "./utils/ScrollToTop";
import SAAS_MSA from "./shared/pages/SAAS_MSA";
import SecurityPolicy from "./shared/pages/SecurityPolicy";
import Pricing from "./pricing/Pricing";
import FoundationPage from "./foundation/FoundationPage";
import Governance from "./learn-more/Governance";
import Organization from "./learn-more/Organization";
import Role from "./learn-more/Role";
import HomePage from "./home/HomePage";
import HelpCenterPage from "./help-center/pages/HelpCenterPage";
import RequestDemoPage from "./request-demo/RequestDemoPage";
import HelpCenterDetailPage from "./help-center/pages/HelpCenterDetailPage";
import FAQS from "./home/faqs/FAQS";
import LandingPage from "./landing/LandingPage";
import CookiesPolicy from "./shared/pages/CookiesPolicy";
import UpdatedLandingPage from "./landing_new/LandingPageLD";
import NavBarLD from "./shared/NavBarLD";
import FooterLD from "./shared/FooterLD";
import MainUserReviewPage from "./user-review-page/MainUserReviewPage";
import BusinessTestimonial from "./business_testimonial_page/BusinessTestimonial";
import BusinessTestimonialVideoPage from "./business_Testimonial_video_page/BusinessTestimonialVideoPage";
import BusinessTestimonialVideoPlayer from "./business_Testimonial_video_page/BusinessTestimonialVideoPlayer";

function App() {
  return (
    <main className="App">
      <Router>
        <ScrollToTop />
        <NavBarLD />
        <Routes>
          <Route exact path="/" element={<UpdatedLandingPage />} />
          <Route exact path="/landing" element={<LandingPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/foundation" element={<FoundationPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/press-kit" element={<PressKit />} />
          <Route path="/saas-msa" element={<SAAS_MSA />} />
          <Route path="/terms-of-service" element={<TermServices />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-settings" element={<CookiesPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/security" element={<SecurityPolicy />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/governanace" element={<Governance />} />
          <Route path="/role" element={<Role />} />
          <Route path="/request-demo" element={<RequestDemoPage />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/users-review" element={<MainUserReviewPage />} />
          <Route path="/business-review" element={<BusinessTestimonial />} />
          <Route path="/business-testimonials-videos">
            <Route path="" element={<BusinessTestimonialVideoPage />} />
            <Route path=":id" element={<BusinessTestimonialVideoPlayer />} />
          </Route>
          <Route path="/help-center">
            <Route path="" element={<HelpCenterPage />} />
            <Route path=":id" element={<HelpCenterDetailPage />} />
          </Route>
        </Routes>
        <FooterLD />
      </Router>
    </main>
  );
}

export default App;

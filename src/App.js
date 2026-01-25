import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// HOME SECTIONS
import CarouselSection from "./components/CarouselSection";
import WhatIsPOSH from "./components/WhatIsPOSH";
import WhyChooseUs from "./components/WhyChooseUs";
import TrainingModules from "./components/TrainingModules";
import TrainerSection from "./components/TrainerSection";
import Testimonials from "./components/Testimonials";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";

// MODULE PAGES (Lazy Loaded)
const PolicyDesign = lazy(() => import("./pages/modules/PolicyDesign"));
const SupervisorTraining = lazy(() => import("./pages/modules/SupervisorTraining"));
const ICTraining = lazy(() => import("./pages/modules/ICTraining"));
const POSHAudit = lazy(() => import("./pages/modules/POSHAudit"));
const ELearning = lazy(() => import("./pages/modules/ELearning"));
const ExternalMember = lazy(() => import("./pages/modules/ExternalMember"));
const Workshops = lazy(() => import("./pages/modules/Workshops"));
const ActivityLearning = lazy(() => import("./pages/modules/ActivityLearning"));
const RegionalTraining = lazy(() => import("./pages/modules/RegionalTraining"));
const AnnualReport = lazy(() => import("./pages/modules/AnnualReport"));
const EmployeeSurvey = lazy(() => import("./pages/modules/EmployeeSurvey"));

/**
 * HIGH-PERFORMANCE REVEAL: 
 * Triggers animations BEFORE they enter the viewport to eliminate the "pop-in" delay.
 */
function ScrollRevealManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.01, // Trigger as soon as 1% is visible
      rootMargin: "0px 0px 150px 0px" // CRITICAL: Triggers 150px BEFORE scrolling hits the section
    });

    const triggerReveal = () => {
      const fadeElements = document.querySelectorAll(".fade-up");
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // If it's already on screen or very close, show immediately
        if (rect.top < window.innerHeight + 100) {
          el.classList.add("show");
        } else {
          observer.observe(el);
        }
      });
    };

    // Run immediately on route change
    requestAnimationFrame(triggerReveal);

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash /> 
      <ScrollRevealManager />
      <ScrollToTop />

      <Suspense fallback={<div className="loading-spinner"></div>}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <CarouselSection />
                <div id="about"><WhatIsPOSH /></div>
                <div id="whychooseus" className="fade-up"><WhyChooseUs /></div>
                
                {/* Fixed: We move the fade-up class to the section wrapper inside the component usually, 
                    but keeping it here for consistency with your previous code */}
                <div id="training" className="fade-up"><TrainingModules /></div>
                
                <div className="fade-up" style={{ marginTop: "60px" }}><TrainerSection /></div>
                <div id="testimonials" className="fade-up"><Testimonials /></div>
                <div id="enquire" className="fade-up"><EnquiryForm /></div>
                <Footer />
              </Layout>
            }
          />

          {/* MODULE ROUTES */}
          <Route path="/module/awareness" element={<Layout><PolicyDesign /><Footer /></Layout>} />
          <Route path="/module/supervisor" element={<Layout><SupervisorTraining /><Footer /></Layout>} />
          <Route path="/module/ic-training" element={<Layout><ICTraining /><Footer /></Layout>} />
          <Route path="/module/compliance-audit" element={<Layout><POSHAudit /><Footer /></Layout>} />
          <Route path="/module/elearning" element={<Layout><ELearning /><Footer /></Layout>} />
          <Route path="/module/external-member" element={<Layout><ExternalMember /><Footer /></Layout>} />
          <Route path="/module/workshops" element={<Layout><Workshops /><Footer /></Layout>} />
          <Route path="/module/activity-learning" element={<Layout><ActivityLearning /><Footer /></Layout>} />
          <Route path="/module/regional-training" element={<Layout><RegionalTraining /><Footer /></Layout>} />
          <Route path="/module/annual-report" element={<Layout><AnnualReport /><Footer /></Layout>} />
          <Route path="/module/employee-survey" element={<Layout><EmployeeSurvey /><Footer /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
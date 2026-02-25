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

const PolicyDesign = lazy(() => import("./pages/modules/PolicyDesign"));
const ICTraining = lazy(() => import("./pages/modules/ICTraining"));
const POSHAudit = lazy(() => import("./pages/modules/POSHAudit"));
const ExternalMember = lazy(() => import("./pages/modules/ExternalMember"));
const Workshops = lazy(() => import("./pages/modules/Workshops"));
const ActivityLearning = lazy(() => import("./pages/modules/ActivityLearning"));
const RegionalTraining = lazy(() => import("./pages/modules/RegionalTraining"));
const AnnualReport = lazy(() => import("./pages/modules/AnnualReport"));
const EmployeeSurvey = lazy(() => import("./pages/modules/EmployeeSurvey"));

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
      threshold: 0.01,
      rootMargin: "0px 0px 150px 0px" 
    });

    const triggerReveal = () => {
      const fadeElements = document.querySelectorAll(".fade-up");
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
          el.classList.add("show");
        } else {
          observer.observe(el);
        }
      });
    };

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
                <div id="training" className="fade-up"><TrainingModules /></div>
                <div className="fade-up" style={{ marginTop: "60px" }}><TrainerSection /></div>
                <div id="testimonials" className="fade-up"><Testimonials /></div>
                <div id="enquire" className="fade-up"><EnquiryForm /></div>
                <Footer />
              </Layout>
            }
          />

          <Route path="/module/awareness" element={<Layout><PolicyDesign /><Footer /></Layout>} />
          <Route path="/module/ic-training" element={<Layout><ICTraining /><Footer /></Layout>} />
          <Route path="/module/compliance-audit" element={<Layout><POSHAudit /><Footer /></Layout>} />
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
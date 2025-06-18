"use client";

import { useEffect, useState, useRef } from "react"; // Import useRef
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import RealWorkSection from "@/components/real-work-section";
import DelegateSection from "@/components/delegate-section";
import IndustryExpertise from "@/components/industry-expertise";
import ServicesSection from "@/components/services-section";
import HowItWorks from "@/components/how-it-works";
import BrandSection from "@/components/brand-section";
import PricingSection from "@/components/pricing-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section"; // Ensure it's imported correctly
import Footer from "@/components/footer";
import BrandBouncePromo from "@/components/brand-bounce-promo";

export default function TaskBounceLanding() {
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const contactSectionRef = useRef<HTMLElement>(null); // Create a ref for ContactSection

  const handleGetStartedAndScroll = (subject: string) => {
    setSelectedSubject(subject); // Update the subject state
    if (contactSectionRef.current) {
      // Use scrollIntoView for consistent, smooth scrolling
      contactSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      }); // Or 'center', 'end'
    }
  };

  useEffect(() => {
    // This would be where we initialize any global animation libraries if needed
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <RealWorkSection />
      <DelegateSection />
      <IndustryExpertise />
      <ServicesSection />
      <HowItWorks />
      <BrandSection />
      {/* Pass the combined handler to PricingSection */}
      <PricingSection onGetStartedAndScroll={handleGetStartedAndScroll} />
      <AboutSection />
      <TestimonialsSection />
      <BrandBouncePromo />
      {/* Pass the ref to ContactSection */}
      <ContactSection
        ref={contactSectionRef}
        selectedSubject={selectedSubject}
      />
      <Footer />
    </div>
  );
}

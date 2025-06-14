"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import RealWorkSection from "@/components/real-work-section"
import DelegateSection from "@/components/delegate-section"
import IndustryExpertise from "@/components/industry-expertise"
import ServicesSection from "@/components/services-section"
import HowItWorks from "@/components/how-it-works"
import BrandSection from "@/components/brand-section"
import PricingSection from "@/components/pricing-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BrandBouncePromo from "@/components/brand-bounce-promo"

export default function TaskBounceLanding() {
  // Add scroll animation library
  useEffect(() => {
    // This would be where we initialize any global animation libraries if needed
  }, [])

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
      <PricingSection />
      <AboutSection />
      <TestimonialsSection />
      <BrandBouncePromo />
      <ContactSection />
      <Footer />
    </div>
  )
}

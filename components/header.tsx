"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu on mobile
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="z-10">
          <Image
            src="/taskbounce-logo.webp?height=40&width=120&text=TaskBounce+Logo"
            alt="TaskBounce Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 space-x-6">
          <a href="#about" className="text-gray-600 hover:text-teal-600">
            About Us
          </a>
          <a href="#services" className="text-gray-600 hover:text-teal-600">
            Services
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-teal-600">
            Pricing
          </a>
          <a
            href="https://blog.brandbounce.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-teal-600"
          >
            Blog
          </a>

          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
          <a
            href="https://brandbounce.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-600 text-lg font-medium"
          >
            BrandBounce
          </a>
        </nav>

        <Button
          onClick={handleScrollToContact}
          className="bg-teal-600 hover:bg-teal-700 hidden md:block z-10"
        >
          Get Started
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white pt-20 px-6">
            <nav className="flex flex-col space-y-6">
              <a
                href="#about"
                className="text-gray-900 hover:text-teal-600 text-lg"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-gray-900 hover:text-teal-600 text-lg"
              >
                Services
              </a>
              <a
                href="#pricing"
                className="text-gray-900 hover:text-teal-600 text-lg"
              >
                Pricing
              </a>
              <a
                href="https://blog.brandbounce.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-teal-600 text-lg"
              >
                Blog
              </a>

              <a
                href="#contact"
                className="text-gray-900 hover:text-teal-600 text-lg"
              >
                Contact
              </a>
              <a
                href="https://brandbounce.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                BrandBounce
              </a>

              <Button
                onClick={handleScrollToContact}
                className="bg-teal-600 hover:bg-teal-700 w-full mt-4"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import React, { useEffect } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TypesSection } from '@/components/sections/TypesSection';
import { TreatmentSection } from '@/components/sections/TreatmentSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/sections/Footer';
import { BookingModal } from '@/components/ui/BookingModal';
import useUTMSource from '@/hooks/useUTMSource';

export default function OptimusEyeCare() {
  useUTMSource();
  // Inject Custom Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div className="font-['Outfit',sans-serif] bg-white text-[#203A47] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TypesSection />
      <TreatmentSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <BookingModal />
    </div>
  );
}
"use client";

import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Eye, Sun, Droplets, ArrowRight, ShieldAlert, BookOpen, Lightbulb, Glasses } from 'lucide-react';
import { useBookingModal } from '@/components/ui/BookingModalContext';

const symptoms = [
  { icon: <Eye size={20} />, title: "Blurry or Cloudy Vision", desc: "Objects appear hazy or out of focus, as if looking through a foggy window." },
  { icon: <BookOpen size={20} />, title: "Difficulty Reading Clearly", desc: "Fine print becomes increasingly hard to read, even with glasses on." },
  { icon: <Sun size={20} />, title: "Trouble in Bright Light", desc: "Bright environments cause discomfort or make it harder to see clearly." },
  { icon: <Lightbulb size={20} />, title: "Glare Around Lights, especially at night", desc: "Halos, starbursts, or blinding glare at night — especially from headlights." },
  { icon: <Glasses size={20} />, title: "Frequent Change in Glasses Number", desc: "Needing new spectacles every few months but vision still not improving." },
  { icon: <Droplets size={20} />, title: "Faded or Dull Vision", desc: "The world loses its vibrancy — colours appear washed out or lacking contrast." },
];

export const AboutSection = () => {
  const { openModal } = useBookingModal();
  return (
    <section id="about" className="relative py-10 lg:py-12 bg-[#ffffff] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-br from-[#cae2f2]/20 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#cae2f2]/15 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 max-w-6xl relative z-10 w-full">
        <FadeIn>
          <div className="space-y-6">

            {/* Header — centred */}
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0c5d69]/30 bg-[#0c5d69]/5 text-[#0c5d69] text-[11px] font-semibold tracking-widest uppercase mb-3">
                <Eye size={12} /> Signs of Cataract
              </div>
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-semibold text-[#0c5d69] leading-tight mb-3">
                Are you experiencing any of these{" "}
                <span className="text-[#13a2b7] italic font-medium">signs of cataract?</span>
              </h2>
              <p className="text-[#0c5d69]/75 text-[15px] leading-relaxed font-light">
                Cataract often develops slowly, but over time it can begin affecting your confidence, comfort, and day-to-day life. If your vision is no longer as clear as before, it may be time for a proper eye evaluation.
              </p>
            </div>

            {/* Symptom Cards — 3-col on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {symptoms.map((sym, i) => (
                <div key={i} className="group bg-white p-5 rounded-2xl border border-[#cae2f2] hover:border-[#0c5d69]/40 hover:shadow-lg transition-all duration-300 cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-[#f0f8ff] text-[#0c5d69] group-hover:bg-[#0c5d69] group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                    {sym.icon}
                  </div>
                  <h4 className="text-[#0c5d69] font-semibold text-sm mb-1.5">{sym.title}</h4>
                  <p className="text-[#0c5d69]/65 text-xs leading-relaxed">{sym.desc}</p>
                </div>
              ))}
            </div>

            {/* Reassurance + CTA row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#f0f8ff] border border-[#cae2f2] rounded-2xl p-5">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#0c5d69]/10 text-[#0c5d69]">
                  <ShieldAlert size={18} />
                </div>
                <p className="text-[#0c5d69]/80 text-sm leading-relaxed">
                  The earlier cataract is evaluated, the easier it becomes to understand the right treatment option for your eyes.
                </p>
              </div>
              <button
                onClick={openModal}
                className="flex-shrink-0 inline-flex items-center gap-3 bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-7 py-3.5 rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1 group whitespace-nowrap"
              >
                Book Your Consultation<ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};

"use client";

import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ShieldCheck, Cpu, Microscope, Zap, Users, BadgeCheck, Heart, SmilePlus, ArrowRight } from 'lucide-react';
import { useBookingModal } from '@/components/ui/BookingModalContext';

const differentiators = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'NABH Certified Eye Hospital',
    desc: 'Maintains the highest standards of patient safety, hygiene, and clinical quality.',
    highlight: true,
  },
  {
    icon: <Cpu size={28} />,
    title: 'Advanced OT Units',
    desc: 'State-of-the-art operating theatres equipped for safer and smoother procedures.',
    highlight: false,
  },
  {
    icon: <Microscope size={28} />,
    title: 'High-Precision Diagnostics',
    desc: 'Accurate, tech-driven assessments using world-class ocular diagnostic equipment.',
    highlight: false,
  },
  {
    icon: <Zap size={28} />,
    title: 'Modern Treatment Technology',
    desc: 'Offering the latest laser-assisted and micro-incision cataract surgeries.',
    highlight: false,
  },
  {
    icon: <Users size={28} />,
    title: 'Experienced Specialists',
    desc: 'A dedicated, highly qualified team of experienced ophthalmology surgeons.',
    highlight: false,
  },
  {
    icon: <BadgeCheck size={28} />,
    title: 'Personalized Treatment Plans',
    desc: 'Tailored surgical approaches and precise IOL selection based on your condition.',
    highlight: false,
  },
  {
    icon: <Heart size={28} />,
    title: 'Ethical & Transparent Healthcare',
    desc: 'Honest guidance, clear communication, and straightforward pricing options.',
    highlight: false,
  },
  {
    icon: <SmilePlus size={28} />,
    title: 'Supportive, Patient-Friendly Environment',
    desc: 'A calming and reassuring atmosphere ensuring utmost patient comfort.',
    highlight: false,
  },
];

export const WhyUsSection = () => {
  const { openModal } = useBookingModal();

  return (
    <section id="why-choose" className="py-10 lg:py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10 w-full">

        {/* Header */}
        <FadeIn className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.15em] text-[#0c5d69] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#0c5d69]" /> Equipment & Excellence <span className="w-6 h-0.5 bg-[#0c5d69]" />
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-extrabold text-[#0c5d69] leading-snug mb-3">
            Why choose <span className="italic text-[#13a2b7]">Optimus Eye Hospital</span> for cataract surgery in Lucknow?
          </h2>
          <p className="text-[#0c5d69]/90 text-lg font-normal leading-relaxed max-w-3xl mx-auto">
            Optimus Eye Hospital combines trusted specialist care with advanced infrastructure to make cataract treatment safer, smoother, and more confidence-inspiring for patients and families.
          </p>
        </FadeIn>

        {/* 8-Point Differentiator Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {differentiators.map((item, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="group p-4 lg:p-5 rounded-3xl border transition-all duration-300 cursor-default h-full relative overflow-hidden bg-white border-[#cae2f2] hover:border-[#0c5d69]/30 hover:shadow-[0_8px_30px_rgba(12,93,105,0.10)] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2.5 transition-colors relative z-10 shadow-sm bg-[#f0f8ff] text-[#13a2b7] group-hover:bg-[#0c5d69] group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-bold text-base mb-1.5 relative z-10 leading-snug text-[#0c5d69]">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed relative z-10 text-[#0c5d69]/85">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn className="text-center">
          <button
            onClick={openModal}
            className="inline-flex items-center gap-3 bg-[#13a2b7] hover:bg-[#0c5d69] text-white px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
          >
            Schedule Your Visit Today
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

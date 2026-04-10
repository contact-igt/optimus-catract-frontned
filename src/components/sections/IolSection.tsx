"use client";

import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRight, Eye, Sparkles, UserCheck } from 'lucide-react';
import { useBookingModal } from '@/components/ui/BookingModalContext';

const options = [
  {
    icon: <Eye size={32} />,
    title: 'Monofocal Lens',
    desc: 'A standard option designed to improve clear vision at one primary distance.',
    tag: 'Standard',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Premium IOL Options',
    desc: 'Advanced lens choices that may support improved visual convenience based on patient suitability.',
    tag: 'Advanced',
    highlight: true,
  },
  {
    icon: <UserCheck size={32} />,
    title: 'Personalized Lens Guidance',
    desc: 'Your doctor will help you understand which option fits your eyes and visual expectations best.',
    tag: 'Consultation',
  },
];

export const IolSection = () => {
  const { openModal } = useBookingModal();

  return (
    <section id="lens-options" className="py-10 lg:py-12 bg-[#0c5d69] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 w-full relative z-10">

        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.15em] text-[#cae2f2] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#13a2b7]" /> Lens Options <span className="w-6 h-0.5 bg-[#13a2b7]" />
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-extrabold text-white leading-snug mb-3">
            Which <span className="italic text-[#cae2f2]">cataract lens</span> option is right for you?
          </h2>
          <p className="text-white/95 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            At Optimus Eye Hospital, cataract treatment includes premium IOL options. The right lens choice depends on your eye condition, daily lifestyle, and the doctor’s advice after evaluation.
          </p>
        </FadeIn>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-8">
          {options.map((opt, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="h-full relative overflow-hidden rounded-2xl p-5 lg:p-6 transition-all duration-300 border bg-[#13a2b7]/30 border-[#13a2b7]/50 backdrop-blur-sm hover:bg-[#13a2b7]/45 hover:border-[#13a2b7]/70 hover:-translate-y-1">
                {/* Tag */}
                <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 bg-white/15 text-[#cae2f2]">
                  {opt.tag}
                </div>

                {/* Icon */}
                <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/15 text-white">
                  {opt.icon}
                </div>

                {/* Content */}
                <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-bold mb-2 text-white">
                  {opt.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-white/80">
                  {opt.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA Area */}
        <FadeIn className="max-w-2xl mx-auto text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5 backdrop-blur-sm flex flex-col items-center">
            <h4 className="text-white text-[17px] font-semibold mb-1">Not sure which one to pick?</h4>
            <p className="text-white/90 text-sm mb-5 max-w-sm">
              Don't worry. Our surgeon will guide you to the right lens during your consultation based on a comprehensive medical assessment.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-white text-[#0c5d69] hover:bg-[#cae2f2] px-8 py-3.5 rounded-xl text-sm font-bold transition-all group"
            >
              Discuss My Options <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

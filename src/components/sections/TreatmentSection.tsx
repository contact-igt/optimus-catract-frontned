"use client";

import React from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useBookingModal } from '@/components/ui/BookingModalContext';

const steps = [
  {
    step: 1,
    title: 'Comprehensive Eye Evaluation',
    desc: 'Your eyes are examined to assess the cataract and understand your visual needs.',
    detail: 'Thorough assessment.',
  },
  {
    step: 2,
    title: 'Personalized Surgery Planning',
    desc: 'The doctor recommends the right treatment plan and suitable lens option based on your condition.',
    detail: 'Tailored to your needs.',
  },
  {
    step: 3,
    title: 'Safe Procedure & Follow-Up Care',
    desc: 'The surgery is performed using advanced technology, followed by proper recovery guidance and follow-up support.',
    detail: 'Advanced & supported.',
  },
];

export const TreatmentSection = () => {
  const { openModal } = useBookingModal();

  return (
    <section id="treatment" className="py-10 lg:py-12 relative overflow-hidden bg-white">
      {/* Background decor */}
      <div className="absolute top-0 left-0 h-125 w-125 bg-[#cae2f2]/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-100 w-100 bg-[#cae2f2]/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10 w-full space-y-8">

        {/* ═══════════════════════════════════
            TOP: What is Cataract + Image
        ═══════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Left — Explanation */}
          <FadeIn>
            <div className="space-y-6">
              <div>
                {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0c5d69]/25 bg-[#0c5d69]/5 text-[#0c5d69] text-[11px] font-semibold tracking-widest uppercase mb-3">
                  Cataract
                </div> */}
                <h2 className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl font-extrabold text-[#0c5d69] leading-snug mb-3">
                  What Is <span className="italic text-[#13a2b7]">Cataract?</span>
                </h2>
                <p className="text-[#0c5d69]/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Understand why the eye lens becomes cloudy, how it affects daily vision, and when treatment may be needed.
                </p>
              </div>

              <p className="text-[#0c5d69]/90 text-lg font-medium leading-relaxed">
                A cataract happens when the natural lens of the eye becomes cloudy, making vision less clear over time. When it starts affecting everyday activities like reading, walking, driving, or recognising faces, treatment may be advised by the doctor.
              </p>

              {/* Optimus Treatment Copy */}
              <div className="bg-[#f0f8ff] border-l-4 border-[#13a2b7] rounded-r-2xl p-5">
                <p className="text-[#0c5d69]/90 text-base leading-relaxed">
                  At <strong className="text-[#0c5d69]">Optimus Eye Hospital</strong>, cataract care includes advanced diagnosis and treatment using modern technology, including premium IOLs and laser-assisted cataract surgery. The hospital also offers{' '}
                  <strong className="text-[#0c5d69]">painless, micro-incision cataract surgeries</strong>.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right — Cataract Image */}
          <FadeIn delay={200}>
            <div className="relative">
              {/* Image card */}
              <div className="relative bg-[#0c5d69] rounded-[2.5rem] overflow-hidden">
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#13a2b7]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#cae2f2]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative p-6 pb-0">
                  <Image
                    src="/assets/whatiscataract.png"
                    alt="What is a Cataract — eye lens diagram"
                    width={600}
                    height={420}
                    className="w-full h-auto object-contain rounded-t-2xl transition-all duration-500"
                  />
                </div>
                <div className="relative z-10 px-6 py-4">
                  <p className="text-[#cae2f2] text-[11px] uppercase tracking-widest font-semibold mb-0.5">Normal vs Cataract</p>
                  <p className="text-white/60 text-xs">Clear lens vs cloudy cataract — vision difference explained</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-5 -top-4 md:-top-4 md:-left-8 bg-white rounded-2xl px-4 py-4 md:py-5 border border-[#cae2f2]">
                <p className="text-[#0c5d69] font-bold text-xl leading-none">15 min</p>
                <p className="text-[#0c5d69]/50 text-xs mt-0.5">Surgery Duration</p>
              </div>
              <div className="absolute -bottom-9 md:-bottom-8 -right-5 md:-right-10 bg-[#13a2b7] text-white rounded-2xl px-4 py-4 md:py-5">
                <p className="font-bold text-base leading-none">Painless</p>
                <p className="text-white/75 text-xs mt-0.5">Micro-incision Surgery</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ═══════════════════════════════════
            MIDDLE: 3-Step Treatment Process
        ═══════════════════════════════════ */}
        <FadeIn>
          <div className="space-y-5">
            <div className="text-center">
              <p className="text-[#0c5d69] text-[11px] font-semibold uppercase tracking-widest mb-1.5">Treatment Process</p>
              <div className="w-12 h-0.5 bg-[#13a2b7] mx-auto rounded-full" />
            </div>

            <div className="relative">
              {/* Horizontal connector line (desktop) */}
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-[#cae2f2]/50 z-0" />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-4 relative z-10">
                {steps.map((s, i) => (
                  <FadeIn key={i} delay={i * 130} className="group text-center">
                    {/* Large numbered circle */}
                    <div className="w-24 h-24 mx-auto bg-white rounded-full border-[3px] border-[#cae2f2] group-hover:border-[#0c5d69] flex items-center justify-center font-['Cormorant_Garamond',serif] text-4xl font-bold text-[#0c5d69] transition-all group-hover:scale-110 mb-6 group-hover:bg-[#0c5d69] group-hover:text-white">
                      {s.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#0c5d69] mb-2">{s.title}</h3>
                    <p className="text-base text-[#0c5d69]/85 leading-relaxed px-2 mb-3">{s.desc}</p>
                    <div className="inline-flex items-center gap-1.5 bg-[#0c5d69]/5 text-[#0c5d69] text-[11px] font-semibold px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={11} className="text-[#13a2b7]" />
                      {s.detail}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ═══════════════════════════════════
            BOTTOM: Recovery Reassurance + CTA
        ═══════════════════════════════════ */}
        <FadeIn>
          <div className="bg-[#0c5d69] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={20} className="text-[#cae2f2]" />
              </div>
              <div>
                <p className="text-white font-bold text-lg mb-1">Recovery Reassurance</p>
                <p className="text-white/90 text-base leading-relaxed">
                  With the right treatment and timely care, cataract surgery can help restore clearer vision and improve day-to-day visual comfort.
                </p>
              </div>
            </div>
            <button
              onClick={openModal}
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#0c5d69] hover:bg-[#cae2f2] px-7 py-3.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 group"
            >
              Book Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

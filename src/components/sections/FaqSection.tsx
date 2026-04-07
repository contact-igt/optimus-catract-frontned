"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#ffffff]">
      <div className="container mx-auto px-6 md:px-16 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start w-full">
        <FadeIn>
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.15em] text-[#0c5d69] uppercase mb-6">
            <span className="w-8 h-0.5 bg-[#0c5d69]"></span> Common Questions
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-bold text-[#0c5d69] mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-[#0c5d69] text-lg font-light leading-relaxed mb-8">
            Still have questions? Our team is happy to walk you through the entire process before you make any decisions.
          </p>
          <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-8 py-3.5 rounded-xl text-sm font-medium transition-all shadow-[0_4px_20px_rgba(19,162,183,0.3)] transform hover:-translate-y-1 group mt-2">
            Ask Us Anything <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {[
            { q: 'Is cataract surgery painful?', a: 'No. The procedure is performed under topical (eye drop) anaesthesia. You may feel mild pressure but no pain. Most patients are surprised by how comfortable and quick it is.' },
            { q: 'How long does the surgery take?', a: 'The surgical procedure itself takes approximately 10–20 minutes per eye. Including preparation and recovery, plan to spend about 2–3 hours at the clinic on the day.' },
            { q: 'When will I see clearly after surgery?', a: 'Most patients notice significant improvement within 24–48 hours. Vision continues to stabilise over 4–6 weeks as your eye heals and adjusts to the new intraocular lens.' },
            { q: 'Can both eyes be done at the same time?', a: 'We typically operate on one eye at a time, allowing the first eye to recover before treating the second — usually 1–2 weeks apart. This ensures safety and optimal outcomes.' },
            { q: 'Will I need glasses after surgery?', a: 'With premium multifocal or extended depth-of-focus IOLs, most patients achieve excellent vision without glasses. Standard monofocal lenses may still require reading glasses.' }
          ].map((faq, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className={`border border-[#cae2f2] rounded-xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'bg-[#ffffff] border-[#cae2f2] shadow-sm' : 'bg-white hover:border-[#0c5d69]/30'}`}>
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                >
                  <span className={`font-medium pr-4 ${openFaq === i ? 'text-[#0c5d69]' : 'text-[#0c5d69]'}`}>{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-[#13a2b7] text-white rotate-180' : 'bg-[#ffffff] text-[#0c5d69]'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                >
                  <p className="text-[#0c5d69] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

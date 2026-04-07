import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRight } from 'lucide-react';

export const TreatmentSection = () => {
  return (
    <section id="treatment" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#7BACC4] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#5B8FA8] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-6 md:px-16">
        <FadeIn className="text-center max-w-2xl mx-auto mb-20 relative z-10">
          <div className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] text-[#5B8FA8] uppercase mb-4">
            <span className="w-8 h-0.5 bg-[#5B8FA8]"></span> Treatment Journey <span className="w-8 h-0.5 bg-[#5B8FA8]"></span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-bold text-[#203A47] mb-6">
            Your Path to Clear Vision
          </h2>
          <p className="text-[#4A5A68] text-lg font-light leading-relaxed">
            From first consultation to full recovery — experience a smooth, well-guided, and painless process at every single step.
          </p>
        </FadeIn>

        <div className="relative">
          <div className="hidden md:block absolute top-[3rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#7BACC4] to-transparent z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 relative z-10">
            {[
              { step: 1, title: 'Free Screening', desc: 'Comprehensive exam to diagnose cataract type and density.' },
              { step: 2, title: 'Lens Selection', desc: 'Choose from premium IOLs based on your lifestyle needs.' },
              { step: 3, title: 'Phaco Surgery', desc: '15-minute micro-incision procedure. No stitches, no pain.' },
              { step: 4, title: 'Clear Vision', desc: 'See clearly within 24 hours. Full recovery in 4 weeks.' }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 150} className="text-center group">
                <div className="w-24 h-24 mx-auto bg-white rounded-full border-[3px] border-[#7BACC4] group-hover:border-[#5B8FA8] flex items-center justify-center font-['Cormorant_Garamond',serif] text-4xl font-bold text-[#203A47] shadow-lg group-hover:shadow-[0_0_25px_rgba(91,143,168,0.3)] transition-all group-hover:scale-110 mb-6 group-hover:bg-[#5B8FA8] group-hover:text-white relative">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[#203A47] mb-3">{item.title}</h3>
                <p className="text-sm text-[#4A5A68] leading-relaxed px-4">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn className="text-center mt-16 relative z-10">
          <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#5B8FA8] hover:bg-[#203A47] text-white px-8 py-3.5 rounded-xl text-sm font-medium transition-all shadow-[0_4px_20px_rgba(91,143,168,0.3)] transform hover:-translate-y-1 group">
            Start Your Journey <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

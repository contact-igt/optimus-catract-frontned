import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';

export const CtaSection = () => {
  return (
    <section id="book" className="relative py-24 bg-[#203A47] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5B8FA8] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7BACC4] opacity-10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to See the World Clearly?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 font-light">
            Book your free cataract screening today. No commitment, no pressure — just answers and a clear path forward to restoring your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#7BACC4] text-[#1C2530] hover:bg-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_4px_20px_rgba(123,172,196,0.3)] hover:-translate-y-1">
              Book Consultation
            </a>
            <a href="tel:+919999999999" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-1">
              <Phone size={18} /> Call Now
            </a>
          </div>
          <p className="text-[#7BACC4] text-sm mt-8 flex items-center justify-center gap-2">
            <CheckCircle2 size={16} className="text-[#7BACC4]" /> Mon – Sat · 9am – 6pm · Free Parking Available
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRight } from 'lucide-react';

export const TypesSection = () => {
  return (
    <section id="types" className="py-24 bg-[#EDF2F5] relative">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.15em] text-[#5B8FA8] uppercase mb-4">
            <span className="w-6 h-0.5 bg-[#5B8FA8]"></span> Types of Cataracts <span className="w-6 h-0.5 bg-[#5B8FA8]"></span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-bold text-[#203A47] mb-6">
            Identifying Your Cataract
          </h2>
          <p className="text-[#4A5A68] text-lg font-light leading-relaxed">
            Different cataracts affect different parts of the lens. Understanding your type helps us personalise your treatment plan for optimal visual outcomes.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { num: '01', name: 'Nuclear Cataract', desc: 'Forms at the centre of the lens. Most common age-related type. Causes progressive blurring and a yellow tint.' },
            { num: '02', name: 'Cortical Cataract', desc: 'Begins at the outer edge and moves inward like spokes. Causes significant glare, especially driving at night.' },
            { num: '03', name: 'Posterior Subcapsular', desc: 'Starts at the back of the lens. Progresses faster and causes halos, glare, and near-vision difficulties.' },
            { num: '04', name: 'Congenital Cataract', desc: 'Present at birth or early childhood. Requires prompt treatment to prevent lazy eye (amblyopia).' },
            { num: '05', name: 'Traumatic Cataract', desc: 'Develops after an eye injury. Blunt trauma or injuries can trigger lens clouding immediately or years later.' },
            { num: '06', name: 'Secondary Cataract', desc: 'Caused by conditions like diabetes or steroid use. Can also refer to opacification after primary surgery.' }
          ].map((type, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="bg-white rounded-2xl p-8 border border-[#C8D4DB] hover:border-[#5B8FA8] hover:shadow-[0_10px_40px_rgba(32,58,71,0.08)] transition-all transform hover:-translate-y-2 relative group overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7BACC4]/10 rounded-full blur-2xl group-hover:bg-[#5B8FA8]/10 transition-colors"></div>
                <div className="font-['Cormorant_Garamond',serif] text-6xl font-bold text-[#7BACC4]/40 leading-none mb-4 group-hover:text-[#5B8FA8]/40 transition-colors relative z-10">
                  {type.num}
                </div>
                <h3 className="text-xl font-semibold text-[#203A47] mb-3 relative z-10">{type.name}</h3>
                <p className="text-sm text-[#4A5A68] leading-relaxed relative z-10">{type.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-16">
          <a href="#treatment" className="inline-flex items-center justify-center gap-2 bg-[#5B8FA8] hover:bg-[#203A47] text-white px-8 py-3.5 rounded-xl text-sm font-medium transition-all shadow-[0_4px_20px_rgba(91,143,168,0.3)] transform hover:-translate-y-1 group">
            Explore Treatment Options <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

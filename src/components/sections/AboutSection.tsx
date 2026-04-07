import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Eye, Sun, Droplets, Activity, ArrowRight, ShieldAlert } from 'lucide-react';
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 bg-[#FAFCFD] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-[#EDF2F5] to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#E3EAEF] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Typography and Symptoms */}
          <FadeIn className="order-2 lg:order-1">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5B8FA8]/30 bg-[#5B8FA8]/5 text-[#5B8FA8] text-xs font-semibold tracking-widest uppercase mb-6">
                  <Eye size={14} /> Understanding Cataracts
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-5xl lg:text-6xl font-semibold text-[#203A47] leading-tight mb-6">
                  What exactly is a <br /><span className="text-[#5B8FA8] italic font-medium">Cataract?</span>
                </h2>
                <p className="text-[#4A5A68] text-lg leading-relaxed font-light">
                  The eye's natural lens is normally perfectly transparent. With age or injury, proteins within it clump together and <strong className="text-[#203A47] font-medium border-b border-[#5B8FA8]/40 pb-0.5">cloud the view</strong>. A cataract is not a growth or a film; it is a profound structural change within the lens itself.
                </p>
              </div>

              {/* Symptoms Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {[
                  { icon: <Eye size={20}/>, title: "Cloudy Vision", desc: "Like looking through a fogged window." },
                  { icon: <Sun size={20}/>, title: "Glare Sensitivity", desc: "Halos around lights and blinding headlights." },
                  { icon: <Droplets size={20}/>, title: "Fading Colours", desc: "The world develops a distinct yellow tint." },
                  { icon: <Activity size={20}/>, title: "Rx Changes", desc: "Frequent need to update glasses." }
                ].map((sym, i) => (
                  <div key={i} className="group bg-white p-5 rounded-2xl border border-[#EDF2F5] hover:border-[#5B8FA8]/30 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-[#EDF2F5] text-[#5B8FA8] group-hover:bg-[#5B8FA8] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                      {sym.icon}
                    </div>
                    <h4 className="text-[#203A47] font-semibold text-base mb-2">{sym.title}</h4>
                    <p className="text-[#8499A8] text-sm leading-relaxed">{sym.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <a href="#book" className="inline-flex items-center gap-3 bg-[#203A47] hover:bg-[#5B8FA8] text-white px-8 py-4 rounded-xl text-base font-medium transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1 group">
                  Book Consultation <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          </FadeIn>


          {/* Right Side: Visual widgets */}
          <FadeIn delay={200} className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Dark Card */}
              <div className="bg-[#203A47] rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_50px_rgba(32,58,71,0.2)] relative overflow-hidden backdrop-blur-lg border border-white/5">
                
                {/* Decorative Elements inside card */}
                <div className="absolute -top-32 -right-32 w-72 h-72 bg-[#5B8FA8] opacity-20 rounded-full blur-[80px]"></div>
                <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-[#7BACC4] opacity-10 rounded-full blur-[80px]"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-full bg-[#1C2530] flex items-center justify-center border border-white/10">
                       <ShieldAlert className="text-[#7BACC4]" size={18} />
                    </div>
                    <h3 className="text-white text-xl font-['Cormorant_Garamond',serif] font-medium tracking-wide">Inside the Eye Structure</h3>
                  </div>

                  {/* Lens Visual Presentation */}
                  <div className="bg-white rounded-[2rem] p-3 sm:p-5 mb-10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-[#5B8FA8]/30 relative group w-full">
                     <div className="absolute inset-0 bg-gradient-to-br from-white to-[#EDF2F5] rounded-[2rem]"></div>
                     <div className="relative z-10 w-full flex items-center justify-center rounded-[1.5rem] overflow-hidden bg-white shadow-inner">
                        <Image 
                           src="/assets/whatiscataract.png" 
                           alt="Cataract Eye Structure" 
                           width={500} 
                           height={500} 
                           className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.03] mix-blend-multiply" 
                        />
                     </div>
                  </div>

                  {/* Risk Factors */}
                  <div>
                    <h4 className="text-[#C8D4DB] text-[11px] font-medium mb-5 uppercase tracking-[0.15em]">Common Risk Factors</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {['Age 50+', 'Diabetes', 'UV Exposure', 'Smoking', 'Steroid Use', 'Genetics'].map((factor) => (
                        <div key={factor} className="bg-[#1C2530]/50 hover:bg-[#5B8FA8]/30 border border-white/5 text-[#EDF2F5] text-xs px-4 py-2.5 rounded-full transition-all duration-300 cursor-default flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#7BACC4]"></div>
                           {factor}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating element behind text */}
              <div className="hidden lg:block absolute -bottom-10 -left-10 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM1QjhGQTgiIG9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] pointer-events-none"></div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

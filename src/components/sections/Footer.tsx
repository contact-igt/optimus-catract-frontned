import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#1C2530] pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-white mb-4">
              OPTIMUS <span className="text-[#7BACC4] text-base font-sans tracking-widest uppercase block mt-1 font-normal">Eye Care</span>
            </div>
            <p className="text-[#8499A8] text-sm leading-relaxed mb-6">
              A specialist centre for cataract surgery and comprehensive eye health — guided by precision, driven by compassion.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[#7BACC4]"></span> Services
            </h4>
            <ul className="space-y-3">
              {['Cataract Surgery', 'LASIK Vision Correction', 'Glaucoma Care', 'Retina Services', 'Paediatric Eye Care'].map(link => (
                <li key={link}><a href="#" className="text-[#8499A8] hover:text-[#7BACC4] text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[#7BACC4]"></span> Company
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Our Doctors', 'Patient Reviews', 'Technology', 'Careers'].map(link => (
                <li key={link}><a href="#" className="text-[#8499A8] hover:text-[#7BACC4] text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[#7BACC4]"></span> Contact
            </h4>
            <div className="space-y-4">
              <div className="text-[#8499A8] text-sm"><strong className="text-white block mb-1">Phone</strong>+91 99999 99999</div>
              <div className="text-[#8499A8] text-sm"><strong className="text-white block mb-1">Email</strong>care@optimuseyecare.com</div>
              <div className="text-[#8499A8] text-sm"><strong className="text-white block mb-1">Hours</strong>Mon – Sat, 9am – 6pm</div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#8499A8] text-sm">© {new Date().getFullYear()} Optimus Eye Care. All rights reserved.</div>
          <div className="flex gap-6 text-sm text-[#8499A8]">
            <a href="#" className="hover:text-[#7BACC4] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#7BACC4] transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

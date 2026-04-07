import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-white/95 backdrop-blur-md border-b border-[#C8D4DB] shadow-sm transition-all">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border-[2.5px] border-[#5B8FA8] flex items-center justify-center relative">
          <div className="w-4 h-4 rounded-full bg-[#7BACC4] absolute"></div>
          <div className="w-2 h-2 rounded-full bg-[#1C2530] absolute z-10"></div>
        </div>
        <div className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#203A47] tracking-wide leading-tight">
          OPTIMUS
          <span className="font-['Outfit',sans-serif] font-normal text-[10px] block text-[#4A5A68] tracking-[0.15em] uppercase">Eye Care</span>
        </div>
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        {['About', 'Treatment', 'Why Us', 'FAQ'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-[#4A5A68] hover:text-[#5B8FA8] transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <a href="#book" className="hidden md:inline-flex bg-[#5B8FA8] hover:bg-[#203A47] text-white px-6 py-2.5 rounded-md text-sm font-medium transition-all shadow-md transform hover:-translate-y-0.5">
        Book Consultation
      </a>
    </nav>
  );
};

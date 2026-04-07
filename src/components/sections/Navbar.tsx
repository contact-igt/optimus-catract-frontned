import Image from 'next/image';
import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-white backdrop-blur-md border-b border-[#cae2f2] shadow-sm transition-all">
      <div className="flex items-center gap-3">
        {/* <div className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#0c5d69] tracking-wide leading-tight">
          OPTIMUS
          <span className="font-['Outfit',sans-serif] font-normal text-[10px] block text-[#0c5d69] tracking-[0.15em] uppercase">Eye Care</span>
        </div> */}
        <div>
          <Image src="/assets/logo.png" alt="Logo" width={170} height={170} />
        </div>
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        {['About', 'Treatment', 'Why Us', 'FAQ'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-[#0c5d69] hover:text-[#0c5d69] transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <a href="#book" className="hidden md:inline-flex bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-6 py-2.5 rounded-md text-sm font-medium transition-all shadow-md transform hover:-translate-y-0.5">
        Book Consultation
      </a>
    </nav>
  );
};

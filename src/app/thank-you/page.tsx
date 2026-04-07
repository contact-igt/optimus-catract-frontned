"use client";

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft, Calendar, Phone, Mail } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFB] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#5B8FA8]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#7BACC4]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-xl w-full relative z-10">
        <div className="bg-white rounded-[40px] shadow-[0_40px_80px_-20px_rgba(32,58,71,0.1)] border border-[#E3EAEF] overflow-hidden p-12 text-center">
          
          {/* Success Icon */}
          <div className="w-24 h-24 bg-[#EDF2F5] rounded-full flex items-center justify-center mx-auto mb-8 text-[#5B8FA8] border-8 border-white shadow-xl animate-in zoom-in duration-700">
            <CheckCircle2 size={48} strokeWidth={1.5} />
          </div>

          {/* Heading */}
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl font-semibold text-[#203A47] mb-6 animate-in slide-in-from-bottom-4 duration-700">
            Thank You for <span className="text-[#5B8FA8]">Choosing Us</span>
          </h1>

          {/* Message */}
          <p className="text-[#4A5A68] text-lg leading-relaxed mb-10 max-w-md mx-auto animate-in slide-in-from-bottom-8 duration-700 delay-100">
            Your consultation request has been received. Our patient care coordinator will call you within the next <b>30 minutes</b> to confirm your appointment.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 animate-in slide-in-from-bottom-12 duration-700 delay-200">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFB] border border-[#E3EAEF]">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#5B8FA8]">
                <Calendar size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#8499A8]">Response Time</p>
                <p className="text-[#203A47] font-semibold text-sm">Under 30 Mins</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFB] border border-[#E3EAEF]">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#5B8FA8]">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#8499A8]">Support Call</p>
                <p className="text-[#203A47] font-semibold text-sm">+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-[#203A47] hover:bg-[#1C2530] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#203A47]/20 group active:scale-[0.98] animate-in slide-in-from-bottom-16 duration-700 delay-300"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Homepage
          </Link>

          {/* Social / Footer Info */}
          <div className="mt-12 pt-8 border-t border-[#E3EAEF] flex items-center justify-center gap-8 animate-in fade-in duration-1000 delay-500">
             <div className="flex items-center gap-2 text-[#8499A8] text-sm font-medium">
               <Mail size={16} /> appointment@optimuseye.com
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Spacer: This creates the "scroll distance" to reveal the footer
    <div
      className="relative h-screen bg-slate-50"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-screen w-full bg-[#020410] text-white flex flex-col justify-between overflow-hidden">
        {/* 1. MASSIVE BACKGROUND TYPOGRAPHY (Bluish Tint) - Strictly BEHIND content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <h1 className="text-[30vw] font-black text-blue-900/10 tracking-tighter select-none leading-none mix-blend-color-dodge">
            NLK
          </h1>
        </div>

        {/* 2. MAIN CONTENT WRAPPER - Adjusted padding for better visibility */}
        <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col pt-24 pb-6 justify-between">
          {/* TOP SECTION: CTA & NEWSLETTER */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            {/* Left Side: Big Text & Buttons */}
            <div className="max-w-3xl relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-[2px] w-12 bg-orange-500"></div>
                <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm">
                  Join the legacy
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-8 text-white">
                Ready to start <br />
                your <span className="text-slate-500">journey?</span>
              </h2>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/admission"
                  className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-3 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-orange-500/30"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full border border-white/20 font-bold text-lg hover:bg-white/10 transition-colors text-white backdrop-blur-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Side: Stylish Input Field */}
            <div className="w-full lg:w-[450px] mb-4 lg:mb-0">
              <p className="text-slate-400 mb-3 font-medium text-lg">
                Subscribe to our newsletter
              </p>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-md"></div>
                <div className="relative flex items-center bg-[#0f172a] border border-white/10 rounded-2xl p-2 pr-2">
                  <input
                    type="email"
                    placeholder="email@address.com"
                    className="w-full bg-transparent px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none text-lg"
                  />
                  <button className="h-12 w-12 bg-orange-600 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors text-white shadow-lg shrink-0">
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE SECTION: LINKS GRID (Clean & Minimal) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 mt-auto">
            {/* Column 1 */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-2">Discover</h4>
              <ul className="space-y-3">
                <FooterLink href="/about" label="Our Story" />
                <FooterLink href="/about/founders" label="Leadership" />
                <FooterLink href="/branches" label="Campuses" />
                <FooterLink href="/career" label="Careers" />
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-2">Academics</h4>
              <ul className="space-y-3">
                <FooterLink href="/academics" label="Curriculum" />
                <FooterLink href="/admission" label="Admissions" />
                <FooterLink href="/vinam" label="Scholarships" />
                <FooterLink href="/referral" label="Staff Referral" />
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-2">Legal</h4>
              <ul className="space-y-3">
                <FooterLink href="/privacy" label="Privacy Policy" />
                <FooterLink href="/terms" label="Terms & Conditions" />
                <FooterLink href="/sitemap" label="Sitemap" />
                <FooterLink href="#" label="Student Portal" />
              </ul>
            </div>

            {/* Column 4: Connect */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-2">Connect</h4>
              <div className="flex gap-4">
                <SocialIcon href="#" icon={Facebook} />
                <SocialIcon href="#" icon={Instagram} />
                <SocialIcon href="#" icon={Twitter} />
                <SocialIcon href="#" icon={Youtube} />
              </div>
              <div className="text-slate-500 text-sm mt-4 space-y-1">
                <p>Kanpur, Uttar Pradesh, India</p>
                <a
                  href="mailto:contact@nlkschools.org"
                  className="hover:text-white transition-colors"
                >
                  contact@nlkschools.org
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/5">
            <p className="text-slate-600 text-sm">
              &copy; {currentYear} NLK Group of Schools. All rights reserved.
            </p>
            {/* Logo Watermark for balance */}
            <img
              src="https://www.nlkschools.org/wp-content/uploads/2020/08/nlk_logo.png"
              alt="NLK Logo"
              className="w-12 opacity-30 grayscale brightness-0 invert hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

function FooterLink({ href, label }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 text-sm md:text-base"
      >
        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-orange-500 h-[2px] bg-orange-500 block"></span>
        {label}
      </Link>
    </li>
  );
}

function SocialIcon({ href, icon: Icon }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-blue-950 transition-all duration-300 border border-white/10 hover:border-white hover:scale-110"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

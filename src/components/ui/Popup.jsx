"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 4 seconds
    const timer = setTimeout(() => setIsVisible(true), 4000);

    // Close on ESC key
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsVisible(false);
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button - Sticky on Mobile */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 z-50 p-2 bg-white/20 hover:bg-white/40 md:bg-black/5 md:hover:bg-black/10 backdrop-blur-md rounded-full transition-colors group"
            >
              <X className="w-5 h-5 text-white md:text-slate-600" />
            </button>

            {/* Left Side: Visual/Banner */}
            <div className="w-full md:w-5/12 bg-gradient-to-br from-orange-500 via-red-600 to-fuchsia-700 text-white relative overflow-hidden flex-shrink-0">
              {/* Animated Blobs */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"
              />

              {/* Content Container */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-center h-full">
                <div className="inline-flex items-center gap-2 self-start bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20 shadow-lg">
                  <Sparkles className="w-3 h-3 text-yellow-300" />
                  Admissions Open
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight drop-shadow-sm">
                  Future Ready <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-400">
                    Education
                  </span>
                </h3>

                <p className="text-blue-100 text-base sm:text-lg mb-8 font-medium leading-relaxed">
                  Join the NLK Family for the 2025-26 Academic Session.
                </p>

                <div className="space-y-3 hidden sm:block">
                  {[
                    "Scholarships Available",
                    "Advanced Robotics Labs",
                    "Global Sports Infrastructure",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="font-semibold text-sm tracking-wide text-white/90">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-7/12 bg-white overflow-y-auto custom-scrollbar">
              <div className="p-6 sm:p-8 md:p-10">
                <div className="mb-6 md:mb-8">
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">
                    Request a Call Back
                  </h4>
                  <p className="text-slate-500 text-sm">
                    Fill in your details and our admission counselor will reach
                    out to guide you.
                  </p>
                </div>

                <form
                  className="space-y-5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                        Parent Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-medium text-slate-700 placeholder:text-slate-400"
                        placeholder="Rahul Sharma"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-medium text-slate-700 placeholder:text-slate-400"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                        Grade
                      </label>
                      <div className="relative">
                        <select className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-700 appearance-none cursor-pointer">
                          <option>Nursery</option>
                          <option>KG - Grade 5</option>
                          <option>Grade 6 - 8</option>
                          <option>Grade 9 - 12</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                        Branch
                      </label>
                      <div className="relative">
                        <select className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-700 appearance-none cursor-pointer">
                          <option>Select...</option>
                          <option>Ashok Nagar</option>
                          <option>Mandhana</option>
                          <option>Civil Lines</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button className="group w-full bg-blue-950  text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
                      Enquire Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-3">
                      We respect your privacy. No spam.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

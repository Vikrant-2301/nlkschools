"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Sparkles } from "lucide-react";

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 4 seconds
    const timer = setTimeout(() => setIsVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="fixed inset-0 bg-blue-950/70 backdrop-blur-md z-[100]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-white rounded-[2rem] shadow-2xl z-[101] overflow-hidden flex flex-col md:flex-row border-4 border-white/20"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors z-20"
            >
              <X className="w-6 h-6 text-slate-700" />
            </button>

            <div className="w-full md:w-5/12 bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 text-white p-10 flex flex-col justify-center relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-xl"
              />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                  <Sparkles className="w-3 h-3 text-yellow-300" /> New Session
                  Open
                </div>
                <h3 className="text-4xl font-black mb-2 leading-tight">
                  Unlock Your Child&apos;s <br />
                  Potential
                </h3>
                <p className="text-white/90 text-lg mb-8 font-medium">
                  Join the NLK Family for 2025-26
                </p>

                <div className="space-y-4">
                  {[
                    "Scholarships Available",
                    "World-Class Sports Facility",
                    "Robotics & Coding Labs",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-3 bg-black/10 p-3 rounded-xl backdrop-blur-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="font-semibold text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-7/12 p-8 md:p-10 bg-slate-50">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-slate-800">
                  Request a Call Back
                </h4>
                <p className="text-slate-500">
                  Our admission counselor will contact you shortly.
                </p>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                    Parent Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 bg-white rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-sm"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-4 bg-white rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-sm"
                    placeholder="+91 99999 99999"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                      Grade
                    </label>
                    <select className="w-full p-4 bg-white rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-orange-500 shadow-sm appearance-none">
                      <option>Nursery</option>
                      <option>KG - Grade 5</option>
                      <option>Grade 6 - 8</option>
                      <option>Grade 9 - 12</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                      Preferred Branch
                    </label>
                    <select className="w-full p-4 bg-white rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-orange-500 shadow-sm appearance-none">
                      <option>Any</option>
                      <option>Ashok Nagar</option>
                      <option>Mandhana</option>
                      <option>Civil Lines</option>
                    </select>
                  </div>
                </div>

                <button className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/30 transform hover:-translate-y-1 mt-4">
                  Enquire Now
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

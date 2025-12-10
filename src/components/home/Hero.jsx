"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 bg-blue-950">
        {/* Fallback color if video doesn't load */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-university-students-walking-in-slow-motion-4863-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Gradient Overlay for seamless transition to content */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/40 to-slate-50" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pt-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="https://www.nlkschools.org/wp-content/uploads/2020/08/nlk_logo.png"
            alt="NLK Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl brightness-125"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            We teach{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              how to think
            </span>
            ,<br />
            not what to think.
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Join the most progressive educational community in Kanpur. Shaping
            minds with modern pedagogy since 1947.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/50 flex items-center justify-center gap-2">
              Apply for 2025-26 <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-2">
              <Play className="w-5 h-5 fill-current" /> Watch Our Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

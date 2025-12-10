"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Award, Users, BookOpen, MapPin } from "lucide-react";

// --- Utility for the counting animation ---
const useCounter = (ref, value, delay, isInView) => {
  useEffect(() => {
    if (isInView) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 2.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(v) {
          if (node) node.textContent = Math.round(v).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [value, isInView, delay]);
};

function StatItem({ value, label, icon: Icon, delay, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useCounter(ref, value, delay, isInView);

  return (
    <div className="relative group flex flex-col items-center justify-center p-8 md:p-10">
      {/* Icon Circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay, duration: 0.5, type: "spring" }}
        className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:rotate-6 transition-all duration-300 shadow-inner border border-white/10"
      >
        <Icon className="w-8 h-8 text-orange-400 group-hover:text-white transition-colors duration-300" />
      </motion.div>

      {/* Number */}
      <div className="flex items-baseline gap-1 mb-2">
        <span
          ref={ref}
          className="text-5xl md:text-6xl font-black text-white tracking-tight"
        >
          0
        </span>
        <span className="text-3xl font-bold text-orange-500">+</span>
      </div>

      {/* Label */}
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200 group-hover:text-white transition-colors duration-300 text-center">
        {label}
      </p>

      {/* Separator Line (Desktop only) */}
      {!isLast && (
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      )}

      {/* Separator Line (Mobile only - Bottom) */}
      {!isLast && (
        <div className="block lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
    </div>
  );
}

export default function Stats() {
  return (
    // Matches the 'bg-slate-50' of your page.jsx
    <section className="relative z-20 py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        {/* The Card Container - Matches 'rounded-[3rem]' from About/Training pages */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] bg-blue-950 overflow-hidden shadow-2xl shadow-blue-900/20"
        >
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

            {/* Organic Glow Blobs */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/5 sm:divide-y-0">
            <StatItem
              value={76}
              label="Years of Excellence"
              icon={Award}
              delay={0}
            />
            <StatItem
              value={9000}
              label="Students Enrolled"
              icon={Users}
              delay={0.1}
            />
            <StatItem
              value={400}
              label="Expert Educators"
              icon={BookOpen}
              delay={0.2}
            />
            <StatItem
              value={8}
              label="Branches"
              icon={MapPin}
              delay={0.3}
              isLast={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

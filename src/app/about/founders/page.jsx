"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

const founders = [
  {
    id: "hiralal",
    name: "Late Shri Hira Lal Khanna Ji",
    years: "1889 — 1965",
    role: "The Visionary Founder",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2022/07/hiralalji.jpg",
    quote:
      "Education has the tremendous responsibility to transform a student's thinking from 'what you can do for me' to 'what I can do for you'.",
    desc: [
      "Shri Hiralal Khanna Ji, one of the most eminent educationalists of this province, earned a name not only as an able, efficient, and sympathetic teacher but also as a great publicist in educational matters.",
      "His unbounded energy and a drive fired by zeal to serve the community helped him leave an indelible mark in the educational history of Uttar Pradesh.",
    ],
    signature: "H.L. Khanna",
  },
  {
    id: "nandlal",
    name: "Late Shri Nandlal Khanna Ji",
    years: "1917 — 1985",
    role: "The Architect of Growth",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2022/07/nanadlal-ji.jpg",
    quote:
      "Lives of great men all remind us / We can make our lives sublime, / And, departing, leave behind us / Footprints on the sands of time.",
    desc: [
      "Raised by his father 'Babuji' after losing his mother at a tender age, he grew into a futuristic leader who thought of new possibilities that never existed before.",
      "After completing his education from Allahabad University, he expanded 'Cossul & Co.' into international markets.",
    ],
    signature: "N.L. Khanna",
  },
  {
    id: "pushpa",
    name: "Smt. Pushpa Khanna Ji",
    years: "1925 — 2017",
    role: "The Beacon of Empowerment",
    image: "https://www.nlkschools.org/wp-content/uploads/2022/07/pushpaji.jpg",
    quote:
      "Develop a passion for learning. If you do, you will never cease to grow.",
    desc: [
      "Married at the young age of 14, her father-in-law encouraged her to study further. She completed her Master's degree in Hindi while mothering two wonderful young kids.",
      "A highly zealous nature inspired her to open a Home Science Institute for women in Kanpur in the 1960s.",
    ],
    signature: "Pushpa Khanna",
  },
];

function FounderCard({ data, index, progress }) {
  const containerRef = useRef(null);

  // Subtle Parallax for image inside card
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  // More subtle scale effect
  const scale = useTransform(progress, [0, 1], [1, 0.96]);

  return (
    // FIX 1: 'top-36' (approx 144px) ensures it clears the Navbar completely
    // FIX 2: 'max-h-[550px]' forces a compact height so no scrolling is needed
    <div
      ref={containerRef}
      className="sticky top-32 md:top-36 h-[65vh] max-h-[550px] flex items-start justify-center mb-8 last:mb-0 perspective-1000"
    >
      <motion.div
        style={{ scale }}
        className="relative w-full max-w-5xl h-full bg-white text-slate-900 rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row"
      >
        {/* --- LEFT: IMAGE (40% width) --- */}
        <div className="w-full md:w-2/5 h-2/5 md:h-full relative overflow-hidden bg-slate-100 group border-b md:border-b-0 md:border-r border-slate-100">
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-0 w-full h-[120%]"
          >
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover object-top filter sepia-[0.05] contrast-[0.95] group-hover:sepia-0 group-hover:contrast-100 transition-all duration-1000 ease-out"
            />
          </motion.div>

          {/* Mobile Overlay Name */}
          <div className="absolute bottom-4 left-5 md:hidden z-10">
            <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-1 shadow-sm">
              {data.years}
            </p>
            <h2 className="text-xl font-bold text-white shadow-sm leading-tight">
              {data.name}
            </h2>
          </div>
        </div>

        {/* --- RIGHT: TEXT (60% width) --- */}
        {/* FIX 3: Removed 'overflow-y-auto' and adjusted padding/text size to fit naturally */}
        <div className="w-full md:w-3/5 h-3/5 md:h-full p-6 md:p-10 flex flex-col justify-center relative z-10">
          <div className="max-w-xl mx-auto md:mx-0">
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden md:flex items-center gap-3 mb-4"
            >
              <span className="h-[1px] w-8 bg-orange-500"></span>
              <span className="text-orange-600 font-bold uppercase tracking-[0.2em] text-[10px]">
                {data.years}
              </span>
            </motion.div>

            {/* Name & Role */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden md:block mb-5"
            >
              <h2 className="text-2xl lg:text-4xl font-serif font-bold text-blue-950 mb-1 leading-tight">
                {data.name}
              </h2>
              <p className="text-slate-400 font-medium italic text-sm inline-block">
                {data.role}
              </p>
            </motion.div>

            {/* Quote Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative mb-5"
            >
              <Quote className="w-6 h-6 text-orange-200/60 absolute -top-3 -left-2 -z-10" />
              <p className="text-base md:text-lg font-serif text-slate-700 italic leading-relaxed pl-4 border-l-2 border-orange-500/20">
                &ldquo;{data.quote}&rdquo;
              </p>
            </motion.div>

            {/* Description Text - Compact Leading */}
            <div className="space-y-3 text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
              {data.desc.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-right border-t border-slate-50 pt-4"
            >
              <span className="font-serif italic text-2xl text-slate-300 select-none transform -rotate-2 inline-block">
                {data.signature}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Index Number */}
        <div className="hidden md:block absolute top-6 right-6 text-slate-50 font-black text-7xl z-0 pointer-events-none select-none">
          0{index + 1}
        </div>
      </motion.div>
    </div>
  );
}

export default function Founders() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="bg-white relative min-h-screen">
      {/* 1. HERO SECTION */}
      {/* Removed 'sticky' to satisfy "dont show the our legacy page while i scroll" */}
      <section className="h-[85vh] flex items-center justify-center relative overflow-hidden">
        {/* Top Padding ensures Navbar doesn't cover content */}
        <div className="relative z-10 text-center px-6 pt-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-orange-500"></div>
              <span className="text-orange-600 font-bold uppercase tracking-[0.3em] text-sm">
                Est. 1947
              </span>
              <div className="h-[1px] w-12 bg-orange-500"></div>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif font-bold text-blue-950 tracking-tight mb-6">
              Our Legacy
            </h1>

            <p className="text-lg text-slate-500 max-w-lg mx-auto leading-relaxed">
              The visionaries who planted the seeds of knowledge, watered them
              with dedication, and watched them grow into an empire of
              education.
            </p>
          </motion.div>
        </div>

        {/* Clean White/Light Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-50/50 rounded-full blur-[120px]" />

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-300 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">
            Scroll Down
          </span>
          <div className="w-[1px] h-12 bg-slate-200"></div>
        </motion.div>
      </section>

      {/* 2. STACKING CARDS */}
      {/* Added 'pb-40' to fix spacing on last card */}
      <div className="relative z-10 px-4 pb-40">
        {founders.map((founder, index) => (
          <FounderCard
            key={founder.id}
            data={founder}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>

      {/* 3. FOOTER TRIBUTE */}
      <section className="relative z-10 bg-slate-50 py-32 flex items-center justify-center border-t border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Sparkles className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6 leading-tight">
            Carrying the Torch <br />
            <span className="italic font-serif text-orange-600">Forward</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Today, we stand tall on the foundation laid by these great souls.
            Their values of integrity, compassion, and excellence continue to
            guide every decision we make at NLK Group of Schools.
          </p>
        </div>
      </section>
    </div>
  );
}

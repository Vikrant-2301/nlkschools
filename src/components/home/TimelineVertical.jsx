"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  {
    year: "1947",
    title: "The Beginning",
    desc: "Founded by Late Sri Hira Lal Khanna Ji. Established Kanpur High School for Boys.",
  },
  {
    year: "1953",
    title: "Empowering Girls",
    desc: "Late Pushpa Khanna Ji established Kanpur High School for Girls to promote women's education.",
  },
  {
    year: "1967",
    title: "Serving Society",
    desc: "Established PDK Bal Niketan for girls from the underprivileged sections of society.",
  },
  {
    year: "1972",
    title: "New Horizons",
    desc: "Expanded with a Co-Educational school in Jawahar Nagar to meet changing needs.",
  },
  {
    year: "1987",
    title: "A New Legacy",
    desc: "Smt. Pushpa Khanna Ji establishes NLKVM at Vishnupuri with just 7 students.",
  },
  {
    year: "2006",
    title: "Academic Excellence",
    desc: "NLK Primary School and NLK Public School established for rigorous academic preparation.",
  },
  {
    year: "2008",
    title: "The Fun Begins",
    desc: "NLK's Little Steps and NLK's Wendy School opened to nurture young minds.",
  },
  {
    year: "2014",
    title: "Higher Education",
    desc: "NLK Inter College (Ashok Nagar) set up to provide best facilities to all sections of society.",
  },
  {
    year: "2016",
    title: "Inclusive Education",
    desc: "NLK's Disha established to provide special education and care for differently-abled children.",
  },
  {
    year: "2020",
    title: "Future Ready",
    desc: "NLK Academy launched as a flagship futuristic K-12 campus at Mandhana.",
  },
  {
    year: "2025",
    title: "Leading Forward",
    desc: "Continuing the legacy with modern pedagogy and holistic development.",
  },
];

function TimelineCard({ year, title, desc, index }) {
  return (
    <div className="shrink-0 w-[85vw] md:w-[600px] h-[60vh] md:h-[70vh] relative overflow-hidden rounded-[3rem] bg-slate-900 border border-white/10 p-8 md:p-12 flex flex-col justify-end group transition-colors hover:bg-slate-800">
      <div className="absolute top-0 right-0 p-10 md:p-20 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
        <span className="text-[12rem] md:text-[20rem] font-black leading-none text-white">
          {year}
        </span>
      </div>

      <div className="relative z-10">
        <span className="inline-block px-4 py-2 bg-orange-600 text-white text-sm font-bold rounded-full mb-6">
          Milestone {index + 1}
        </span>
        <h3 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="block text-orange-500 text-2xl md:text-3xl mb-2 font-mono opacity-80">
            {year}
          </span>
          {title}
        </h3>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-md">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function LegacyTimeline() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-slate-950">
      {/* FIX: Changed h-screen to h-[100vh] for better stability with sticky positioning */}
      <div className="sticky top-0 flex h-[100vh] items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-8 md:gap-12 pl-8 md:pl-32 min-w-max"
        >
          {/* Title Section */}
          <div className="shrink-0 w-[80vw] md:w-[30vw] flex flex-col justify-center z-10 pr-12">
            <h2 className="text-6xl md:text-9xl font-black mb-6 text-white tracking-tighter">
              Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600">
                Legacy
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-md border-l-4 border-orange-500 pl-6">
              Shaping the future of education since 1947.
            </p>
          </div>

          {/* Render Milestones */}
          {milestones.map((item, index) => (
            <TimelineCard
              key={item.year}
              index={index}
              year={item.year}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

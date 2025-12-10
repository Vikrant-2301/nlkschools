"use client";
import { motion } from "framer-motion";
import { Lightbulb, Compass, Users, Layers } from "lucide-react";

export default function OurApproach() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm">
            Pedagogy & Philosophy
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 mt-4 mb-8">
            We Teach <span className="text-orange-600">How To Think</span>,
            <br />
            Not What To Think
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Our educational philosophy is rooted in the belief that children are
            not vessels to be filled, but lamps to be lit. We focus on
            inquiry-based learning that fosters curiosity.
          </p>
        </div>

        {/* Section 1: Preschool */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-orange-500 rounded-[3rem] rotate-3 transform translate-x-4 translate-y-4 opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2572&auto=format&fit=crop"
              alt="Preschool Learning"
              className="relative rounded-[3rem] shadow-2xl z-10 w-full"
            />
          </motion.div>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Compass className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Preschool Programme
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              NLK Group of Schools offers a Kindergarten Programme that
              inculcates qualities of curiosity, exploration, and discovery. We
              emphasize developing self-confidence and communication skills in
              English through:
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {[
                "Story Telling",
                "Role Playing",
                "Creative Projects",
                "Dance & Music",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-bold text-slate-700 bg-white p-3 rounded-lg border border-slate-100 shadow-sm"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 2: Grade School */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Grade School Programme
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our Middle School Programme is structured to meet varied
              intellectual needs. It ensures progression and continuity,
              focusing on:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" /> Critical
                  Thinking
                </h3>
                <p className="text-slate-500 text-sm">
                  Projects designed to integrate knowledge across Math, Science,
                  and Social Studies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-500" /> Social Skills
                </h3>
                <p className="text-slate-500 text-sm">
                  Field trips, excursions, and group presentations to build team
                  spirit and awareness.
                </p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 bg-blue-900 rounded-[3rem] -rotate-3 transform -translate-x-4 translate-y-4 opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1577896238860-0c1a5d2e77b4?q=80&w=2602&auto=format&fit=crop"
              alt="Grade School"
              className="relative rounded-[3rem] shadow-2xl z-10 w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

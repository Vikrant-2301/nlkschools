"use client";
import { motion } from "framer-motion";
import { Trophy, Star, Medal } from "lucide-react";

const achievements = [
  {
    name: "Vinshi Vaman",
    event: "Rural National Games 2024",
    award: "Gold in Kumite, Silver in Kata",
    desc: "A phenomenal achievement in Karate demonstrating dedication and hard work.",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Swastik Kashyap",
    event: "Kalyanpur Premiere League",
    award: "Man of the Match",
    desc: "Emerging as a cricketing sensation, leading his team to victory as Captain.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Anshika",
    event: "Indo-Nepal Karate Championship",
    award: "1st Position (State Level)",
    desc: "Outstanding achievement reflecting discipline and training.",
    color: "bg-red-100 text-red-700",
  },
  {
    name: "Shreyash Maurya",
    event: "SOF National Cyber Olympiad",
    award: "Intl Rank 6",
    desc: "Awarded medal and certificate of distinction for performance excellence.",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Ansh Sharma",
    event: "Young Author",
    award: "Published 3 Books",
    desc: "Wrote 'Return of Evil' at age 13. Books available on Amazon & Flipkart.",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Vaishnavi Agnihotri",
    event: "Archery Championship",
    award: "Multiple Gold Medals",
    desc: "Winner in District and State Open Championships.",
    color: "bg-orange-100 text-orange-700",
  },
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <h1 className="text-4xl font-black text-blue-900">Hall of Fame</h1>
            <p className="text-slate-500 mt-2 text-lg">
              Celebrating the rising stars of NLK Group.
            </p>
          </div>
          <div className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-orange-500/30 flex items-center gap-2">
            <Trophy className="w-5 h-5" /> Student Achievements
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${item.color}`}
                >
                  {item.award}
                </div>
                <Medal className="w-6 h-6 text-slate-300 group-hover:text-orange-500 transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                {item.name}
              </h3>
              <p className="text-sm font-semibold text-slate-400 mb-4">
                {item.event}
              </p>

              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

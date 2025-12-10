"use client";
import { motion } from "framer-motion";
import { Award, CheckCircle, Globe } from "lucide-react";

const awards = [
  {
    title: "International School Award (ISA)",
    org: "British Council",
    years: "2020-2023",
    desc: "Accreditation for instilling a global dimension into the learning experience. Projects involved collaborations with schools in Uganda, Sri Lanka, Nepal, and South Korea.",
    logo: "https://www.nlkschools.org/wp-content/uploads/2020/09/British-Council-300x188.jpg",
  },
  {
    title: "School Excellence Award",
    org: "Brainfeed Magazine",
    years: "2017-18",
    desc: "Recognized among the Top 500 Schools in India for Best Academic Excellence, Innovative Practices, and Sports Education.",
    logo: "https://www.nlkschools.org/wp-content/uploads/2020/09/home_award02.png", // Placeholder based on generic pattern
  },
  {
    title: "Rank #1 Innovative Teaching",
    org: "EducationToday.co",
    years: "2018",
    desc: "Ranked No.1 in India under Top State Board Schools for Innovative Teaching practices based on jury rating and parent votes.",
    logo: "https://www.nlkschools.org/wp-content/uploads/2020/09/education-today-logo.png",
  },
  {
    title: "Inclusive Education Award",
    org: "Early Childhood Association",
    years: "2020",
    desc: "Awarded for commitment to Inclusive Education in Early Childhood, recognizing our dedication to every child's unique needs.",
    logo: "https://www.nlkschools.org/wp-content/uploads/2020/09/ECA-NEW-LOGO-PNG.png",
  },
];

export default function Accreditations() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
            <Award className="w-8 h-8 text-blue-700" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
            Awards & Accreditations
          </h1>
          <p className="text-lg text-slate-600">
            Our commitment to excellence has been recognized by prestigious
            national and international bodies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="h-24 w-full flex items-center justify-center mb-6">
                {/* Fallback to text if image breaks, but structure allows image */}
                <div className="bg-slate-50 p-4 rounded-xl">
                  <img
                    src={award.logo}
                    alt={award.org}
                    className="max-h-16 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<span class="font-bold text-slate-400">Award Logo</span>';
                    }}
                  />
                </div>
              </div>

              <div className="bg-blue-50 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                {award.years}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {award.title}
              </h3>
              <p className="text-sm font-bold text-orange-500 mb-4">
                {award.org}
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                {award.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

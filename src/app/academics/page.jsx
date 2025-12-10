"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Award,
  Trophy,
  Users,
  ArrowRight,
  Brain,
  Calculator,
  Library,
  Shield,
} from "lucide-react";

const programs = [
  {
    title: "Creya XEL 2.0",
    desc: "STEM Learning Program enabling students to build empathy and solve real-world problems using Design Thinking.",
    icon: Brain,
    color: "text-purple-600",
    bg: "bg-purple-50",
    image: "https://www.nlkschools.org/wp-content/uploads/2021/02/creya-1.jpg",
  },
  {
    title: "Jodo Gyan",
    desc: "Innovative methods in mathematics based on the premise that children learn when they are engaged in meaningful activities.",
    icon: Calculator,
    color: "text-blue-600",
    bg: "bg-blue-50",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2021/02/jodogyan-logo.png",
  },
  {
    title: "StoryWeaver",
    desc: "A digital library of free children's storybooks enabling open access to books in their own language.",
    icon: Library,
    color: "text-orange-600",
    bg: "bg-orange-50",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2024/04/storyweaver-logo.png",
  },
  {
    title: "Arpan",
    desc: "Personal Safety Education program catering to children in schools to prevent abuse and ensure safety.",
    icon: Shield,
    color: "text-green-600",
    bg: "bg-green-50",
    image: "https://www.nlkschools.org/wp-content/uploads/2020/09/asso5-1.png",
  },
];

const features = [
  {
    title: "Our Approach",
    desc: "Discover our unique pedagogy that focuses on 'How to Think'.",
    icon: BookOpen,
    href: "/academics/approach",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop",
  },
  {
    title: "Accreditations",
    desc: "Recognized excellence by British Council and national bodies.",
    icon: Award,
    href: "/academics/accreditations",
    image:
      "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2532&auto=format&fit=crop",
  },
  {
    title: "Achievements",
    desc: "Celebrating the victories of our students in Sports & Academics.",
    icon: Trophy,
    href: "/academics/achievements",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2690&auto=format&fit=crop",
  },
  {
    title: "Training",
    desc: "Continuous professional development for our world-class educators.",
    icon: Users,
    href: "/academics/training",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop",
  },
];

export default function Academics() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 selection:bg-orange-200 selection:text-orange-900">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-blue-900 mb-6 tracking-tight"
          >
            Academic Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            We work towards a holistic, experiential, and student-centred
            educational system that improves creativity and critical thinking.
          </motion.p>
        </div>

        {/* 1. Main Navigation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <Link key={feature.title} href={feature.href} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative h-80 rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {feature.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-orange-400 font-bold text-sm uppercase tracking-wider">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* 2. Academic Partners Section */}
        <div className="mb-12">
          <div className="flex items-end justify-between mb-10 border-b border-slate-200 pb-6">
            <div>
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
                Curriculum Partners
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">
                Innovative Learning Programs
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {programs.map((prog, index) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-orange-100 hover:shadow-xl transition-all duration-300 group flex items-start gap-6"
              >
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-slate-50 p-4 border border-slate-100 flex items-center justify-center">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {prog.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

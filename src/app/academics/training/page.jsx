"use client";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  BookOpen,
  Target,
  Rocket,
  Music,
  Quote,
  Lightbulb,
} from "lucide-react";

// Data extracted from your uploaded images
const programs = [
  {
    id: "steam",
    title: "STEAM Education",
    subtitle: "Science Technology Engineering Arts and Mathematics",
    icon: Rocket,
    quote: "Knowledge isn't power until it is applied — Dale Carnegie",
    description:
      "Conducted by Mr. Varun from Creya, this program guides teachers on Engineering Design, Coding, and Inquiry-Based Learning (IBL). Teachers learned to differentiate between experience and experiential learning, applying interdisciplinary approaches required by 21st-century learners.",
    points: [
      "Inquiry-Based Learning (IBL) methodologies",
      "Design Thinking Process: Define, Ideate, Prototype, Test",
      "Managing time and materials in Engineering Design",
      "Strategies to make classroom learning interactive",
    ],
    color: "bg-teal-50",
    accent: "text-teal-600",
    border: "border-teal-100",
  },
  {
    id: "tgelf",
    title: "tGELF Leadership",
    subtitle: "The Global Education and Leadership Foundation",
    icon: Users,
    quote:
      "Great teachers are great leaders who are masters of translating mission, vision and strategy into action — Deborah Chang",
    description:
      "Facilitated by Ms. Dinu, Mr. Rahul & Ms. Shuchi, this session introduced the SKILLD curriculum. Teachers explored the concept that today's youth are tomorrow's leaders, learning how to inculcate entrepreneurship mindsets and leadership strengths in students.",
    points: [
      "SKILLD Curriculum: 10 modules of leadership",
      "4 Pillars: Leadership Skills, Ethics, Altruism, Decisiveness",
      "Translating vision into classroom action",
      "Structured lessons for character building",
    ],
    color: "bg-orange-50",
    accent: "text-orange-600",
    border: "border-orange-100",
  },
  {
    id: "macmillan",
    title: "Macmillan Education",
    subtitle: "Early Childhood Pedagogy",
    icon: BookOpen,
    quote:
      "Tell me and I forget, teach me and I may remember, involve me and I learn — Benjamin Franklin",
    description:
      "Introduced by Mr. Lal and conducted by Ms. Ashoo Kalra, this workshop focused on the 'Hop Skip and Jump' series. It addressed hybrid learning excitement and the importance of using digital books alongside normal textbooks, following NEP-20 guidelines.",
    points: [
      "Theory of Multiple Intelligences (Visual, Auditory, Kinesthetic)",
      "Ice-breaking activities and classroom energizers",
      "Integrating digital tools with traditional books",
      "Best practices for Early Childhood Years",
    ],
    color: "bg-red-50",
    accent: "text-red-600",
    border: "border-red-100",
  },
  {
    id: "karadi",
    title: "Karadi Tales",
    subtitle: "Natural Language Acquisition",
    icon: Music,
    quote:
      "The Fire of literacy is created by the sparks between a child, a book and the reading person — Mem Fox",
    description:
      "Commenced by Ms. Varsha, this session taught that language isn't based on IQ level. It emphasized a non-linear, non-instructional approach where students derive English naturally—similar to their mother tongue—through discovery, intuition, and sensory engagement.",
    points: [
      "Learning via Action, Music, Reading, and Theatre",
      "Creating a non-judgmental speaking environment",
      "Replicating natural language environments",
      "Story-based learning contexts",
    ],
    color: "bg-blue-50",
    accent: "text-blue-600",
    border: "border-blue-100",
  },
];

// URLs 01 to 07 as requested
const galleryImages = [
  "https://www.nlkschools.org/wp-content/uploads/2023/03/01.jpg",
  "https://www.nlkschools.org/wp-content/uploads/2023/03/02.jpg",
  "https://www.nlkschools.org/wp-content/uploads/2023/03/03.jpg",
  "https://www.nlkschools.org/wp-content/uploads/2023/03/04.jpg",
  "https://www.nlkschools.org/wp-content/uploads/2023/03/05.jpg",
  "https://www.nlkschools.org/wp-content/uploads/2023/03/06.jpg",
  "https://www.nlkschools.org/wp-content/uploads/2023/03/07.jpg",
];

export default function Training() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="bg-blue-950 rounded-[3rem] p-12 md:p-20 text-white text-center mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <span className="bg-blue-800 text-blue-200 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
              Professional Development
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Empowering Educators
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We believe that teachers are lifelong learners. Our dedicated QAID
              (Quality Assurance and Innovation Department) ensures continuous
              growth through specialized training programs.
            </p>
          </motion.div>
        </div>

        {/* Why Development Program Section */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Why Development Program?
          </h2>
          <div className="bg-yellow-50 p-8 rounded-3xl border border-yellow-100 relative mb-10 mx-4 md:mx-0">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-yellow-300 opacity-50" />
            <p className="text-xl font-serif italic text-slate-700 relative z-10 mb-4">
              &quot;Unless you try to do something beyond what you have already
              mastered, you will never grow.&quot;
            </p>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              — Ralph Waldo Emerson
            </p>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed text-left md:text-center">
            Teaching is a life-long process. We invest in the professional
            development of teachers to go beyond academics and inculcate
            learning programs like <strong>Leadership</strong>,{" "}
            <strong>Coding</strong>, and <strong>Reading</strong>. To inculcate
            21st-century skills in students, our teachers prepare themselves to
            provide the right vision through segregation based on potential.
          </p>
        </div>

        {/* Detailed Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {programs.map((program, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={program.id}
              className={`${program.color} p-8 rounded-[2.5rem] border ${program.border}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 bg-white rounded-2xl shadow-sm ${program.accent}`}
                >
                  <program.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {program.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    {program.subtitle}
                  </p>
                </div>
              </div>

              <blockquote className="border-l-4 border-slate-200 pl-4 py-1 my-6 italic text-slate-600 text-sm">
                &quot;{program.quote}&quot;
              </blockquote>

              <p className="text-slate-700 mb-8 leading-relaxed">
                {program.description}
              </p>

              <ul className="space-y-3 bg-white/60 p-6 rounded-2xl">
                {program.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-slate-700 text-sm font-medium"
                  >
                    <CheckCircle
                      className={`w-5 h-5 ${program.accent} mt-0.5 shrink-0`}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Jodo Gyan Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24 max-w-6xl mx-auto border-t border-slate-100 pt-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">
              Jodo Gyan Workshop
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed italic">
              &quot;All children can learn Mathematics with understanding and
              happiness.&quot;
            </p>
            <p className="text-slate-600">
              Teachers of NLK attended a specialized workshop in Delhi to master
              innovative math teaching methods including{" "}
              <span className="font-bold text-blue-900">
                Ganit Rack, Billi ke Bacche, and Number Patti
              </span>
              . These methods ensure foundational numeracy develops through
              purposeful engagement.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 flex items-center justify-center">
            <img
              src="https://www.nlkschools.org/wp-content/uploads/2021/02/jodogyan-logo.png"
              alt="Jodo Gyan"
              className="w-48 opacity-80 mix-blend-multiply"
            />
          </div>
        </div>

        {/* Training Gallery */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Training in Action
          </h2>
          <p className="text-center text-slate-500 mb-12">
            Glimpses from our recent faculty development workshops
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 aspect-[4/3] bg-slate-100 border border-slate-200"
              >
                <img
                  src={src}
                  alt={`Training Session ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* QAID Grid */}
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white overflow-hidden relative">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-bold mb-4">QAID Oversight</h2>
            <p className="text-slate-400">
              Quality Assurance & Innovation Department Pillars
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <TrainingCard
              icon={BookOpen}
              title="Teacher Training"
              items={[
                "Enhancing teaching strategies",
                "Improving student outcomes",
                "Curriculum updates",
              ]}
            />
            <TrainingCard
              icon={Users}
              title="Student Development"
              items={[
                "Cognitive growth",
                "Emotional regulation",
                "Social responsibility",
              ]}
            />
            <TrainingCard
              icon={Target}
              title="Observation"
              items={[
                "Monitor progress",
                "Identify learning gaps",
                "Data-driven decisions",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrainingCard({ title, items, icon: Icon }) {
  return (
    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
      <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-6 text-blue-400">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-slate-300 text-sm"
          >
            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

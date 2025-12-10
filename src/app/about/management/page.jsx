"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import { useRef } from "react";

// Data extracted from the official website
const leaders = [
  {
    id: "trustee",
    name: "Mr. M.N. Sabharwal",
    role: "Secretary & Trustee, KES",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2024/01/M.N-Sabharwal.jpeg", // Fallback/Standard path
    quote: "Knowledge is the antidote to ignorance.",
    content: [
      "Welcome to the prestigious NLK Group of Schools, located in the city side of Kanpur. As a leader within this distinguished institution, I am honoured to guide the trajectory of our academic journey, poised to transform into a beacon of educational excellence for our region.",
      "The NLK Group of Schools not only upholds the rich legacy but also embodies the core values that have defined our group's identity. Taking a bold step towards making global education accessible to all, our institution is committed to providing informed and holistic education that empowers individuals from diverse backgrounds, opening doors to a world of possibilities.",
      "Our vision extends beyond the present, foreseeing a future where the NLK Group of Schools evolves dynamically, embracing modern educational paradigms while unwaveringly upholding timeless values.",
      "We are dedicated to nurturing the coming generations, fostering both academic brilliance and essential skills that will fortify them to confront and shape the challenges of the future. I extend heartfelt gratitude to the parents whose unwavering support fuels our collective mission, and to our dedicated staff members whose commitment is the backbone of this defining institution.",
      "Together, we embark on a journey to cultivate not just students but future leaders, ready to make a lasting impact on the world. Join us as we unfold the chapters of excellence and innovation at NLK Group of Schools.",
      "Jai Hind!",
    ],
  },
  {
    id: "director",
    name: "Dr. Abhishek Chaturvedi",
    role: "Director, NLK Group of Schools",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2025/04/DR.-ABHISHEK-CHATURVEDI-2025-2.jpg", // High quality source found
    quote:
      "Develop a passion for learning. If you do, you will never cease to grow.",
    content: [
      "The NLK Group of Schools has been fulfilling its mission of imparting education, moral values, and discipline to help build leaders who will bring about a culture of peace and love that our society needs today. We firmly believe in attaining excellence through a constant pursuit of knowledge and ensuring that the medium of instruction does not impede the learning as well as holistic development of our learners.",
      "Our aim is to bring about a metamorphosis in students, just like a cocoon turns into a butterfly. Through an innovative approach, we teach our students to face tough challenges in life by multiplying their strengths and reducing their weaknesses so that they can turn into smart and confident individuals with wings like butterflies, ready to explore and conquer the world.",
      "Year by year the efforts of our staff and students have taken the schools forward in terms of excellence. Our schools have progressed in leaps and bounds. We offer our students a stress-free learning environment which encourages critical thinking.",
      "At the NLK Group of Schools, we are dedicated to providing comprehensive quality learning. We are completely committed to a continuous process of improvement for the benefit of the students and are always open to refreshing views and suggestions. We will continue with the spirit of inculcating ethics and ethos in young minds with aplomb and ardour.",
      "I extend my heartiest congratulations and best wishes to the Principals, Teachers and Students of the Schools.",
    ],
  },
];

function LeaderSection({ data, index }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  // Alternating Layout
  const isEven = index % 2 === 0;

  return (
    <section ref={containerRef} className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col lg:flex-row gap-12 lg:gap-24 ${
            isEven ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Sticky Image Column */}
          <div className="lg:w-5/12 relative">
            <div className="sticky top-32">
              <motion.div style={{ opacity }} className="relative group">
                {/* Decorative Frame */}
                <div
                  className={`absolute inset-0 border-2 border-orange-500/30 rounded-[2.5rem] transform ${
                    isEven
                      ? "translate-x-4 translate-y-4"
                      : "-translate-x-4 translate-y-4"
                  } group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}
                />

                {/* Image Container */}
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"; // Professional Fallback
                    }}
                  />

                  {/* Name Badge Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-blue-950/90 to-transparent z-20">
                    <h2 className="text-3xl font-black text-white mb-1">
                      {data.name}
                    </h2>
                    <p className="text-orange-400 font-bold tracking-widest uppercase text-sm">
                      {data.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scrollable Content Column */}
          <div className="lg:w-7/12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Quote className="w-16 h-16 text-orange-200 mb-8" />

              {/* Pull Quote */}
              <h3 className="text-2xl md:text-4xl font-bold text-blue-950 leading-tight mb-10 italic">
                &quot;{data.quote}&quot;
              </h3>

              {/* Text Content */}
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                {data.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Signature Block */}
              <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-4">
                <div className="h-px w-12 bg-orange-500" />
                <span className="font-handwriting text-2xl text-slate-500">
                  {data.name}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Management() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <div className="relative h-[60vh] bg-blue-950 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-600/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 font-bold uppercase tracking-widest text-sm mb-6">
              <Sparkles className="w-4 h-4" /> Visionaries
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              Management Speaks
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 leading-relaxed">
              Guiding the trajectory of our academic journey with wisdom,
              innovation, and a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Leaders Loop */}
      <div className="pb-24 -mt-20">
        {leaders.map((leader, index) => (
          <LeaderSection key={leader.id} data={leader} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            Join our growing family
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-8">
            Be a part of an institution that teaches children how to think, not
            what to think.
          </p>
          <a
            href="/career"
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-xl shadow-blue-900/20"
          >
            Work with us
          </a>
        </div>
      </section>
    </div>
  );
}

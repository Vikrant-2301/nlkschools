"use client";
import { motion } from "framer-motion";

const associations = [
  {
    name: "StoryWeaver",
    logo: "https://www.nlkschools.org/wp-content/uploads/2024/04/storyweaver-logo.png",
    description:
      "StoryWeaver is a platform where people passionate about children's books and reading can collaborate. Educators, parents, publishers, writers, and illustrators browse through stories on StoryWeaver. A digital library of free children’s storybooks that enables every child to have open access to books in their own language.",
  },
  {
    name: "Creya XEL 2.0",
    logo: "https://www.nlkschools.org/wp-content/uploads/2021/02/creya-1.jpg",
    description:
      "Creya XEL 2.0, our STEM Learning Program is available for class 1 to 10 and helps young students build empathy to the world around them through the Design Thinking Framework. As they work on interdisciplinary projects cutting across Math, Science, Social Studies and ICT, they connect classroom theory to solving for real-world problems.",
  },
  {
    name: "Jodo Gyan",
    logo: "https://www.nlkschools.org/wp-content/uploads/2021/02/jodogyan-logo.png",
    description:
      "Jodo Gyan works to develop and implement innovative methods in mathematics and science education. These methods are based on a simple premise – that children learn when they are engaged in activities which are meaningful to them.",
  },
  {
    name: "Arpan",
    logo: "https://www.nlkschools.org/wp-content/uploads/2020/09/asso5-1.png",
    description:
      "Arpan provides direct services to children, adolescents and adults to prevent Child Sexual Abuse and appropriately deal with disclosures of children and adolescents through our flagship programme – Personal Safety Education. This programme caters to children and adolescents in schools, communities, NGOs, and institutions.",
  },
  {
    name: "tGELF",
    logo: "https://www.nlkschools.org/wp-content/uploads/2021/02/asso3-1.png",
    description:
      "The Global Education & Leadership Foundation (tGELF) is a non-profit that seeks to identify and nurture leadership skills in individuals who are rooted in the values of ethics and altruism, and have a bias for action.",
  },
  {
    name: "Words Worth",
    logo: "https://www.nlkschools.org/wp-content/uploads/2025/04/Wordsworth-Logo.png",
    description:
      "In today's world students and teachers need the flexibility of time and space to learn and grow. This can be acquired by smartly blending the benefits of technology and learning material. By providing world-class materials and a solid, easy-to-use framework for blended learning, Words Worth commits to ensure that the students study the right thing, more often, and with better results.",
  },
  {
    name: "Tarang Health Alliance",
    logo: "https://www.nlkschools.org/wp-content/uploads/2025/04/tarang.png",
    description:
      "At NLK, the Tarang Health Program promotes health awareness and empowers students to make informed choices about their physical and mental well-being. Through interactive learning, it fosters nutrition, hygiene, mental resilience, and emotional well-being, ensuring students develop lifelong healthy habits for a brighter future.",
  },
];

export default function Associations() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm"
          >
            Collaborations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-blue-950 mt-2"
          >
            Our Associations
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-1 bg-orange-500 mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {associations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group flex flex-col"
            >
              {/* Logo Area */}
              <div className="h-24 mb-8 flex items-center justify-start">
                <img
                  src={item.logo}
                  alt={`${item.name} Logo`}
                  className="max-h-full max-w-[180px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-blue-950 mb-4 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decoration */}
              <div className="mt-auto pt-6">
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-orange-400 to-blue-600 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

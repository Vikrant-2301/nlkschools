"use client";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const images = [
  "https://www.nlkschools.org/wp-content/uploads/2025/01/1.jpeg",
  "https://www.nlkschools.org/wp-content/uploads/2025/01/2.jpeg",
  "https://www.nlkschools.org/wp-content/uploads/2025/01/3.jpeg",
  "https://www.nlkschools.org/wp-content/uploads/2025/01/4.jpeg",
  "https://www.nlkschools.org/wp-content/uploads/2025/01/5.jpeg",
  "https://www.nlkschools.org/wp-content/uploads/2025/01/6.jpeg",
  "https://www.nlkschools.org/wp-content/uploads/2025/01/7.jpeg",
  "https://www.nlkschools.org/wp-content/uploads/2025/01/8.jpeg",
  "https://www.nlkschools.org/wp-content/uploads/2025/01/9.jpeg",
  "https://www.nlkschools.org/wp-content/uploads/2025/01/10.jpeg",
  "https://www.nlkschools.org/wp-content/uploads/2024/01/n1.jpg",
];

export default function MediaClippings() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="bg-orange-100 p-3 rounded-full mb-4">
            <Newspaper className="w-6 h-6 text-orange-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
            In The Media
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg">
            Celebrating our students achievements and school milestones featured
            in top publications.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              key={index}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={img}
                  alt={`Media Clipping ${index + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

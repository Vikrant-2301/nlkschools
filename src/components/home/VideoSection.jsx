"use client";
import { motion } from "framer-motion";
// FIX: Use the clean alias path now that jsconfig is created
import VideoPlayer from "../ui/video-thumbnail-player";

export default function VideoSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm"
          >
            Experience NLK
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-blue-950"
          >
            Life at Our Campus
          </motion.h2>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <VideoPlayer
            thumbnailUrl="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2604&auto=format&fit=crop"
            videoUrl="https://www.youtube.com/embed/ASyvSFMk8y0?autoplay=1"
            title="A Legacy of Excellence"
            description="Watch our students thrive in a world-class environment."
            className="aspect-video rounded-[2rem] shadow-2xl border-8 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
}

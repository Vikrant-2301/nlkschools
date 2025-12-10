"use client";
import NewsCard from "./NewsCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NewsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm">
              Latest Updates
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 mt-2">
              Campus Buzz
            </h2>
          </div>
          <Link
            href="/happenings"
            className="group flex items-center gap-2 text-blue-900 font-bold hover:text-orange-600 transition-colors"
          >
            View All News
            <span className="bg-blue-100 p-2 rounded-full group-hover:bg-orange-100 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <NewsCard
            tag="Event"
            title="Kathasangam: 75 Years Celebration"
            date="Dec 2024"
            desc="A mega annual event celebrating 75 years of excellence with art, culture, and stories."
          />
          <NewsCard
            tag="Sports"
            title="KhelTarang Sports Week"
            date="Nov 2024"
            desc="Celebrating sportsmanship with high-speed races and athletic prowess across all branches."
          />
          <NewsCard
            tag="Achievement"
            title="Vinshi Vaman Wins Gold"
            date="Oct 2024"
            desc="Our Grade VII student secured Gold in Kumite and Silver in Kata at the Rural National Games."
          />
        </div>
      </div>
    </section>
  );
}

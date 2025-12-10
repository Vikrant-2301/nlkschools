import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">Who We Are</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Shaping minds and building character since 1947. Explore our history,
          meet our visionary founders, and hear from our leadership.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link
            href="/about/founders"
            className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600">
              Our Founders
            </h3>
            <p className="text-slate-500 text-sm mb-4">
              The visionaries who started the movement.
            </p>
            <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-orange-500 mx-auto" />
          </Link>

          <Link
            href="/about/management"
            className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600">
              Management Speaks
            </h3>
            <p className="text-slate-500 text-sm mb-4">
              Messages from our Trustee and Principal.
            </p>
            <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-orange-500 mx-auto" />
          </Link>

          <Link
            href="/about/journey"
            className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600">
              Our Journey
            </h3>
            <p className="text-slate-500 text-sm mb-4">
              A timeline of our historic milestones.
            </p>
            <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-orange-500 mx-auto" />
          </Link>
        </div>
      </div>
    </div>
  );
}

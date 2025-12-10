"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Globe,
  Navigation,
  Search,
  School,
  ArrowRight,
} from "lucide-react";

const branches = [
  {
    year: "1980",
    name: "NLK Vidya Mandir",
    location: "Vishnupuri",
    address: "4/290 C, Vishnupuri, Kanpur",
    phone: "0512 - 3253544",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2020/09/nlkvm_inter_college_kanpur-250x302.jpg",
    map: "#",
    website: "#",
    tag: "Inter College",
  },
  {
    year: "2000",
    name: "Wendy High School",
    location: "Naramau",
    address: "6, Naramau, GT Road, Kanpur - 208016",
    phone: "0512 - 2570138",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2020/09/wendy_high_school-250x302.jpg",
    map: "#",
    website: "#",
    tag: "High School",
  },
  {
    year: "2006",
    name: "NLK Public School",
    location: "Azad Nagar",
    address: "3/239(2), Vishnupuri, Kanpur - 208002",
    phone: "0512 - 2562060",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2020/09/nlk_public_school-1-250x302.jpg",
    map: "#",
    website: "#",
    tag: "Public School",
  },
  {
    year: "2008",
    name: "NLK's Wendy School",
    location: "Khalasi Line",
    address: "10/492-A, Khalasi Line, Kanpur",
    phone: "+91 7499 155 393",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2020/09/nlk01245-1-250x302.jpg",
    map: "#",
    website: "#",
    tag: "Junior School",
  },
  {
    year: "2008",
    name: "NLK's Little Steps",
    location: "Jawahar Nagar",
    address: "110/62, Jawahar Nagar, Kanpur",
    phone: "0512 - 3013072",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2020/09/LS_new-250x302.jpg",
    map: "#",
    website: "#",
    tag: "Pre-Primary",
  },
  {
    year: "2014",
    name: "NLK Inter College",
    location: "Ashok Nagar",
    address: "111/333, Ashok Nagar, Kanpur - 208012",
    phone: "+91 9336 721 222",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2020/09/nlk_inter_college-250x302.jpg",
    map: "#",
    website: "#",
    tag: "Senior Secondary",
  },
  {
    year: "2016",
    name: "NLK's Disha",
    location: "Azad Nagar",
    address: "3A/161, Azad Nagar, Kanpur",
    phone: "+91 770 697 4724",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2020/09/disha-250x302.jpg",
    map: "#",
    website: "#",
    tag: "Special Education",
  },
  {
    year: "2020",
    name: "NLK Academy",
    location: "Mandhana",
    address: "Bhawanipur, Mandhana, Kanpur",
    phone: "+91 7311 139 261",
    image:
      "https://www.nlkschools.org/wp-content/uploads/2020/09/nlkacademy-250x302.jpg",
    map: "#",
    website: "#",
    tag: "Global Campus",
  },
];

export default function Branches() {
  const [filter, setFilter] = useState("");

  const filteredBranches = branches.filter((b) => {
    const term = filter.toLowerCase();
    return (
      b.name.toLowerCase().includes(term) ||
      b.location.toLowerCase().includes(term) ||
      b.tag.toLowerCase().includes(term)
    );
  });

  return (
    // Added pt-28 to push content below the fixed navbar
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 selection:bg-orange-200 selection:text-orange-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header & Search Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
              Our Campuses
            </h1>
            <p className="text-slate-500 text-lg">
              Explore our centers of excellence across Kanpur.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-96">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm"
                placeholder="Search by name, location..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-xs font-semibold text-slate-300 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  {filteredBranches.length} Results
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dense Grid Layout */}
        {filteredBranches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {filteredBranches.map((branch, index) => (
              <BranchCard key={branch.name} data={branch} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <School className="w-16 h-16 text-slate-200 mb-4" />
            <p className="text-slate-500 text-lg font-medium">
              No campuses found matching {filter}
            </p>
            <button
              onClick={() => setFilter("")}
              className="mt-4 text-orange-600 font-bold hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function BranchCard({ data, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full hover:border-orange-200"
    >
      {/* Image Area - Fixed Aspect Ratio */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
            Est. {data.year}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block bg-orange-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-2">
            {data.tag}
          </span>
          <h2 className="text-xl font-bold text-white leading-tight drop-shadow-md">
            {data.name}
          </h2>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Info Grid - Solves Blank Space */}
        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-4 mb-6">
          <div className="flex items-start justify-center pt-1">
            <MapPin className="w-5 h-5 text-slate-400" />
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">
              Location
            </span>
            <p className="text-sm font-medium text-slate-700 leading-snug">
              {data.address}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Phone className="w-5 h-5 text-slate-400" />
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">
              Contact
            </span>
            <p className="text-sm font-medium text-slate-700">{data.phone}</p>
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-auto pt-5 border-t border-slate-100 grid grid-cols-2 gap-3">
          <a
            href={data.map}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 text-slate-700 text-sm font-bold hover:bg-slate-100 hover:text-slate-900 transition-colors group/btn"
          >
            <Navigation className="w-4 h-4 text-slate-400 group-hover/btn:text-orange-500 transition-colors" />
            Directions
          </a>
          <a
            href={data.website}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 text-blue-700 text-sm font-bold hover:bg-blue-100 transition-colors group/btn"
          >
            <Globe className="w-4 h-4 text-blue-400 group-hover/btn:text-blue-600 transition-colors" />
            Website
          </a>
        </div>
      </div>
    </motion.div>
  );
}

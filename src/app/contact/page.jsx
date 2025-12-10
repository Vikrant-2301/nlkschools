"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowRight,
  Clock,
  School,
  Sparkles,
  ExternalLink,
} from "lucide-react";

// Branch Data Extracted from Official Website
const branches = [
  {
    name: "NLKVM Inter College",
    address: "4/290 C, Vishnupuri, Kanpur - 208002",
    phone: "0512 - 3253544",
    email: "nlkintercollegevishnupuri@gmail.com",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    name: "NLK's Little Steps",
    address: "110/62, Jawahar Nagar, Kanpur - 208012",
    phone: "0512 - 3013072",
    email: "nlkslittlesteps@gmail.com",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    name: "NLK Public School",
    address: "3/239(2), Vishnupuri, Kanpur - 208002",
    phone: "0512 - 2562060",
    email: "nlkpublicschoolazadnagar@gmail.com",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    name: "NLK's Wendy School",
    address: "10/492-A, Khalasi Line, Kanpur - 208001",
    phone: "+91 7499 155 393",
    email: "wendykhalasiline@gmail.com",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    name: "Wendy High School",
    address: "6, Naramau, GT Road, Kanpur - 208016",
    phone: "0512 - 2570138",
    email: "wendyhighschoolnaramau@gmail.com",
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    name: "NLK's Disha",
    address: "3A/161, Azad Nagar, Kanpur - 208001",
    phone: "+91 770 697 4724",
    email: "nlksdishaazadnagar@gmail.com",
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    name: "NLK Academy",
    address: "Bhawanipur, Mandhana, Kanpur",
    phone: "+91 7311 139 261",
    email: "contact@nlkacademy.com",
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] selection:bg-orange-100 selection:text-orange-900">
      {/* 1. HERO HEADER */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-orange-100/40 to-transparent rounded-bl-[100%] pointer-events-none" />
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Admissions Open 2025-26
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tight mb-6">
              Get in{" "}
              <span className="text-orange-500 italic font-serif">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Whether you have a question about admissions, academics, or just
              want to say hello, we are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* LEFT: HEAD OFFICE INFO (Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              {/* Head Office Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                <h2 className="text-2xl font-bold text-blue-950 mb-8 flex items-center gap-3 relative z-10">
                  <div className="p-3 bg-blue-950 text-white rounded-xl">
                    <School className="w-6 h-6" />
                  </div>
                  Head Office
                </h2>

                <div className="space-y-8 relative z-10">
                  <ContactItem
                    icon={MapPin}
                    label="Address"
                    value="111/333, Ashok Nagar, Kanpur - 208012"
                  />
                  <ContactItem
                    icon={Phone}
                    label="Phone"
                    value={
                      <div className="flex flex-col">
                        <span>+91 9336 721 222</span>
                        <span className="text-slate-400 text-sm mt-1">
                          Toll Free: 1800 891 3980
                        </span>
                      </div>
                    }
                  />
                  <ContactItem
                    icon={Mail}
                    label="Email"
                    value="nlkstaff@gmail.com"
                  />
                  <ContactItem
                    icon={Clock}
                    label="Hours"
                    value="Mon - Sat: 8:00 AM - 4:00 PM"
                  />
                </div>
              </motion.div>

              {/* Quick Help Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-blue-950 text-white rounded-[2rem] p-8 shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <Sparkles className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Need Admission Help?</h3>
                <p className="text-blue-200 text-sm mb-6">
                  Our counselors are available to guide you through the process.
                </p>
                <button className="w-full py-3 bg-white text-blue-950 font-bold rounded-xl hover:bg-orange-50 transition-colors">
                  Chat on WhatsApp
                </button>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-blue-950 mb-2">
                  Send us a Message
                </h2>
                <p className="text-slate-500">
                  Fill out the form below and we will get back to you within 24
                  hours.
                </p>
              </div>

              {formState === "success" ? (
                <div className="h-96 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 mb-8">
                    We have received your inquiry.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="text-orange-600 font-bold hover:underline"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField label="First Name" placeholder="Rahul" />
                    <InputField label="Last Name" placeholder="Sharma" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                      label="Email"
                      type="email"
                      placeholder="rahul@example.com"
                    />
                    <InputField
                      label="Phone"
                      type="tel"
                      placeholder="+91 99999 99999"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Message
                    </label>
                    <textarea
                      required
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all h-32 resize-none font-medium text-slate-700"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    disabled={formState === "submitting"}
                    className="group w-full py-4 bg-orange-600 text-white font-bold text-lg rounded-xl hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
                  >
                    {formState === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit Inquiry{" "}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. BRANCH DIRECTORY SECTION */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
              Our Network
            </span>
            <h2 className="text-4xl font-black text-blue-950 mt-2">
              Find a Campus Near You
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {branches.map((branch, idx) => (
              <BranchCard key={idx} data={branch} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// --- SUB COMPONENTS ---

function ContactItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-slate-400">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
          {label}
        </p>
        <div className="font-medium text-slate-700 leading-snug">{value}</div>
      </div>
    </div>
  );
}

function InputField({ label, type = "text", placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-slate-700 ml-1">{label}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium text-slate-700 placeholder:text-slate-400"
      />
    </div>
  );
}

function BranchCard({ data, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`p-6 rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-300 group ${data.color} hover:bg-white`}
    >
      <div
        className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm ${data.iconColor}`}
      >
        <School className="w-6 h-6" />
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">
        {data.name}
      </h3>

      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-3 text-slate-600">
          <MapPin className="w-4 h-4 shrink-0 mt-0.5 opacity-50" />
          <span className="leading-snug">{data.address}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <Phone className="w-4 h-4 shrink-0 opacity-50" />
          <span>{data.phone}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <Mail className="w-4 h-4 shrink-0 opacity-50" />
          <a
            href={`mailto:${data.email}`}
            className="truncate hover:text-orange-600 transition-colors"
          >
            {data.email}
          </a>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-black/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          View Map
        </span>
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-950 group-hover:text-white transition-all">
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

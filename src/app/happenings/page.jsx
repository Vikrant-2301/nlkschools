import { Calendar, FileText } from "lucide-react";

export default function Happenings() {
  const events = [
    {
      title: "Kathasangam",
      category: "Annual Fest",
      date: "Dec 2024",
      image: "bg-purple-100",
    },
    {
      title: "KhelTarang",
      category: "Sports Week",
      date: "Nov 2024",
      image: "bg-orange-100",
    },
    {
      title: "Investiture Ceremony",
      category: "Leadership",
      date: "Aug 2024",
      image: "bg-blue-100",
    },
  ];

  const newsletters = [
    "May 2025",
    "March 2025",
    "November 2024",
    "August 2024",
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-12">
          Happenings @ NLK
        </h1>

        {/* Events Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-orange-500" /> Recent Events
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((ev) => (
              <div key={ev.title} className="group cursor-pointer">
                <div
                  className={`aspect-video rounded-2xl ${ev.image} mb-4 overflow-hidden relative`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-500 mb-2">
                  {ev.category} • {ev.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {ev.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletters */}
        <div className="bg-slate-50 rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" /> Newsletters
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {newsletters.map((nl) => (
              <div
                key={nl}
                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold text-xs">
                  PDF
                </div>
                <span className="font-medium text-slate-700">{nl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

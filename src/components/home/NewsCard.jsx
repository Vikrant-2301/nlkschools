import { Calendar } from "lucide-react";

export default function NewsCard({ tag, title, date, desc }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {tag}
        </span>
        <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
      </div>
      <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-orange-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

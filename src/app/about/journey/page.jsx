export default function Journey() {
  const milestones = [
    {
      year: "1947",
      title: "The Beginning",
      desc: "Founded by Late Sri Hira Lal Khanna Ji with the Kanpur High School for Boys.",
    },
    {
      year: "1953",
      title: "Empowering Girls",
      desc: "Late Pushpa Khanna Ji established Kanpur High School for Girls.",
    },
    {
      year: "1987",
      title: "NLKVM Established",
      desc: "Started Shri Nand Lal Khanna Vidya Mandir at Vishnupuri with 7 students.",
    },
    {
      year: "2006",
      title: "Expansion",
      desc: "NLK Primary School and NLK Public School set up for rigorous academics.",
    },
    {
      year: "2020",
      title: "Future Ready",
      desc: "NLK Academy launched as a flagship K-12 campus at Mandhana.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-bold uppercase tracking-widest">
            Since 1947
          </span>
          <h1 className="text-5xl font-bold text-blue-900 mt-2">
            Our Historic Journey
          </h1>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2 text-center md:text-right px-4">
                  {index % 2 === 0 && (
                    <>
                      <span className="text-6xl font-black text-slate-100 absolute -z-10 -mt-10 -ml-10">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-blue-900">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 mt-2">{item.desc}</p>
                    </>
                  )}
                </div>

                <div className="w-12 h-12 rounded-full bg-orange-500 border-4 border-white shadow-xl flex items-center justify-center text-white font-bold shrink-0 z-10">
                  {index + 1}
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left px-4">
                  {index % 2 !== 0 && (
                    <>
                      <h3 className="text-2xl font-bold text-blue-900">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 mt-2">{item.desc}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

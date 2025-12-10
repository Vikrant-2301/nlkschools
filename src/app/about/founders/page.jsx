import Image from "next/image";

export default function Founders() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-wide uppercase">
            Our Roots
          </span>
          <h1 className="text-4xl font-bold text-blue-900 mt-2">
            Visionaries Behind NLK
          </h1>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {/* Founder 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 aspect-[3/4] bg-slate-200 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                Image: Hira Lal Khanna
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Late Shri Hira Lal Khanna Ji
              </h2>
              <p className="text-sm text-orange-500 font-bold mb-4">
                Founder (1889 - 1965)
              </p>
              <p className="text-slate-600 leading-relaxed">
                Founded the Kanpur Education Society and the NLK Group of
                Schools in 1947. An eminent educationalist and industrialist, he
                understood the critical importance of imparting quality
                education to the masses, laying the foundation for what NLK is
                today.
              </p>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/3 aspect-[3/4] bg-slate-200 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                Image: Nandlal Khanna
              </div>
            </div>
            <div className="w-full md:w-2/3 text-left md:text-right">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Late Shri Nandlal Khanna Ji
              </h2>
              <p className="text-sm text-orange-500 font-bold mb-4">
                1917 - 1985
              </p>
              <p className="text-slate-600 leading-relaxed">
                A firm believer that education is a lifelong process. He is
                fondly remembered for his deep concern for the underprivileged,
                providing numerous educational opportunities to deserving
                students who lacked financial means.
              </p>
            </div>
          </div>

          {/* Founder 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 aspect-[3/4] bg-slate-200 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                Image: Pushpa Khanna
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Smt. Pushpa Khanna Ji
              </h2>
              <p className="text-sm text-orange-500 font-bold mb-4">
                1925 - 2017
              </p>
              <p className="text-slate-600 leading-relaxed">
                A pioneer in women&apos;s education, she opened a Home Science
                Institute for women in Kanpur in the 1960s. In 1987, she started
                Shri Nandlal Khanna Vidya Mandir at Vishnupuri with just seven
                students, driving the group&apos;s expansion with her relentless
                energy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

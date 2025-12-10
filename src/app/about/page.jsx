import { Quote } from "lucide-react";

export default function Management() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-16">
          Leadership Perspectives
        </h1>

        <div className="space-y-20 max-w-5xl mx-auto">
          {/* Trustee Message */}
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>

            <Quote className="w-16 h-16 text-orange-200 mb-8" />

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              From the Trustee&apos;s Desk
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed relative z-10">
              <p>
                &quot;In this era of rapid change, NLK Group of Schools intends
                to contribute to the international goal by reviving the
                importance of Knowledge. I sincerely believe that knowledge, a
                critical mind, the capacity to understand and a sense of
                individual and collective responsibility are the antidotes to
                ignorance.&quot;
              </p>
              <p>
                Essentially, knowledge frees human beings. It is a profound
                source of power that encourages candid human interaction. Our
                institution is a conceptual space where ideas are nurtured and
                dreams take flight.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-400">
                IMG
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-900">
                  Mrs. Vina Sabharwal
                </h4>
                <p className="text-orange-600 font-medium">
                  Secretary & Trustee
                </p>
              </div>
            </div>
          </div>

          {/* Principal Message */}
          <div className="bg-blue-900 text-white rounded-[3rem] p-10 md:p-16 shadow-xl relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-800 rounded-tr-full -ml-20 -mb-20 opacity-50"></div>

            <h2 className="text-3xl font-bold mb-6">
              Principal&apos;s Message
            </h2>
            <div className="space-y-6 text-lg text-blue-100 leading-relaxed relative z-10">
              <p>
                &quot;Children are not things to be moulded but people to be
                unfolded. NLK&apos;s Wendy School is on a mission to identify,
                develop and promote the innate qualities of its students who
                will become useful citizens for the society and country.&quot;
              </p>
              <p>
                We always encourage our students to move beyond the confines of
                convention. The motto of NLK Group of Schools is &apos;to teach
                a child how to think, not what to think&apos;.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center font-bold text-blue-300">
                IMG
              </div>
              <div>
                <h4 className="font-bold text-xl">Ms. Fatima D&apos;silva</h4>
                <p className="text-orange-300 font-medium">
                  Principal, NLK&apos;s Wendy School
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

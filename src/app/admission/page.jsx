import {
  ClipboardCheck,
  Calendar,
  UserCheck,
  FileText,
  IndianRupee,
} from "lucide-react";

export default function Admission() {
  return (
    <div className="w-full">
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-blue-100">
            Join the NLK Family for the 2025-26 Academic Session
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            How to Apply
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Steps Timeline */}
            <div className="space-y-8">
              <AdmissionStep
                number="01"
                title="Registration & Visit"
                icon={<ClipboardCheck />}
                desc="Visit the school Front Office to collect the prospectus and admission form. You can also meet the coordinator to clear any queries."
              />
              <AdmissionStep
                number="02"
                title="Submission"
                icon={<FileText />}
                desc="Submit the completed admission form along with the required documents (Birth Certificate, Photos, Previous Report Cards) at the office."
              />
              <AdmissionStep
                number="03"
                title="Entrance Test"
                icon={<Calendar />}
                desc="An entrance test will be scheduled. For Nursery, it is an interaction. For higher grades, it covers English, Math, Hindi, and Science depending on the grade."
              />
              <AdmissionStep
                number="04"
                title="Interview"
                icon={<UserCheck />}
                desc="Selected candidates will be invited for a personal interaction with the Principal/Headmistress."
              />
              <AdmissionStep
                number="05"
                title="Confirmation & Fees"
                icon={<IndianRupee />}
                desc="Upon selection, an 'Admission Granted' slip is issued. Complete the fee payment to secure the seat."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Banner */}
      <section className="py-12 bg-orange-50 border-t border-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-orange-800 mb-3">
            Vinam Scholarship Program
          </h3>
          <p className="text-orange-700 max-w-2xl mx-auto mb-6">
            Meritorious students applying for Grade 11 can avail up to 6 months
            of fee waiver based on their 10th Board Examination performance (90%
            and above).
          </p>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-700 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

function AdmissionStep({ number, title, desc, icon }) {
  return (
    <div className="flex gap-6 md:gap-8 items-start">
      <div className="hidden md:flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xl border-2 border-blue-900">
          {number}
        </div>
        <div className="h-full w-0.5 bg-blue-100 my-2"></div>
      </div>
      <div className="flex-1 bg-slate-50 p-6 rounded-xl border border-slate-200">
        <div className="flex items-center gap-4 mb-3">
          <div className="md:hidden w-10 h-10 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-sm border border-blue-900">
            {number}
          </div>
          <div className="text-orange-500 [&>svg]:w-6 [&>svg]:h-6">{icon}</div>
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        </div>
        <p className="text-slate-600 text-sm md:text-base">{desc}</p>
      </div>
    </div>
  );
}

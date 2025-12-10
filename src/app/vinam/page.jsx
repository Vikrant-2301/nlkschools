import { Award } from "lucide-react";

export default function Vinam() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Award className="w-20 h-20 mx-auto mb-6 text-yellow-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vinam Scholarship Program
          </h1>
          <p className="text-xl text-yellow-100">
            Rewarding Academic Excellence
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg mx-auto text-slate-600">
          <p className="lead text-xl font-medium text-slate-800 mb-8 text-center">
            Meritorious students applying for Grade 11 can avail up to 6 months
            of fee waiver based on their 10th Board Examination performance.
          </p>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-blue-900 mb-6">
              Eligibility Criteria (Grade 10 Results)
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="font-bold text-2xl text-orange-500">95%</div>
                <div>
                  <span className="block font-bold text-slate-800">
                    Category 1
                  </span>
                  Above in Best 5 Subjects:{" "}
                  <span className="font-bold text-green-600">
                    6 Months Fee Waiver
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="font-bold text-2xl text-orange-500">92%</div>
                <div>
                  <span className="block font-bold text-slate-800">
                    Category 2
                  </span>
                  92% - 94.9%:{" "}
                  <span className="font-bold text-green-600">
                    2 Months Fee Waiver
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="font-bold text-2xl text-orange-500">90%</div>
                <div>
                  <span className="block font-bold text-slate-800">
                    Category 3
                  </span>
                  90% - 91.9%:{" "}
                  <span className="font-bold text-green-600">
                    1 Month Fee Waiver
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-sm text-slate-500 text-center">
            * Terms and conditions apply. Scholarship is applicable for the
            academic session 2025-26.
          </div>
        </div>
      </div>
    </div>
  );
}

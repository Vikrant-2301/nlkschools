import { Check, AlertCircle } from "lucide-react";

export default function Referral() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">
          NLK Staff Referral Program
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Objective</h2>
          <p className="text-slate-600 mb-6">
            To attract qualified applicants for teaching positions by rewarding
            current staff members who refer successful candidates.
          </p>

          <h3 className="font-bold text-slate-800 mb-3">Guidelines</h3>
          <ul className="space-y-3 mb-6">
            {[
              "Applicable for Preschool and Grade school teachers.",
              "Referral must be hired as full-time staff.",
              "Incentive paid after candidate completes 3-6 months of service.",
              "Send claim requests to hr.nlkgroup@gmail.com",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <Check className="w-5 h-5 text-green-500 shrink-0" /> {item}
              </li>
            ))}
          </ul>

          <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <p className="text-sm text-orange-800">
              Note: This policy is not valid for multi-tasking staff, front
              office, HR, branch heads, or finance department.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

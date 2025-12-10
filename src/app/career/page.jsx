export default function Career() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-slate-600 text-lg">
            We are looking for innovative, reflective, and hard-working
            educators committed to student-focused results.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Apply Now</h2>
          <form className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-slate-200"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-slate-200"
                placeholder="email@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Position Applied For
              </label>
              <select className="w-full p-3 rounded-lg border border-slate-200">
                <option>Teacher (PRT/TGT/PGT)</option>
                <option>Coordinator</option>
                <option>Admin Staff</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Resume Link
              </label>
              <input
                type="url"
                className="w-full p-3 rounded-lg border border-slate-200"
                placeholder="Google Drive / LinkedIn"
              />
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

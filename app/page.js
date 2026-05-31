export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Ramon Lerma
          </h1>

          <h2 className="text-xl text-gray-600 mb-4">
            Business Analyst | Project Coordinator | Operations Analyst
          </h2>

          <p className="text-gray-700">
            U.S. Air Force Veteran with experience in KPI reporting,
            forecasting, sales operations, process improvement,
            project coordination, and data analysis.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6">
          Featured Projects
        </h2>

        <div className="grid gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">
              Executive KPI Dashboard
            </h3>

            <p>
              Built dashboards using Verizon performance data
              to analyze quota attainment, revenue trends,
              and operational KPIs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">
              Sales Forecasting Model
            </h3>

            <p>
              Created forecasting models to project future
              performance and identify growth opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">
              Process Improvement Initiative
            </h3>

            <p>
              Developed recommendations to improve
              operational consistency and customer outcomes.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
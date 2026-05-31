export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      <section className="bg-blue-900 text-white p-12">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold mb-4">
            Ramon Lerma
          </h1>

          <h2 className="text-2xl mb-6">
            Business Analyst | Project Coordinator
          </h2>

          <p className="text-lg max-w-3xl">
            U.S. Air Force Veteran and Verizon professional
            leveraging data analysis, KPI reporting,
            forecasting, process improvement, and project
            coordination to drive measurable business outcomes.
          </p>

        </div>
      </section>

      <section className="max-w-5xl mx-auto p-8">

        <div className="bg-white p-8 rounded-xl shadow mb-8">

          <h2 className="text-3xl font-bold mb-4">
            About Me
          </h2>

          <p>
            I am an Air Force veteran currently working at
            Verizon where I analyze performance metrics,
            identify trends, improve operational processes,
            and support business performance through
            data-driven decision making.
          </p>

        </div>

        <div className="bg-white p-8 rounded-xl shadow mb-8">

          <h2 className="text-3xl font-bold mb-4">
            Core Skills
          </h2>

          <ul className="list-disc ml-6">
            <li>Business Analysis</li>
            <li>KPI Reporting</li>
            <li>Excel & Pivot Tables</li>
            <li>Project Coordination</li>
            <li>Process Improvement</li>
            <li>Forecasting</li>
            <li>Stakeholder Communication</li>
          </ul>

        </div>

        <div className="bg-white p-8 rounded-xl shadow mb-8">

          <h2 className="text-3xl font-bold mb-4">
            Featured Projects
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-bold">
              Executive KPI Dashboard
            </h3>

            <p>
              Created an executive dashboard using Verizon
              performance data to track quota attainment,
              revenue trends, and operational performance.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold">
              Sales Forecasting Model
            </h3>

            <p>
              Built forecasting models to identify trends,
              predict future performance, and support
              business planning decisions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">
              Process Improvement Initiative
            </h3>

            <p>
              Developed recommendations to improve
              consistency, customer outcomes, and
              operational efficiency.
            </p>
          </div>

        </div>

        <div className="bg-white p-8 rounded-xl shadow">

          <h2 className="text-3xl font-bold mb-4">
            Career Goal
          </h2>

          <p>
            Transition into Business Analyst and Project
            Coordinator roles where I can leverage data,
            leadership, and analytical problem solving to
            improve organizational performance.
          </p>

        </div>

      </section>

    </main>
  );
}
export default function PortfolioPage() {
  const projects = [
    {
      title: "Executive KPI Dashboard",
      description:
        "Built an executive sales operations dashboard using 2025 Verizon performance data to analyze quota attainment, revenue trends, product performance, and operational KPIs.",
      skills: [
        "Excel",
        "KPI Reporting",
        "Data Analysis",
        "Dashboard Creation",
        "Sales Operations",
      ],
      highlights: [
        "Tracked monthly quota attainment and revenue performance",
        "Analyzed product attachment trends and operational KPIs",
        "Created executive-level charts and performance visuals",
      ],
    },
    {
      title: "Sales Forecasting & Trend Analysis",
      description:
        "Developed a forecasting model using historical sales performance metrics to predict future revenue opportunities and identify operational trends.",
      skills: [
        "Forecasting",
        "Trend Analysis",
        "Operational Planning",
        "Excel Modeling",
      ],
      highlights: [
        "Forecasted monthly sales performance",
        "Identified growth opportunities through trend analysis",
        "Compared actual vs projected performance metrics",
      ],
    },
    {
      title: "Operational Process Improvement Initiative",
      description:
        "Performed process improvement analysis focused on improving attachment rates, operational consistency, and customer engagement workflows.",
      skills: [
        "Process Improvement",
        "Project Management",
        "Root Cause Analysis",
        "Operational Strategy",
      ],
      highlights: [
        "Created operational improvement recommendations",
        "Performed root cause analysis on KPI inconsistencies",
        "Designed implementation timeline and success metrics",
      ],
    },
  ];

  const skills = [
    "Business Analysis",
    "Project Coordination",
    "Sales Operations",
    "KPI Reporting",
    "Excel Dashboards",
    "Forecast Modeling",
    "Process Improvement",
    "Stakeholder Communication",
    "Operational Analysis",
    "Trend Analysis",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <p className="text-sky-400 uppercase tracking-[0.3em] text-sm mb-3">
            Portfolio
          </p>

          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Ramon Lerma
          </h1>

          <p className="text-slate-300 text-xl max-w-3xl leading-relaxed">
            Operations-focused analytical professional building projects in
            business analysis, sales operations, KPI reporting, forecasting,
            and project coordination using real-world performance data.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <p className="text-slate-300 leading-relaxed text-lg">
              I specialize in analyzing operational performance data and
              transforming metrics into actionable business insights. My
              portfolio projects focus on KPI reporting, operational planning,
              forecasting, dashboard development, and process improvement.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-slate-200 hover:border-sky-500 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Portfolio Projects</h2>

          <div className="grid gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-sky-400">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg">Key Highlights</h4>

                  <ul className="space-y-2 text-slate-300">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="text-sky-400">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-sky-500/10 border border-sky-500/30 text-sky-300 px-4 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Tools & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Excel",
              "Power BI",
              "Salesforce",
              "ServiceNow",
              "Jira",
              "Confluence",
              "PivotTables",
              "Forecast Modeling",
              "KPI Reporting",
              "Dashboard Analytics",
            ].map((tool) => (
              <div
                key={tool}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center"
              >
                {tool}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-10 text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Open to Business Analyst & Project Coordinator Opportunities
            </h2>

            <p className="text-slate-100 text-lg max-w-2xl mx-auto mb-6">
              Interested in opportunities involving operations analysis,
              project coordination, KPI reporting, sales operations, and
              business process improvement.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
                Connect on LinkedIn
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition">
                View Resume
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

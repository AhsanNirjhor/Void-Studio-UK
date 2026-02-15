const caseStudies = [
  {
    tag: "Financial Technology",
    title: "FinTech SaaS Platform",
    description:
      "Built a B2B SaaS platform that streamlined financial workflows for SMEs, reducing processing time by 70%.",
    stats: [
      { value: "+350%", label: "User Growth" },
      { value: "£960K ARR", label: "Revenue" },
      { value: "+85%", label: "Engagement" },
    ],
  },
  {
    tag: "Healthcare",
    title: "HealthTech Mobile App",
    description:
      "Designed and launched a telemedicine app connecting patients with specialists, serving 10k+ users.",
    stats: [
      { value: "10K+", label: "Active Users" },
      { value: "92%", label: "Retention" },
      { value: "4.9★", label: "Store Rating" },
    ],
  },
  {
    tag: "Retail Technology",
    title: "E-commerce Platform",
    description:
      "Created a headless e-commerce solution with AI-powered recommendations, boosting conversions by 120%.",
    stats: [
      { value: "+120%", label: "Conversion" },
      { value: "£640K MRR", label: "Revenue" },
      { value: "25K+", label: "Customers" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section
      id="projects"
      className="bg-[#0f1627] py-20 text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-3 text-sm text-white/70 sm:text-base">
            Real results from real partnerships
          </p>
        </div>
        <div className="mt-10 space-y-8">
          {caseStudies.map((item, index) => (
            <div
              key={item.title}
              className="grid items-center gap-8 rounded-3xl border border-white/10 bg-[#141c31] p-8 md:grid-cols-[1.1fr_1fr]"
            >
              <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                <span className="inline-flex rounded-full bg-[#7c4dff] px-3 py-1 text-xs font-semibold">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">
                  {item.description}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-white/70">
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-lg font-semibold text-[#b68cff]">
                        {stat.value}
                      </div>
                      <div className="text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white">
                  View Case Study
                  <span>→</span>
                </button>
              </div>
              <div
                className={`h-64 w-full rounded-2xl ${
                  index === 1
                    ? "bg-[url('/window.svg')] bg-cover"
                    : "bg-gradient-to-br from-[#d0c8ff] via-[#a38bff] to-[#f1b4ff]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

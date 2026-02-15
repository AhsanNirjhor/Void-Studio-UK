const checks = [
  "Market viability analysis",
  "Competitive landscape review",
  "Technical feasibility assessment",
  "Revenue model recommendations",
  "Go-to-market strategy",
];

const scores = [
  { label: "Market Opportunity", value: 92 },
  { label: "Technical Feasibility", value: 88 },
  { label: "Competitive Advantage", value: 85 },
  { label: "Revenue Potential", value: 90 },
];

export default function Validator() {
  return (
    <section id="validator" className="bg-[#6b19ff]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 rounded-3xl bg-gradient-to-br from-[#7a1dff] via-[#9a33ff] to-[#f85abd] p-10 text-white md:grid-cols-[1.1fr_1fr]">
          <div className="reveal reveal-left" data-reveal>
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold">
              Free Startup Validator Tool
            </span>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Validate Your <span className="text-[#ffdf4f]">Startup Idea</span>
            </h2>
            <p className="mt-4 text-sm text-white/80 sm:text-base">
              Get expert feedback on your startup concept before investing
              months of development. Our AI-powered validator analyzes your idea
              across multiple dimensions.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/90">
              {checks.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/60">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#7a1dff]">
                Start Free Evaluation
              </button>
              <button className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white">
                Learn Our Process
              </button>
            </div>
          </div>
          <div
            className="relative rounded-3xl bg-white/15 p-6 backdrop-blur reveal reveal-right"
            data-reveal
          >
            <div className="absolute right-4 top-4 rounded-full bg-[#ffdf4f] px-4 py-1 text-xs font-semibold text-[#7a1dff]">
              100% Free
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffdf4f] text-[#7a1dff]">
                ✨
              </span>
              <div>
                <div className="text-xs uppercase text-white/60">
                  Idea Validator
                </div>
                <div className="text-lg font-semibold">Analysis Report</div>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm">
              {scores.map((score) => (
                <div key={score.label}>
                  <div className="flex items-center justify-between text-white/80">
                    <span>{score.label}</span>
                    <span>{score.value}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/20">
                    <div
                      className="h-full rounded-full bg-[#ffdf4f]"
                      style={{ width: `${score.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <div className="text-xs uppercase text-white/70">
                Overall Score
              </div>
              <div className="text-4xl font-semibold text-[#ffdf4f]">
                89/100
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

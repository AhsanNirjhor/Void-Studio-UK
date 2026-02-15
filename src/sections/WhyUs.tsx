const reasons = [
  {
    title: "Rapid Execution",
    description: "From concept to launch in weeks, not months.",
  },
  {
    title: "Risk Mitigation",
    description: "Validated approach that minimizes wasted resources.",
  },
  {
    title: "Agile & Flexible",
    description: "Adapt quickly to market feedback and changing needs.",
  },
  {
    title: "Startup DNA",
    description: "We think like founders because we are founders.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#f7f4ff]">
      <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal reveal-left" data-reveal>
            <h2 className="text-3xl font-semibold text-[#12141b] sm:text-4xl">
              Why Choose <span className="text-[#6c39ff]">Void Studio?</span>
            </h2>
            <p className="mt-4 text-sm text-[#667085] sm:text-base">
              We&apos;re not just another agency. We&apos;re your strategic
              partner in building products that matter.
            </p>
            <div className="mt-8 space-y-4">
              {reasons.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white p-5 shadow-[0_16px_28px_rgba(15,23,42,0.08)]"
                >
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-[#efe9ff] text-[#6c39ff]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                      <path
                        d="M12 2l8 4v6c0 5-3.5 9.4-8 10-4.5-0.6-8-5-8-10V6l8-4z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1d1f29]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#667085]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal reveal-right" data-reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3b357a] via-[#4a3a9c] to-[#7a55ff] p-6 shadow-[0_20px_40px_rgba(15,23,42,0.18)]">
              <div className="absolute right-4 top-4 rounded-2xl bg-white/90 px-4 py-3 text-center text-sm font-semibold text-[#6c39ff]">
                £2M+
                <div className="text-xs font-medium text-[#667085]">
                  Funding Raised
                </div>
              </div>
              <div className="flex h-72 items-end justify-end">
                <div className="w-full rounded-2xl bg-white/15 p-5 text-white">
                  <div className="text-lg font-semibold">
                    Trusted delivery teams
                  </div>
                  <p className="mt-2 text-sm text-white/75">
                    We build cross-functional squads to help founders move with
                    clarity, speed, and confidence.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-[#6c39ff]">
                12 Weeks
                <div className="text-xs font-medium text-[#667085]">
                  Avg. Time to Launch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

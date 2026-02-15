export default function Home() {
  const navItems = [
    "How It Works",
    "Services",
    "Why Us",
    "Projects",
    "Validator",
    "Contact",
  ];

  const services = [
    {
      title: "Product Strategy",
      description:
        "Transform your vision into actionable roadmaps with market validation and user research.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path
            d="M12 3v18M3 12h18M7 7l10 10M7 17L17 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "UX/UI Design",
      description:
        "Create stunning, user-centered designs that drive engagement and conversion.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path
            d="M5 12h14M12 5v14M7 7l10 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Full-Stack Development",
      description:
        "Build scalable, performant applications with modern tech stacks and best practices.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path
            d="M7 7h10v10H7zM4 4h16v16H4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "MVP Development",
      description:
        "Launch faster with lean, validated MVPs that test your core assumptions.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path
            d="M12 2l8 6v8l-8 6-8-6V8l8-6z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Product Growth",
      description:
        "Scale your product with data-driven optimization and user acquisition strategies.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path
            d="M4 17l6-6 4 4 6-8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M20 6v6h-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Launch Support",
      description:
        "Go to market with confidence through strategic launch planning and execution.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path
            d="M12 2l4 8-4 12-4-12 4-8z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ff] text-[#101828]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-24 h-[480px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(141,86,255,0.28),rgba(141,86,255,0))] blur-[10px]" />
        <div className="pointer-events-none absolute right-[-10%] top-[480px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,136,230,0.22),rgba(255,136,230,0))] blur-[10px]" />
        <header className="sticky top-0 z-30 border-b border-white/40 bg-[#f7f4ff]/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <div className="text-lg font-semibold text-[#4f2de1]">
              Void Studio
            </div>
            <nav className="hidden items-center gap-8 text-sm font-medium text-[#475467] md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="transition-colors hover:text-[#4f2de1]"
                >
                  {item}
                </a>
              ))}
            </nav>
            <button className="rounded-full bg-gradient-to-r from-[#6c39ff] to-[#8a3bff] px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(108,57,255,0.35)]">
              Get Started
            </button>
          </div>
        </header>

        <main>
          <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-16 pt-20 text-center md:pt-28">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#4f2de1] shadow-[0_12px_24px_rgba(30,41,59,0.08)]">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#efe9ff]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-[#6c39ff]"
                  fill="currentColor"
                >
                  <path d="M12 2l2.9 6.2L22 9l-5 4.9L18.2 22 12 18.3 5.8 22 7 13.9 2 9l7.1-0.8L12 2z" />
                </svg>
              </span>
              Trusted by 50+ Startups
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#141821] sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-[#6c39ff] to-[#b14bff] bg-clip-text text-transparent">
                Empowering Startups
              </span>{" "}
              to Build Validated Digital Products
            </h1>
            <p className="mt-6 max-w-2xl text-base text-[#4b5565] sm:text-lg">
              We partner with early-stage startups and SMEs to transform ideas
              into market-ready digital experiences through strategic design and
              development.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6c39ff] to-[#8a3bff] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_32px_rgba(108,57,255,0.35)]">
                See How It Works
                <span className="text-lg">→</span>
              </button>
              <button className="rounded-full border border-white/60 bg-white px-7 py-3 text-sm font-semibold text-[#344054] shadow-[0_14px_28px_rgba(15,23,42,0.08)]">
                Contact Us
              </button>
            </div>
            <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-6 text-center sm:grid-cols-3">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "98%", label: "Success Rate" },
                { value: "95%", label: "Client Retention" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/70 py-4">
                  <div className="text-2xl font-semibold text-[#6c39ff]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#667085]">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex h-12 w-8 items-center justify-center rounded-full border border-[#d0d5dd] bg-white/70 text-[#667085] shadow-[0_12px_20px_rgba(15,23,42,0.08)]">
              <div className="h-3 w-1.5 rounded-full bg-[#c7c1ff]" />
            </div>
          </section>

          <section
            id="services"
            className="mx-auto w-full max-w-6xl px-6 pb-24 pt-6"
          >
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-[#1d1f29] sm:text-4xl">
                What We Do
              </h2>
              <p className="mt-3 text-sm text-[#667085] sm:text-base">
                End-to-end digital product services tailored for startups and
                SMEs
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/70 bg-white p-6 shadow-[0_18px_30px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6c39ff] to-[#ff4fd8] text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1d1f29]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#667085]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="why-us" className="mx-auto w-full max-w-6xl px-6 pb-28">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold text-[#12141b] sm:text-4xl">
                  Why Choose{" "}
                  <span className="text-[#6c39ff]">Void Studio?</span>
                </h2>
                <p className="mt-4 text-sm text-[#667085] sm:text-base">
                  We&apos;re not just another agency. We&apos;re your strategic
                  partner in building products that matter.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    {
                      title: "Rapid Execution",
                      description:
                        "From concept to launch in weeks, not months.",
                    },
                    {
                      title: "Risk Mitigation",
                      description:
                        "Validated approach that minimizes wasted resources.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white p-5 shadow-[0_16px_28px_rgba(15,23,42,0.08)]"
                    >
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-[#efe9ff] text-[#6c39ff]">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="none"
                        >
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
              <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-[#2e2c63] via-[#3c357a] to-[#6c39ff] p-6 shadow-[0_20px_40px_rgba(15,23,42,0.18)]">
                <div className="absolute right-4 top-4 rounded-2xl bg-white/90 px-4 py-3 text-center text-sm font-semibold text-[#6c39ff]">
                  £2M+
                  <div className="text-xs font-medium text-[#667085]">
                    Funding Raised
                  </div>
                </div>
                <div className="flex h-full flex-col items-start justify-end">
                  <div className="rounded-2xl bg-white/10 p-6 text-white">
                    <div className="text-lg font-semibold">
                      Trusted delivery teams
                    </div>
                    <p className="mt-2 text-sm text-white/70">
                      We build cross-functional squads to help founders move
                      with clarity, speed, and confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

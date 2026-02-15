const services = [
  {
    title: "Product Strategy",
    description:
      "Transform your vision into actionable roadmaps with market validation and user research.",
  },
  {
    title: "UX/UI Design",
    description:
      "Create stunning, user-centered designs that drive engagement and conversion.",
  },
  {
    title: "Full-Stack Development",
    description:
      "Build scalable, performant applications with modern tech stacks and best practices.",
  },
  {
    title: "MVP Development",
    description:
      "Launch faster with lean, validated MVPs that test your core assumptions.",
  },
  {
    title: "Product Growth",
    description:
      "Scale your product with data-driven optimization and user acquisition strategies.",
  },
  {
    title: "Launch Support",
    description:
      "Go to market with confidence through strategic launch planning and execution.",
  },
];

const serviceIcons = [
  "M12 3v18M3 12h18M7 7l10 10M7 17L17 7",
  "M5 12h14M12 5v14M7 7l10 10",
  "M7 7h10v10H7zM4 4h16v16H4z",
  "M12 2l8 6v8l-8 6-8-6V8l8-6z",
  "M4 17l6-6 4 4 6-8",
  "M12 2l4 8-4 12-4-12 4-8z",
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto w-full max-w-6xl px-6 pb-24 pt-6"
    >
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-[#1d1f29] sm:text-4xl">
          What We Do
        </h2>
        <p className="mt-3 text-sm text-[#667085] sm:text-base">
          End-to-end digital product services tailored for startups and SMEs
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="rounded-3xl border border-white/70 bg-white p-6 shadow-[0_18px_30px_rgba(15,23,42,0.08)]"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6c39ff] to-[#ff4fd8] text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                <path
                  d={serviceIcons[index]}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
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
  );
}

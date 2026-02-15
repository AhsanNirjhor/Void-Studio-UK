export default function Hero() {
  return (
    <section
      id="how-it-works"
      className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-16 pt-20 text-center md:pt-28"
    >
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
        We partner with early-stage startups and SMEs to transform ideas into
        market-ready digital experiences through strategic design and
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
  );
}

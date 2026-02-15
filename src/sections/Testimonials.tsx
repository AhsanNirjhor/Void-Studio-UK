const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO at FinFlow",
    quote:
      "Void Studio transformed our rough idea into a fully functional MVP in just 8 weeks. Their strategic approach helped us secure seed funding.",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO at HealthHub",
    quote:
      "The team's technical expertise and startup mindset made all the difference. They didn't just build what we asked for—they built what we needed.",
  },
  {
    name: "Emily Watson",
    role: "Product Lead at ShopSmart",
    quote:
      "Working with Void Studio felt like having a co-founder who truly cares about your success. The results speak for themselves—120% conversion increase.",
  },
];

const stats = [
  { value: "4.9/5.0", label: "Average Rating" },
  { value: "50+", label: "Happy Clients" },
  { value: "£10M+", label: "Funding Raised" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f7f4ff] py-20">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#6c39ff] sm:text-4xl">
          What Founders Say
        </h2>
        <p className="mt-3 text-sm text-[#667085] sm:text-base">
          Don&apos;t just take our word for it—hear from the founders we&apos;ve
          partnered with
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="relative rounded-3xl border border-white/70 bg-white p-7 text-left shadow-[0_18px_30px_rgba(15,23,42,0.08)]"
            >
              <div className="absolute -left-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#6c39ff] text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M9.6 6.4c-2.4 0.8-4 3-4 5.6 0 2.2 1.4 3.6 3.4 3.6 1.8 0 3.2-1.2 3.2-3 0-1.4-0.8-2.5-2-2.9 0.4-1.3 1.4-2.3 2.7-2.8L9.6 6.4zm7.6 0c-2.4 0.8-4 3-4 5.6 0 2.2 1.4 3.6 3.4 3.6 1.8 0 3.2-1.2 3.2-3 0-1.4-0.8-2.5-2-2.9 0.4-1.3 1.4-2.3 2.7-2.8l-1.3-1.5z" />
                </svg>
              </div>
              <div className="flex items-center gap-1 text-[#f4b000]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={`${item.name}-${index}`}
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 2l2.9 6.2L22 9l-5 4.9L18.2 22 12 18.3 5.8 22 7 13.9 2 9l7.1-0.8L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm text-[#667085]">{item.quote}</p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#6c39ff] to-[#ff8bd4]" />
                <div>
                  <div className="font-semibold text-[#1d1f29]">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#667085]">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-4 rounded-3xl border border-white/70 bg-white px-6 py-5 text-left shadow-[0_18px_30px_rgba(15,23,42,0.08)] sm:grid-cols-3 sm:text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-2 ${index < stats.length - 1 ? "sm:border-r sm:border-[#e4e7ec]" : ""}`}
            >
              <div className="text-2xl font-semibold text-[#6c39ff]">
                {stat.value}
              </div>
              <div className="text-xs text-[#667085]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

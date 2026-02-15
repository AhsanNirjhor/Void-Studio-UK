const infoItems = [
  {
    title: "Email",
    detail: "hello@voidstudio.com",
  },
  {
    title: "Schedule a Call",
    detail: "Book a free consultation",
  },
  {
    title: "Location",
    detail: "London, United Kingdom",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#141a36] py-20 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Let&apos;s Build{" "}
            <span className="bg-gradient-to-r from-[#9f9bff] to-[#ff7adf] bg-clip-text text-transparent">
              Something Great
            </span>
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Have a startup idea or need help scaling your product? Let&apos;s
            talk about how we can help you succeed.
          </p>
          <div className="mt-8 space-y-4">
            {infoItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl bg-white/5 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-white"
                    fill="none"
                  >
                    <path
                      d="M5 12h14M12 5v14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">{item.title}</div>
                  <div className="text-xs text-white/70">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white/10 p-6 shadow-[0_20px_40px_rgba(10,14,30,0.45)]">
          <form className="space-y-5">
            <div>
              <label className="text-xs text-white/70">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-white/70">Email Address</label>
              <input
                type="email"
                placeholder="john@company.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-white/70">Company (Optional)</label>
              <input
                type="text"
                placeholder="Your Company"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-white/70">
                Tell Us About Your Project
              </label>
              <textarea
                rows={4}
                placeholder="I have a startup idea about..."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-gradient-to-r from-[#6c39ff] to-[#ff7adf] px-6 py-3 text-sm font-semibold text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

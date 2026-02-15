export default function Footer() {
  return (
    <footer className="bg-[#1b2141] text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <div className="text-lg font-semibold text-[#9f9bff]">
              Void Studio
            </div>
            <p className="mt-3 text-sm text-white/70">
              Empowering startups and SMEs to build validated digital products
              that drive real business results.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["t", "in", "ig", "mail"].map((item) => (
                <div
                  key={item}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-8 text-sm text-white/75 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="font-semibold text-white">Services</div>
              <ul className="mt-3 space-y-2">
                <li>Product Strategy</li>
                <li>UX/UI Design</li>
                <li>Development</li>
                <li>MVP Launch</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white">Company</div>
              <ul className="mt-3 space-y-2">
                <li>About Us</li>
                <li>How It Works</li>
                <li>Case Studies</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white">Resources</div>
              <ul className="mt-3 space-y-2">
                <li>Blog</li>
                <li>Startup Guide</li>
                <li>Idea Validator</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white">Legal</div>
              <ul className="mt-3 space-y-2">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 rounded-3xl bg-[#242c52] px-6 py-8 text-center">
          <div className="text-xl font-semibold">Stay Updated</div>
          <p className="mt-2 text-sm text-white/70">
            Get the latest insights on product development and startup growth
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-md rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
            <button className="rounded-2xl bg-gradient-to-r from-[#6c39ff] to-[#8a3bff] px-6 py-3 text-sm font-semibold text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

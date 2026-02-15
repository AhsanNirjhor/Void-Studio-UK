const navItems = [
  "How It Works",
  "Services",
  "Why Us",
  "Projects",
  "Validator",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-white/50 bg-[#f7f4ff]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="text-xl font-bold text-[#4f2de1]">Void Studio</div>
        <nav className="hidden items-center gap-8 text-base font-semibold text-[#475467] md:flex">
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
        <button className="rounded-full bg-gradient-to-r from-[#6c39ff] to-[#8a3bff] px-6 py-2.5 text-base font-semibold text-white shadow-[0_8px_24px_rgba(108,57,255,0.35)]">
          Get Started
        </button>
      </div>
    </header>
  );
}

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
    <header className="sticky top-0 z-30 border-b border-white/40 bg-[#f7f4ff]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold text-[#4f2de1]">Void Studio</div>
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
  );
}

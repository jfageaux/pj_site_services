const QUOTE_HREF =
  "mailto:johnnyfageaux@gmail.com?subject=PJ%20Site%20Services%20Quote%20Request";

export default function Header() {
  return (
    <header className="bg-[#1c2b3a] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-xl font-bold tracking-wide text-[#e8813a]">
          PJ Site Services
        </span>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-[#e8813a] transition-colors">
            Services
          </a>
          <a href="#why-pj" className="hover:text-[#e8813a] transition-colors">
            Why PJ
          </a>
          <a href="#service-area" className="hover:text-[#e8813a] transition-colors">
            Service Area
          </a>
          <a
            href={QUOTE_HREF}
            className="bg-[#e8813a] text-white px-4 py-2 rounded hover:bg-[#d0712b] transition-colors font-semibold"
          >
            Request a Quote
          </a>
        </nav>
        <a
          href={QUOTE_HREF}
          className="md:hidden bg-[#e8813a] text-white px-3 py-2 rounded text-sm font-semibold hover:bg-[#d0712b] transition-colors"
        >
          Get Quote
        </a>
      </div>
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#111e2a] text-gray-400 py-10 px-4 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg mb-2">PJ Site Services</p>
            <p className="text-sm max-w-xs leading-relaxed">
              Storage, cleaning, pressure washing, fleet washing, landscaping,
              irrigation, and site support for the High Desert.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#service-area" className="hover:text-white transition-colors">
              Service Area
            </a>
            <a
              href="mailto:johnnyfageaux@gmail.com?subject=PJ%20Site%20Services%20Quote%20Request"
              className="hover:text-white transition-colors"
            >
              Request Quote
            </a>
            <a href="/partner" className="hover:text-white transition-colors">
              Partner Concept
            </a>
          </nav>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-xs text-gray-600">
          © {new Date().getFullYear()} PJ Site Services. High Desert, CA.
        </div>
      </div>
    </footer>
  );
}

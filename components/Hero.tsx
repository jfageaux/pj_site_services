const QUOTE_HREF =
  "mailto:johnnyfageaux@gmail.com?subject=PJ%20Site%20Services%20Quote%20Request";

export default function Hero() {
  return (
    <section className="bg-[#1c2b3a] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Storage, Cleaning, and Site Services
          <br />
          <span className="text-[#e8813a]">for LA, OC & the High Desert</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          PJ Site Services helps property owners, contractors, fleet operators,
          port and logistics companies, boat/RV owners, and commercial sites
          keep their space clean, organized, maintained, and ready to work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={QUOTE_HREF}
            className="bg-[#e8813a] text-white px-8 py-3 rounded font-semibold text-lg hover:bg-[#d0712b] transition-colors"
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="border border-white text-white px-8 py-3 rounded font-semibold text-lg hover:bg-white hover:text-[#1c2b3a] transition-colors"
          >
            View Services
          </a>
        </div>
        <p className="text-sm text-gray-400">
          Serving Southern California — from Long Beach and the Port to the High Desert.
        </p>
      </div>
    </section>
  );
}

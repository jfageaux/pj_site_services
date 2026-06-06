const QUOTE_HREF =
  "mailto:johnnyfageaux@gmail.com?subject=PJ%20Site%20Services%20Quote%20Request";

export default function CTASection() {
  return (
    <section className="bg-[#e8813a] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Need storage, cleaning, washing, or site maintenance?
        </h2>
        <p className="text-orange-100 mb-8 text-lg">
          Tell us what you need, where the site is located, and how often you
          need service. We'll follow up with next steps.
        </p>
        <a
          href={QUOTE_HREF}
          className="inline-block bg-white text-[#e8813a] px-8 py-3 rounded font-bold text-lg hover:bg-orange-50 transition-colors mb-6"
        >
          Request a Quote
        </a>
        <p className="text-orange-100 text-sm">
          Email:{" "}
          <a
            href="mailto:johnnyfageaux@gmail.com"
            className="underline hover:text-white"
          >
            johnnyfageaux@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

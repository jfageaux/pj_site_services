import Footer from "@/components/Footer";

const SERVICE_LINES = [
  {
    title: "Storage",
    items: [
      "Boat storage",
      "RV storage",
      "Trailer storage",
      "Container storage",
      "Contractor equipment storage",
    ],
  },
  {
    title: "Cleaning",
    items: [
      "Commercial cleaning",
      "Warehouse cleanup",
      "Janitorial",
      "Turnover cleaning",
    ],
  },
  {
    title: "Washing",
    items: [
      "Pressure washing",
      "Fleet washing",
      "Dumpster pad cleaning",
      "Parking lot cleaning",
    ],
  },
  {
    title: "Landscape / Irrigation",
    items: [
      "Commercial landscape cleanup",
      "Weed control",
      "Irrigation repair/checks",
      "Basic outdoor maintenance",
    ],
  },
  {
    title: "Site Services",
    items: [
      "Lot cleanup",
      "Yard organization",
      "Recurring property checks",
      "Light maintenance",
    ],
  },
];

const MVP_STEPS = [
  "Pick one simple service to validate first — fleet washing or pressure washing near Long Beach is a strong candidate.",
  "Build a basic landing page targeting LA/OC customers.",
  "Contact trucking companies, logistics operators, port-adjacent businesses, property managers, and commercial sites in the Long Beach / LA area.",
  "Try to get the first paying customer.",
  "Keep the first version simple — no backend, no complicated software.",
  "Track every lead manually.",
  "Learn what customers in the area actually need and are willing to pay for.",
  "Add recurring services and expand service runs from the High Desert once demand is clear.",
];

const FIRST_CUSTOMERS = [
  "Someone who needs cheap boat storage",
  "Someone who needs RV storage",
  "Contractor who needs trailer/equipment storage",
  "Small warehouse needing cleanup",
  "Trucking company needing fleet washing",
  "Property manager needing pressure washing",
  "Small commercial property needing recurring cleaning",
  "Storage yard needing maintenance or cleanup",
];

const WHY_IT_WORKS = [
  "High Desert land is significantly cheaper than coastal Southern California — lower storage overhead means more competitive pricing.",
  "LA and OC have high demand for fleet washing, commercial cleaning, pressure washing, and outdoor storage, with customers willing to pay for reliable service.",
  "Port of Long Beach and nearby industrial zones are a natural customer base — trucking companies, logistics operators, and fleet managers all need exactly these services.",
  "Many customers don't want to coordinate multiple vendors. One company handling storage, washing, and site maintenance is a real value proposition.",
  "Boring services create recurring revenue. A fleet wash route or a monthly cleaning contract is steady, predictable income.",
  "Most small service businesses have weak websites, weak follow-up, and weak systems — easy to stand out.",
  "AI routing tools can plan efficient service runs from the High Desert into LA/OC, reducing fuel and drive time costs.",
  "Remote security monitoring (cameras, sensors, smart alerts) replaces expensive on-site guards — making storage yard security affordable to operate at scale.",
];

const NEXT_STEPS = [
  "Agree on the name PJ Site Services.",
  "Agree on the first service to test.",
  "Identify the first High Desert area to target.",
  "Make a simple list of 50–100 potential customers.",
  "Send the landing page to potential customers.",
  "Manually collect quote requests by email.",
  "Try to close the first paying customer before building anything more complex.",
];

const DO_NOT_BUILD = [
  "No app",
  "No customer portal",
  "No backend",
  "No database",
  "No payment system",
  "No complex quote form",
  "No scheduling software",
  "No logo obsession",
  "No giant service menu with fake promises",
];

export default function PartnerPage() {
  return (
    <>
      <header className="bg-[#1c2b3a] text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="text-[#e8813a] font-bold text-lg hover:opacity-80">
            ← PJ Site Services
          </a>
          <span className="text-xs bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
            Internal — Partner Concept
          </span>
        </div>
      </header>

      <main className="flex-1 bg-[#f5f0e8]">
        {/* Hero */}
        <section className="bg-[#1c2b3a] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-yellow-400 text-sm font-semibold mb-3 uppercase tracking-widest">
              Internal overview for Peter
            </p>
            <h1 className="text-4xl font-bold mb-4">
              PJ Site Services — Partner Concept
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              This page explains the full business concept: High Desert operations,
              LA/OC market focus, the tech stack that makes it work, and why the
              company name should stay broad instead of being only storage-focused.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1c2b3a] mb-4">
              Why Not Just "PJ Storage"?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The company should not be named only around storage because the
              long-term opportunity is broader than storing boats, RVs, trailers,
              and containers. A storage-only name would box the business into one
              service line and make expansion harder to communicate to customers.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              <strong>PJ Site Services</strong> allows the company to expand
              into all of these service lines under one brand:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Outdoor storage",
                "Commercial cleaning",
                "Pressure washing",
                "Fleet washing",
                "Landscaping",
                "Irrigation",
                "Yard cleanup",
                "Site maintenance",
                "Contractor support",
                "Commercial property services",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-[#1c2b3a] text-white rounded px-3 py-1 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              This keeps the brand flexible — no rebrand needed as the company grows.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1c2b3a] mb-4">The Core Idea</h2>
            <div className="bg-white border-l-4 border-[#e8813a] rounded p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                PJ Site Services operates from the High Desert but targets customers
                in LA and Orange County — especially port operators, logistics companies,
                fleet managers, and commercial property owners near Long Beach. The
                High Desert base keeps land and overhead costs low. The LA/OC market
                has strong demand and customers who will pay for reliable service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The geographic gap between operations and customers gets bridged by
                technology: AI-assisted routing to plan efficient service runs,
                remote security monitoring to manage storage yards without on-site
                guards, and smart scheduling to maximize revenue per trip.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The goal is not to build a complicated tech company. The goal is
                to build a boring local services company with better systems,
                better follow-up, better customer communication, and better
                automation than the competition.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1c2b3a] mb-6">Service Lines</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_LINES.map((sl) => (
                <div
                  key={sl.title}
                  className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm"
                >
                  <h3 className="font-bold text-[#1c2b3a] mb-3 text-base">
                    {sl.title}
                  </h3>
                  <ul className="space-y-1">
                    {sl.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-[#e8813a] mt-0.5">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1c2b3a] mb-6">Simple MVP Plan</h2>
            <ol className="space-y-3">
              {MVP_STEPS.map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="bg-[#e8813a] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1c2b3a] mb-6">Best First Customers</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FIRST_CUSTOMERS.map((c) => (
                <li
                  key={c}
                  className="bg-white border border-gray-200 rounded p-4 text-sm text-gray-700 flex items-start gap-2 shadow-sm"
                >
                  <span className="text-[#e8813a] font-bold shrink-0">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1c2b3a] mb-6">
              Why This Opportunity Makes Sense
            </h2>
            <ul className="space-y-3">
              {WHY_IT_WORKS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#e8813a] font-bold shrink-0 text-lg leading-5">
                    ›
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 6b: Tech & AI Advantage */}
          <section>
            <h2 className="text-2xl font-bold text-[#1c2b3a] mb-2">
              How Technology Closes the Distance
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Operating from the High Desert while serving LA/OC only works if transportation
              and security costs are kept under control. Here's how tech makes that viable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <p className="font-bold text-[#1c2b3a] mb-2">AI Route Optimization</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Route planning tools (Routific, OptimoRoute, Google Routes API) can
                  cluster jobs by area and day so each drive from the High Desert into
                  LA/OC covers multiple stops. A well-planned route can turn a long
                  drive into a profitable service day instead of a breakeven one.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <p className="font-bold text-[#1c2b3a] mb-2">Remote Security Monitoring</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  IP cameras, motion sensors, and smart alert systems let you monitor
                  a storage yard remotely without paying for on-site security guards.
                  Modern camera systems with AI-based motion detection can flag real
                  threats and ignore false alarms, making remote management practical
                  and affordable.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <p className="font-bold text-[#1c2b3a] mb-2">Smart Scheduling</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Scheduling software (Jobber, HouseCall Pro) automates booking,
                  reminders, and follow-up. Less time on admin means more time on
                  jobs. Recurring service contracts get auto-scheduled so nothing
                  falls through the cracks.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <p className="font-bold text-[#1c2b3a] mb-2">Automated Customer Follow-Up</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AI tools can handle quote follow-ups, appointment confirmations,
                  and review requests automatically. The company can operate with a
                  small team and still maintain responsive, professional communication
                  with every customer.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1c2b3a] mb-4">
              Do Not Overbuild Yet
            </h2>
            <div className="bg-[#1c2b3a] text-white rounded-lg p-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {DO_NOT_BUILD.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-red-400">✕</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#e8813a] font-semibold text-sm mb-2">
                Focus only on:
              </p>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>› Clear message</li>
                <li>› Clear services</li>
                <li>› Clear service area</li>
                <li>› Clear quote CTA</li>
                <li>› Manual follow-up</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section className="pb-4">
            <h2 className="text-2xl font-bold text-[#1c2b3a] mb-6">
              Suggested Next Steps
            </h2>
            <ol className="space-y-3">
              {NEXT_STEPS.map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="bg-[#1c2b3a] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 pt-0.5">{step}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 bg-[#e8813a] rounded-lg p-6 text-white text-center">
              <p className="font-bold text-xl mb-2">Ready to move forward?</p>
              <p className="text-orange-100 mb-4 text-sm">
                Send a quote request to get the conversation started.
              </p>
              <a
                href="mailto:johnnyfageaux@gmail.com?subject=PJ%20Site%20Services%20Partner%20Discussion"
                className="inline-block bg-white text-[#e8813a] px-6 py-2 rounded font-bold text-sm hover:bg-orange-50 transition-colors"
              >
                Email johnnyfageaux@gmail.com
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

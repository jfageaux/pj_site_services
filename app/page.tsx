import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import BenefitCard from "@/components/BenefitCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const SERVICES = [
  {
    title: "Outdoor Storage",
    icon: "🏗️",
    items: [
      "Boat storage",
      "RV storage",
      "Trailer storage",
      "Contractor equipment storage",
      "Container storage",
    ],
  },
  {
    title: "Commercial Cleaning",
    icon: "🧹",
    items: [
      "Office cleaning",
      "Warehouse cleanup",
      "Common-area cleaning",
      "Move-out / turnover cleaning",
      "Recurring janitorial service",
    ],
  },
  {
    title: "Pressure Washing",
    icon: "💧",
    items: [
      "Concrete pads",
      "Dumpster areas",
      "Parking lots",
      "Building exteriors",
      "Graffiti cleanup",
    ],
  },
  {
    title: "Fleet Washing",
    icon: "🚛",
    items: [
      "Trucks",
      "Vans",
      "Work vehicles",
      "Contractor fleets",
      "Recurring wash routes",
    ],
  },
  {
    title: "Landscaping & Irrigation",
    icon: "🌵",
    items: [
      "Commercial landscape cleanup",
      "Irrigation checks",
      "Weed control",
      "Yard cleanup",
      "Basic property maintenance",
    ],
  },
  {
    title: "Site Support",
    icon: "🔧",
    items: [
      "Lot cleanup",
      "Yard organization",
      "Storage coordination",
      "Light exterior maintenance",
      "Recurring property checks",
    ],
  },
];

const BENEFITS = [
  {
    title: "LA, OC & High Desert",
    description:
      "We service customers across LA and Orange County, with operations based in the High Desert — keeping costs lower than coastal-only providers.",
  },
  {
    title: "Multiple Site Services",
    description:
      "Storage, cleaning, washing, landscaping, and property maintenance under one simple brand.",
  },
  {
    title: "Recurring Service Options",
    description: "Monthly, biweekly, weekly, and custom service plans.",
  },
  {
    title: "Simple Communication",
    description:
      "Fast quotes, clear scheduling, and practical work without unnecessary complexity.",
  },
];

const CUSTOMERS = [
  "Boat and RV owners",
  "Contractors",
  "Warehouse operators",
  "Trucking and fleet companies",
  "Property managers",
  "Commercial landlords",
  "Small business owners",
  "Storage yard operators",
  "Homeowners with outdoor storage needs",
];

const LA_OC_AREAS = [
  "Long Beach",
  "Los Angeles",
  "Carson",
  "Compton",
  "Torrance",
  "Gardena",
  "Hawthorne",
  "El Segundo",
  "Anaheim",
  "Santa Ana",
  "Orange County",
];

const HIGH_DESERT_AREAS = [
  "Hesperia",
  "Victorville",
  "Adelanto",
  "Apple Valley",
  "Barstow",
  "Oak Hills",
  "Phelan",
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Services */}
        <section id="services" className="py-16 px-4 bg-[#f5f0e8]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1c2b3a] mb-2 text-center">
              One company for the boring work that keeps sites running
            </h2>
            <p className="text-center text-gray-500 mb-10 text-sm">
              Practical services for commercial properties, storage yards, and outdoor sites.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* Why PJ */}
        <section id="why-pj" className="py-16 px-4 bg-[#ddd8cc]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1c2b3a] mb-10 text-center">
              Built for practical commercial and outdoor needs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BENEFITS.map((b) => (
                <BenefitCard key={b.title} {...b} />
              ))}
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="py-16 px-4 bg-[#f5f0e8]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1c2b3a] mb-8 text-center">
              Who we help
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {CUSTOMERS.map((c) => (
                <span
                  key={c}
                  className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-[#1c2b3a] font-medium shadow-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section id="service-area" className="py-16 px-4 bg-[#1c2b3a] text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center">Service Area</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-center">
              We serve customers across LA and Orange County — including port, logistics,
              and commercial sites near Long Beach. Operations are based in the High
              Desert, which keeps our overhead low and our pricing competitive.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-[#e8813a] font-semibold text-sm uppercase tracking-widest mb-4">
                  Primary Service Area — LA & OC
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {LA_OC_AREAS.map((area) => (
                    <span
                      key={area}
                      className="bg-[#e8813a] bg-opacity-20 border border-[#e8813a] border-opacity-40 rounded px-3 py-1.5 text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Including Port of Long Beach and surrounding industrial/commercial areas.
                </p>
              </div>
              <div>
                <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest mb-4">
                  Operations Base — High Desert
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {HIGH_DESERT_AREAS.map((area) => (
                    <span
                      key={area}
                      className="bg-[#253d52] border border-gray-600 rounded px-3 py-1.5 text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Storage, equipment, and operations hub. Lower land costs mean better
                  rates for customers.
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-8 text-center">
              Availability may vary by service type and job size. Contact us to confirm coverage.
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

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
    title: "High Desert Focus",
    description:
      "Local service for High Desert properties, storage yards, contractors, and commercial sites.",
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

const AREAS = [
  "Hesperia",
  "Victorville",
  "Adelanto",
  "Apple Valley",
  "Barstow",
  "Oak Hills",
  "Phelan",
  "Surrounding High Desert areas",
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Serving the High Desert</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              PJ Site Services is starting in the High Desert with a focus on
              practical outdoor storage, commercial cleaning, pressure washing,
              fleet washing, landscaping, irrigation, and site maintenance.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {AREAS.map((area) => (
                <span
                  key={area}
                  className="bg-[#253d52] border border-gray-600 rounded px-4 py-2 text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              Availability may vary by service type and job size.
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

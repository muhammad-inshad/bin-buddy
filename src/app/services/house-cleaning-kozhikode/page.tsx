import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  MessageCircle,
  HelpCircle,
  Check,
} from "lucide-react";
import { buildWhatsAppLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Best House Cleaning Services in Kozhikode | Bin Friend",
  description:
    "Top-rated professional house cleaning services in Kozhikode (Calicut). Deep home cleaning, kitchen scrubbing, bathroom sanitization, and villa cleaning from ₹1,899. Book on WhatsApp: +91 70250 34758.",
  keywords: [
    "house cleaning services in kozhikode",
    "best house cleaner in kozhikode",
    "deep cleaning services calicut",
    "home cleaning services kozhikode",
    "bathroom cleaning kozhikode",
    "kitchen deep cleaning calicut",
    "villa cleaning services kerala",
    "move in cleaning kozhikode",
  ],
  alternates: {
    canonical: "/services/house-cleaning-kozhikode",
  },
  openGraph: {
    title: "Best House Cleaning Services in Kozhikode | Bin Friend",
    description:
      "Professional deep house cleaning, kitchen scrubbing & bathroom descaling across Kozhikode (Calicut). Trained staff, eco-friendly agents, transparent rates.",
    url: "https://warm-liger-7e5ba3.netlify.app/services/house-cleaning-kozhikode",
    siteName: "Bin Friend",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/service-house-deep-cleaning.jpg",
        width: 1200,
        height: 630,
        alt: "Professional House Deep Cleaning Services in Kozhikode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best House Cleaning Services in Kozhikode | Bin Friend",
    description:
      "Professional deep home cleaning, kitchen & bathroom sanitization in Kozhikode. Trained crew & eco-friendly detergents.",
    images: ["/images/service-house-deep-cleaning.jpg"],
  },
};

const kozhikodeAreas = [
  "Nadakkavu",
  "Mavoor Road",
  "Chevayur",
  "Thondayad",
  "Pottammal",
  "Palayam",
  "West Hill",
  "Medical College Area",
  "Civil Station",
  "Mankavu",
  "Pantheeramkavu",
  "Feroke",
  "Elathur",
  "Bilathikulam",
  "Vellimadukunnu",
  "Karaparamba",
];

const packages = [
  {
    name: "1 & 2 BHK Flat Deep Clean",
    price: "₹2,499",
    time: "3–4 Hours",
    popular: false,
    features: [
      "Full floor scrubbing & vacuuming",
      "2 Bathrooms deep descaling & sanitization",
      "Kitchen counters & sink grease removal",
      "Cobweb removal & fan/switchboard dusting",
      "Window glass & balcony cleaning",
    ],
  },
  {
    name: "3 & 4 BHK Villa / Flat Deep Clean",
    price: "₹4,299",
    time: "5–6 Hours",
    popular: true,
    features: [
      "Complete home deep cleaning (up to 4 rooms)",
      "3 Bathrooms deep tile scrubbing & acid-free descaling",
      "Kitchen cabinets, chimney exterior & exhaust cleaning",
      "Door frames, balcony railings & windows washed",
      "Eco-friendly germicidal sanitization",
      "Dedicated 3-person trained crew",
    ],
  },
  {
    name: "Kitchen & Bathrooms Only",
    price: "₹1,899",
    time: "2–3 Hours",
    popular: false,
    features: [
      "Intensive oily grease & oil-stain removal",
      "Tile joint scrubbing & hard-water stain removal",
      "Sanitary ware & tap buffing (chrome polish)",
      "Disinfection of toilet seats and washbasins",
    ],
  },
];

const serviceGuarantees = [
  {
    title: "Background-Verified Crew",
    desc: "Every cleaner on our team is verified, polite, and trained with commercial single-disc floor scrubbers and vacuum systems.",
  },
  {
    title: "Eco-Friendly Sanitizers",
    desc: "We use non-toxic, surface-safe detergents for kitchens and bathrooms that are safe for children and domestic pets.",
  },
  {
    title: "Pay After Inspection",
    desc: "Zero advance payment required. You inspect your flat or villa after our crew finishes and pay only when 100% satisfied.",
  },
];

const faqs = [
  {
    q: "How do I book a house cleaning session in Kozhikode?",
    a: "Simply tap the 'Book on WhatsApp' button. Share your location in Kozhikode, flat/villa size (1BHK, 2BHK, 3BHK, etc.), and your preferred date. We confirm your slot within 15 minutes.",
  },
  {
    q: "Do your cleaners bring their own equipment and supplies?",
    a: "Yes. Our team arrives fully equipped with commercial vacuum cleaners, single-disc floor scrubbers, microfiber cloths, squeegees, and certified eco-friendly cleaning detergents.",
  },
  {
    q: "Which areas in Kozhikode do you serve?",
    a: "We serve the entire Kozhikode corporation area and nearby suburbs including Nadakkavu, Mavoor Road, Chevayur, Thondayad, Pottammal, Palayam, West Hill, Medical College, Feroke, and Elathur.",
  },
  {
    q: "Is there any advance payment required?",
    a: "No advance payment is required. You only pay after the cleaning is completed and you have inspected your home to your complete satisfaction.",
  },
];

export default function HouseCleaningKozhikodePage() {
  const whatsappUrl = buildWhatsAppLink(
    "Hi Bin Friend! I'm looking for house cleaning services in Kozhikode. Please share availability and details."
  );

  // Schema.org structured data: Service + FAQPage (Resolves parent_node & aggregateRating errors)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://warm-liger-7e5ba3.netlify.app/services/house-cleaning-kozhikode/#service",
        name: "House Cleaning Services in Kozhikode",
        serviceType: "House Cleaning and Deep Cleaning",
        description:
          "Professional house cleaning, deep home cleaning, kitchen scrubbing, bathroom sanitization, and villa cleaning across Kozhikode (Calicut), Kerala.",
        provider: {
          "@type": "HomeAndConstructionBusiness",
          "@id": "https://warm-liger-7e5ba3.netlify.app/#organization",
          name: "Bin Friend",
          telephone: "+91-7025034758",
          url: "https://warm-liger-7e5ba3.netlify.app/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mankavu",
            addressLocality: "Kozhikode",
            addressRegion: "Kerala",
            postalCode: "673007",
            addressCountry: "IN",
          },
        },
        areaServed: kozhikodeAreas.map((area) => ({
          "@type": "AdministrativeArea",
          name: `${area}, Kozhikode`,
        })),
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "1899",
          highPrice: "4299",
          offerCount: "3",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://warm-liger-7e5ba3.netlify.app/services/house-cleaning-kozhikode/#faq",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="w-full">
      {/* JSON-LD Script for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/60 via-brand-light/20 to-transparent py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-brand-dark shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> Top Rated in Kozhikode (Calicut)
              </div>

              <h1 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.12]">
                Best House Cleaning Services in <span className="text-brand">Kozhikode</span>
              </h1>

              <p className="mt-4 max-w-xl text-base sm:text-lg text-foreground/85 leading-relaxed">
                Looking for reliable, professional house cleaners in Kozhikode? Bin Friend delivers
                thorough deep cleaning for apartments, independent houses, and villas with background-verified staff and eco-friendly products.
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-sm font-semibold text-foreground/85">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" /> Same-day confirmation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" /> Pay after inspection
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" /> All equipment provided
                </span>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-brand/20 transition-all hover:bg-brand-dark hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" /> Book on WhatsApp
                </a>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand/20 bg-white px-7 py-3.5 text-sm font-bold text-brand-dark transition-all hover:bg-brand-light/50"
                >
                  Online Booking Form
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-black/8 bg-white p-3 shadow-xl">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/images/service-house-deep-cleaning.webp"
                    alt="Professional house cleaning service in Kozhikode"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="rounded-md bg-brand px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider">
                      Verified Crew
                    </span>
                    <div className="mt-1 text-sm font-bold sm:text-base">
                      Spotless Kitchens, Bathrooms &amp; Living Spaces
                    </div>
                  </div>
                </div>

                {/* Quality Guarantee badge */}
                <div className="mt-3 flex items-center justify-between px-2 py-1 text-xs font-semibold text-foreground/80">
                  <div className="flex items-center gap-1.5 text-brand">
                    <ShieldCheck className="h-4 w-4 text-brand" />
                    <span>Pay After Inspection</span>
                  </div>
                  <span className="text-foreground/60">Mankavu, Kozhikode Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand-light px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
            Transparent Rates
          </span>
          <h2 className="mt-2 text-2xl font-black text-foreground sm:text-4xl">
            House Cleaning Packages in Kozhikode
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm sm:text-base text-foreground/60">
            No hidden fees. All detergents, sanitizers, and heavy-duty machinery are included in the price.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-3xl border p-6 sm:p-7 shadow-sm transition-all hover:shadow-lg ${
                pkg.popular
                  ? "border-brand bg-white ring-2 ring-brand/20 shadow-md"
                  : "border-black/8 bg-white"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-bold text-foreground">{pkg.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-black text-brand">{pkg.price}</span>
                <span className="text-xs text-foreground/50">starting price</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-foreground/60">
                <Clock className="h-3.5 w-3.5 text-brand" /> Estimated: {pkg.time}
              </div>

              <ul className="mt-6 flex-1 space-y-2.5 border-t border-black/5 pt-6 text-xs sm:text-sm text-foreground/75">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={buildWhatsAppLink(
                  `Hi Bin Friend! I would like to book the "${pkg.name}" for my house in Kozhikode.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-xs sm:text-sm font-bold shadow-sm transition-all ${
                  pkg.popular
                    ? "bg-brand text-white hover:bg-brand-dark"
                    : "border border-brand/30 bg-white text-brand hover:bg-brand-light/50"
                }`}
              >
                <MessageCircle className="h-4 w-4" /> Book this Package
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Areas Served in Kozhikode */}
      <section className="border-y border-black/5 bg-slate-50/80 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
              <MapPin className="h-3.5 w-3.5" /> Doorstep Service Locations
            </span>
            <h2 className="mt-2 text-2xl font-black text-foreground sm:text-4xl">
              Areas We Serve in Kozhikode (Calicut)
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-foreground/60">
              Our cleaning teams operate daily across Kozhikode district with rapid same-day availability.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {kozhikodeAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/8 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-brand hover:text-brand"
              >
                <MapPin className="h-3 w-3 text-brand" /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantees & Standards */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand-light px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
            Our Quality Standards
          </span>
          <h2 className="mt-2 text-2xl font-black text-foreground sm:text-4xl">
            Why Kozhikode Residents Trust Bin Friend
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm sm:text-base text-foreground/60">
            Professional hygiene standards, background-checked cleaners, and 100% satisfaction guarantee for Calicut homes.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {serviceGuarantees.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-3xl border border-black/8 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2.5 text-sm text-foreground/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 border-t border-black/5 pt-3 text-xs font-semibold text-brand">
                Standard on every booking
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-black/5 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-brand-light px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
              Frequently Asked Questions
            </span>
            <h2 className="mt-2 text-2xl font-black text-foreground sm:text-4xl">
              House Cleaning in Kozhikode: FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-black/8 bg-slate-50/50 p-5 sm:p-6"
              >
                <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
                  <HelpCircle className="h-4 w-4 shrink-0 text-brand" />
                  {f.q}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final WhatsApp CTA */}
      <section className="bg-gradient-to-r from-brand-dark to-brand py-14 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center sm:px-6">
          <h2 className="text-2xl font-black sm:text-4xl">
            Book the Best House Cleaners in Kozhikode Today
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-white/90">
            Enjoy a sparkling clean, dust-free, and sanitized home. Confirm your slot in 2 minutes on WhatsApp!
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-dark shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" /> Message on WhatsApp
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/20"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

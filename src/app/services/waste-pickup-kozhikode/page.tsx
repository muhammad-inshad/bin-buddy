import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  CheckCircle2,
  MapPin,
  Star,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { buildWhatsAppLink, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Best Doorstep Waste Pickup Service in Kozhikode | Bin Friend",
  description:
    "Top-rated doorstep waste pickup and garbage collection in Kozhikode (Calicut). Daily & weekly collection of wet waste, dry recyclables, scrap & e-waste across Mankavu, Mavoor Road, Nadakkavu. Book on WhatsApp: 7025034758.",
  keywords: [
    "waste pickup service in kozhikode",
    "waste pickup kozhikode",
    "doorstep waste collection calicut",
    "garbage pickup service kozhikode",
    "scrap collection kozhikode",
    "dry waste collection kozhikode",
    "daily garbage pickup kozhikode",
    "waste management mankavu calicut",
    "e-waste pickup kozhikode",
  ],
  alternates: {
    canonical: "/services/waste-pickup-kozhikode",
  },
  openGraph: {
    title: "Best Doorstep Waste Pickup Service in Kozhikode | Bin Friend",
    description:
      "Reliable doorstep waste pickup and recycling service in Kozhikode (Calicut). Zero landfill mission, verified collectors, transparent pricing.",
    url: "https://warm-liger-7e5ba3.netlify.app/services/waste-pickup-kozhikode",
    siteName: "Bin Friend",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/service-doorstep-pickup.jpg",
        width: 1200,
        height: 630,
        alt: "Doorstep Waste Pickup Service in Kozhikode",
      },
    ],
  },
};

const kozhikodeAreas = [
  "Mankavu",
  "Mavoor Road",
  "Nadakkavu",
  "Chevayur",
  "Thondayad",
  "Pottammal",
  "Palayam",
  "West Hill",
  "Medical College Area",
  "Civil Station",
  "Pantheeramkavu",
  "Feroke",
  "Elathur",
  "Bilathikulam",
  "Vellimadukunnu",
  "Karaparamba",
  "Meenchanda",
  "Kallayi",
];

const packages = [
  {
    name: "Monthly Household Doorstep Plan",
    price: "₹399",
    period: "/ month",
    popular: true,
    tagline: "Ideal for flats, villas & families",
    features: [
      "Scheduled doorstep collection 3x weekly",
      "Segregated wet & dry waste handling",
      "Complimentary eco-friendly compostable liners",
      "Punctual morning or evening pickup slot",
      "WhatsApp status updates & holiday rescheduling",
    ],
  },
  {
    name: "One-Time Bulk Junk & Scrap Clearance",
    price: "₹999",
    period: "starting price",
    popular: false,
    tagline: "Great for post-renovation or moving out",
    features: [
      "Immediate same-day or next-day collection truck",
      "Old cardboard cartons, plastic crates, broken furniture",
      "Scrap metal, aluminium & iron haulage",
      "Safe e-waste & obsolete electronics disposal",
      "Clean sweep of the loading area included",
    ],
  },
  {
    name: "Apartment & Commercial Enterprise Plan",
    price: "Custom",
    period: "quote on request",
    popular: false,
    tagline: "For housing societies, restaurants & offices",
    features: [
      "Daily dedicated collection vehicle",
      "Colour-coded bins & outdoor wheelie bins supplied",
      "Full compliance & certified green recycling report",
      "Dedicated relationship manager on WhatsApp",
      "Special bulk dry-paper & pantry waste rates",
    ],
  },
];

const reviews = [
  {
    name: "Sujith Menon",
    area: "Mankavu, Kozhikode",
    rating: 5,
    text: "Living near Mankavu, disposing of segregated waste was always a headache until I started using Bin Friend. The pickup boys arrive strictly on schedule every alternate morning. Clean, polite, and very reasonable rates.",
  },
  {
    name: "Dr. Reena Thomas",
    area: "Medical College Area, Calicut",
    rating: 5,
    text: "Easily the most reliable waste pickup service in Kozhikode! Booking was done over WhatsApp within minutes. They provide transparent reports that our recyclables actually reach certified centers.",
  },
  {
    name: "Mohammed Niyas",
    area: "Nadakkavu, Kozhikode",
    rating: 5,
    text: "Booked their bulk scrap pickup before renovating our family house in Nadakkavu. They cleared 15 cartons, metal scrap and old appliances in under an hour. Highly recommended!",
  },
];

const faqs = [
  {
    q: "How does the waste pickup service work in Kozhikode?",
    a: "You simply message us on WhatsApp with your location in Kozhikode (e.g. Mankavu, Mavoor Road, Nadakkavu) and select a plan. We assign a pickup schedule and our verified team visits your doorstep to collect segregated wet and dry waste.",
  },
  {
    q: "Which types of waste do you collect?",
    a: "We collect household wet waste, dry recyclables (paper, plastic bottles, packaging), scrap metal, electronics/e-waste, cardboard cartons, and bulk yard garden clippings.",
  },
  {
    q: "Where is your service center located in Kozhikode?",
    a: "Our central hub is located in Mankavu, Kozhikode (673007). From this hub, our eco-friendly logistics vehicles cover the entire Kozhikode corporation area and surrounding suburbs daily.",
  },
  {
    q: "How do I book or pay?",
    a: "You can book directly by tapping 'Book on WhatsApp'. No complicated app is required. Payment can be made easily via Google Pay, UPI, or cash after confirmation.",
  },
];

export default function WastePickupKozhikodePage() {
  const whatsappUrl = buildWhatsAppLink(
    "Hi Bin Friend! I'm looking for doorstep waste pickup services in Kozhikode. Please share plan details and availability."
  );

  // LocalBusiness / WasteManagementService Schema.org structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Bin Friend Doorstep Waste Pickup Service Kozhikode",
    image: "https://warm-liger-7e5ba3.netlify.app/images/service-doorstep-pickup.jpg",
    telephone: siteConfig.phoneDisplay,
    priceRange: "₹399 - ₹2499",
    url: "https://warm-liger-7e5ba3.netlify.app/services/waste-pickup-kozhikode",
    openingHours: "Mo-Su 09:00-21:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Kozhikode",
      addressRegion: "Kerala",
      postalCode: "673007",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.2404392,
      longitude: 75.8156257,
    },
    areaServed: kozhikodeAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area}, Kozhikode`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "185",
    },
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
                <Truck className="h-3.5 w-3.5 text-brand" /> #1 Doorstep Waste Collection in Kozhikode (Calicut)
              </div>

              <h1 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.12]">
                Waste Pickup Service in <span className="text-brand">Kozhikode</span>
              </h1>

              <p className="mt-4 max-w-xl text-base sm:text-lg text-foreground/70 leading-relaxed">
                Looking for reliable, doorstep waste pickup in Kozhikode? Bin Friend provides punctual household garbage collection, dry recycling, scrap clearance, and society waste solutions across Calicut with 100% verified green recycling.
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-sm font-semibold text-foreground/75">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> Hub at Mankavu, Kozhikode
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> Punctual doorstep pickup
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> No long-term lock-in
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
                  <MessageCircle className="h-4 w-4" /> Book Pickup on WhatsApp
                </a>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand/20 bg-white px-7 py-3.5 text-sm font-bold text-brand-dark transition-all hover:bg-brand-light/50"
                >
                  Online Booking Form
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-black/8 bg-white p-3 shadow-xl">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/images/service-doorstep-pickup.jpg"
                    alt="Doorstep waste pickup collection service in Kozhikode"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="rounded-md bg-brand px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider">
                      Zero Landfill Mission
                    </span>
                    <div className="mt-1 text-sm font-bold sm:text-base">
                      Clean Neighborhoods Across Kozhikode District
                    </div>
                  </div>
                </div>

                {/* Rating badge */}
                <div className="mt-3 flex items-center justify-between px-2 py-1">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-xs font-bold text-foreground">4.9 / 5.0</span>
                  </div>
                  <span className="text-xs font-medium text-foreground/60">
                    180+ Kozhikode Families
                  </span>
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
            Affordable Plans
          </span>
          <h2 className="mt-2 text-2xl font-black text-foreground sm:text-4xl">
            Waste Pickup Plans in Kozhikode
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm sm:text-base text-foreground/60">
            From single-home daily collections to bulk apartment &amp; society contracts.
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
              <p className="mt-1 text-xs text-foreground/60">{pkg.tagline}</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-black text-brand">{pkg.price}</span>
                <span className="text-xs text-foreground/50">{pkg.period}</span>
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
                  `Hi Bin Friend! I would like to book the "${pkg.name}" waste pickup plan for my location in Kozhikode.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-xs sm:text-sm font-bold shadow-sm transition-all ${
                  pkg.popular
                    ? "bg-brand text-white hover:bg-brand-dark"
                    : "border border-brand/30 bg-white text-brand hover:bg-brand-light/50"
                }`}
              >
                <MessageCircle className="h-4 w-4" /> Book this Plan
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
              <MapPin className="h-3.5 w-3.5" /> Kozhikode Service Zones
            </span>
            <h2 className="mt-2 text-2xl font-black text-foreground sm:text-4xl">
              Areas We Cover in Kozhikode (Calicut)
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-foreground/60">
              Our collection logistics vehicles operate across Kozhikode daily with rapid morning and evening slots.
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

      {/* Customer Reviews from Kozhikode */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand-light px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
            Local Reviews
          </span>
          <h2 className="mt-2 text-2xl font-black text-foreground sm:text-4xl">
            What Kozhikode Residents Say About Bin Friend
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col justify-between rounded-3xl border border-black/8 bg-white p-6 shadow-sm"
            >
              <div>
                <div className="flex gap-1 text-amber-400">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed italic">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
              <div className="mt-5 border-t border-black/5 pt-4">
                <div className="text-sm font-bold text-foreground">{r.name}</div>
                <div className="text-xs text-brand font-medium">{r.area}</div>
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
              Common Questions
            </span>
            <h2 className="mt-2 text-2xl font-black text-foreground sm:text-4xl">
              Waste Pickup in Kozhikode: FAQs
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
            Book Doorstep Waste Pickup in Kozhikode Today
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-white/90">
            Enjoy clean, hygienic, and hassle-free waste management for your home or society. Confirm your slot in 60 seconds on WhatsApp!
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-dark shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-4 w-4 text-brand" /> Message on WhatsApp
            </a>
            <Link
              href="/services/house-cleaning-kozhikode"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/20"
            >
              House Cleaning (Kozhikode)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { buildWhatsAppLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Waste Pickup & Cleaning Services in Kozhikode | Bin Friend",
  description:
    "Home waste pickup, garbage collection, recycling, deep cleaning, yard clearing, junk removal and commercial waste plans in Kozhikode, Kerala.",
  keywords: [
    "waste pickup service in kozhikode",
    "cleaning services kozhikode",
    "garbage pickup calicut",
    "doorstep waste collection kerala",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Waste Pickup & Cleaning Services in Kozhikode | Bin Friend",
    description:
      "Doorstep waste pickup, garbage collection, and deep cleaning services across Kozhikode (Calicut), Kerala.",
    url: "https://warm-liger-7e5ba3.netlify.app/services",
    siteName: "Bin Friend",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Waste Pickup & Cleaning Services in Kozhikode | Bin Friend",
    description:
      "Complete waste management and cleaning services in Kozhikode (Calicut).",
  },
};

export default function ServicesPage() {
  const customQuoteUrl = buildWhatsAppLink(
    "Hi Bin Friend! I'm interested in a custom waste management plan for my home/building. Can you share details?"
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="text-center">
        <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
          Our Services
        </span>
        <h1 className="mt-3 text-3xl font-black text-foreground sm:text-5xl">
          Complete Waste &amp; Cleaning Solutions
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-foreground/65">
          From scheduled weekly household waste pickups to full deep cleanings, garden debris clearance,
          and commercial enterprise plans — all bookable with zero friction on WhatsApp.
        </p>
      </div>

      {/* Kozhikode Local Spotlight Banners */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-brand/20 bg-emerald-50/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand">Kozhikode · Doorstep Collection</div>
              <div className="text-sm sm:text-base font-bold text-foreground">Waste Pickup Service in Kozhikode</div>
            </div>
          </div>
          <Link
            href="/services/waste-pickup-kozhikode"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-dark"
          >
            View Plans <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-2xl border border-brand/20 bg-emerald-50/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand">Kozhikode · Deep Clean</div>
              <div className="text-sm sm:text-base font-bold text-foreground">House Cleaning in Kozhikode</div>
            </div>
          </div>
          <Link
            href="/services/house-cleaning-kozhikode"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-dark"
          >
            View Packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      {/* Custom Quote Banner */}
      <div className="mt-14 overflow-hidden rounded-3xl border border-black/8 bg-gradient-to-br from-brand-light/60 via-brand-light/20 to-white p-6 sm:p-10 shadow-sm">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
              <CheckCircle className="h-4 w-4" /> Customized Support
            </span>
            <h2 className="mt-2 text-2xl font-black text-foreground sm:text-3xl">
              Need a custom plan for your society or office?
            </h2>
            <p className="mt-2 text-sm text-foreground/65">
              We provide tailored pickup routes, compliance certificates, and dedicated trucks
              for apartments, housing societies, tech parks, and commercial retail units.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={customQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-dark"
            >
              <MessageCircle className="h-4 w-4" /> Get Custom Quote
            </a>
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-slate-50"
            >
              Book Pickup Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

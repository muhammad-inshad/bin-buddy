import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Users, Recycle, ShieldCheck, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "About — Bin Buddy",
  description: "Learn about Bin Buddy's mission to make waste management simple, reliable and sustainable.",
};

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    desc: "Every collected pickup is sorted and routed through certified recycling partners, preventing tonnes from entering overburdened landfills.",
  },
  {
    icon: Users,
    title: "People You Can Trust",
    desc: "Background-verified, courteous staff who arrive in clean uniform and handle waste safely with professional hygiene standards.",
  },
  {
    icon: Recycle,
    title: "Built for Everyday Convenience",
    desc: "Transparent flat-rate pricing and instant WhatsApp coordination — no confusing apps, credit systems, or complex contracts.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable by Design",
    desc: "Scheduled and tracked pickup slots ensure your residential or commercial bins are cleared punctually every single cycle.",
  },
];

export default function AboutPage() {
  const whatsappUrl = buildWhatsAppLink("Hi Bin Buddy! I'd like to learn more about your services.");

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-light/50 to-transparent py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-brand-light px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
            Our Mission &amp; Vision
          </span>
          <h1 className="mt-3 text-3xl font-black text-foreground sm:text-5xl">
            About Bin Buddy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-foreground/70 leading-relaxed">
            We started Bin Buddy with a clear goal: make everyday waste management effortless,
            transparent, and genuinely sustainable for modern homes and communities.
          </p>
        </div>
      </section>

      {/* Story Section with Visual Illustration */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left Text */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand">The Journey</div>
            <h2 className="mt-1 text-2xl font-black text-foreground sm:text-4xl">
              From Local Neighborhood to City-Wide Impact
            </h2>
            <div className="mt-4 space-y-4 text-sm sm:text-base text-foreground/70 leading-relaxed">
              <p>
                Bin Buddy began with a simple observation: millions of households want to segregate
                and recycle their waste, but municipal collection infrastructure often makes it tedious,
                unreliable, or confusing.
              </p>
              <p>
                We set out to remove every single friction point — pairing premium, purpose-built bins
                for every room with punctual, WhatsApp-coordinated doorstep pickups.
              </p>
              <p>
                Today, Bin Buddy proudly serves thousands of households, residential societies, and
                corporate offices across multiple cities, ensuring recyclable materials reach authorized
                recycling channels instead of ending up in landfills.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-black/10 pt-6">
              <div>
                <div className="text-3xl font-black text-brand">4,500+</div>
                <div className="text-xs font-medium text-foreground/60 sm:text-sm">Households Supported</div>
              </div>
              <div>
                <div className="text-3xl font-black text-brand">120+ Tons</div>
                <div className="text-xs font-medium text-foreground/60 sm:text-sm">Recycled Responsibly</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative overflow-hidden rounded-3xl border border-black/8 bg-white shadow-lg">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-50">
              <Image
                src="/images/about-story.svg"
                alt="Bin Buddy eco logistics mission"
                fill
                className="object-contain p-2 sm:p-4"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-black/5 bg-slate-50/70 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-brand">Core Values</div>
            <h2 className="mt-1 text-2xl font-black text-foreground sm:text-4xl">What We Stand For</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-foreground/60">
              The foundational principles guiding every pickup, customer interaction, and product we design.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand">
                  <v.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-foreground text-base sm:text-lg">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-foreground/65 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-14 sm:py-16 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center sm:px-6">
          <h2 className="text-2xl font-black sm:text-4xl">Join Thousands of Happy Homes</h2>
          <p className="max-w-md text-sm sm:text-base text-white/90">
            Take the first step toward a cleaner home and a cleaner planet today.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-dark shadow-md transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" /> Message on WhatsApp
            </a>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/20"
            >
              Shop Bins
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

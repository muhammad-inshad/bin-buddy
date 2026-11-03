import type { Metadata } from "next";
import Link from "next/link";
import BookPickupForm from "@/components/BookPickupForm";
import { CheckCircle2, ShieldCheck, Clock, ArrowRight, HelpCircle, Calendar, MessageCircle, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Waste Pickup in Kozhikode | Bin Friend",
  description:
    "Schedule a doorstep waste pickup or deep cleaning in Kozhikode (Calicut). Select your location, date, and confirm via WhatsApp with Mankavu operations.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book a Waste Pickup in Kozhikode | Bin Friend",
    description:
      "Easy doorstep waste collection booking across Kozhikode (Calicut). Punctual service with certified eco-recycling.",
    url: "https://warm-liger-7e5ba3.netlify.app/book",
    siteName: "Bin Friend",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Book a Waste Pickup in Kozhikode | Bin Friend",
    description:
      "Schedule a doorstep waste pickup or deep cleaning in Kozhikode (Calicut). Quick WhatsApp confirmation.",
  },
};

const bookingSteps = [
  {
    step: "01",
    title: "Select Service & Preferred Slot",
    desc: "Choose between household waste collection, scrap clearance, or home deep cleaning and select a convenient date.",
    icon: Calendar,
  },
  {
    step: "02",
    title: "Instant WhatsApp Coordination",
    desc: "We review your address in Kozhikode and confirm the exact arrival window from our Mankavu hub within 15 minutes.",
    icon: MessageCircle,
  },
  {
    step: "03",
    title: "Doorstep Pickup & Green Haulage",
    desc: "Our verified crew collects segregated waste on schedule, ensuring dry recyclables reach Kerala authorized channels.",
    icon: Truck,
  },
];

const bookableServices = [
  {
    name: "Doorstep Waste Pickup",
    desc: "Regular collection of household wet waste and dry recyclables across Calicut.",
    href: "/services/waste-pickup-kozhikode",
    badge: "Most Popular",
  },
  {
    name: "House Deep Cleaning",
    desc: "Professional sanitization for kitchens, bathrooms, floors, and move-in villas.",
    href: "/services/house-cleaning-kozhikode",
    badge: "Eco-Friendly",
  },
  {
    name: "Bulk Scrap & E-Waste Removal",
    desc: "One-time truck haulage for old appliances, cartons, metal scrap, and renovation debris.",
    href: "/services/waste-pickup-kozhikode",
    badge: "On Demand",
  },
];

const bookingFaqs = [
  {
    q: "Is advance payment required when booking online?",
    a: "No advance payment is needed. You can inspect the service or hand over your waste first, then pay easily via Google Pay, UPI, or cash directly upon pickup.",
  },
  {
    q: "Which neighborhoods in Kozhikode do you serve?",
    a: "Our logistics vehicles cover Mankavu, Mavoor Road, Nadakkavu, Chevayur, Palayam, Medical College, Thondayad, West Hill, Bilathikulam, Vellimadukunnu, and surrounding Calicut corporation wards daily.",
  },
  {
    q: "How do I reschedule or cancel my booking?",
    a: "Simply send a quick text to our WhatsApp support desk (+91 70250 34758) at least two hours before your scheduled time slot, and we will update your pickup without any cancellation fee.",
  },
];

export default function BookPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Page Header */}
      <div className="text-center">
        <span className="inline-block rounded-full bg-brand-light px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
          Doorstep Collection · Kozhikode
        </span>
        <h1 className="mt-3 text-3xl font-black text-foreground sm:text-5xl">
          Book Your Waste Pickup
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-foreground/85 leading-relaxed">
          Schedule a punctual doorstep waste collection or professional cleaning service in Kozhikode.
          Fill in your details below to receive instant confirmation via WhatsApp.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-foreground/85">
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> Confirmed within 15 mins
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> Verified Collection Crew
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> Certified Eco-Recycling
        </span>
      </div>

      {/* Interactive Booking Form */}
      <div className="mt-8">
        <BookPickupForm />
      </div>

      {/* H2 Section: Booking Workflow */}
      <section className="mt-16 border-t border-black/8 pt-12 sm:pt-16">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Easy 3-Step Process</span>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            How Our Kozhikode Doorstep Booking Works
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-foreground/80">
            Coordinating residential waste pickup and cleaning in Calicut is completely transparent with zero app downloads.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {bookingSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="mt-3 text-xs font-black text-brand/40 uppercase tracking-widest">
                  Step {step.step}
                </div>
                <h3 className="mt-1 text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* H2 Section: Services Overview */}
      <section className="mt-16 border-t border-black/8 pt-12 sm:pt-16">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Flexible Solutions</span>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Services You Can Schedule Online
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-foreground/80">
            Book individual household visits or explore dedicated multi-day collection packages.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {bookableServices.map((svc) => (
            <Link
              key={svc.name}
              href={svc.href}
              className="group flex flex-col justify-between rounded-2xl border border-black/8 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
            >
              <div>
                <span className="rounded-full bg-brand-light px-2.5 py-0.5 text-[11px] font-bold text-brand-dark">
                  {svc.badge}
                </span>
                <h3 className="mt-3 text-base font-bold text-foreground group-hover:text-brand transition-colors">
                  {svc.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                  {svc.desc}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-brand">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* H2 Section: Booking FAQs */}
      <section className="mt-16 border-t border-black/8 pt-12 sm:pt-16">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Got Questions?</span>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Frequently Asked Questions About Booking
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          {bookingFaqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-black/8 bg-slate-50/70 p-5 sm:p-6">
              <h3 className="flex items-center gap-2 text-sm sm:text-base font-bold text-foreground">
                <HelpCircle className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {faq.q}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

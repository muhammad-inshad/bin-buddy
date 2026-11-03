import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig, buildWhatsAppLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Bin Friend — Waste Pickup & Cleaning in Kozhikode",
  description:
    "Contact Bin Friend in Mankavu, Kozhikode (Calicut). Phone: +91 70250 34758, WhatsApp, email, or online inquiry for doorstep waste collection and deep cleaning services.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Bin Friend — Kozhikode Waste Management Hub",
    description:
      "Reach out to Bin Friend for doorstep waste pickups, scrap haulage, and house cleaning in Kozhikode. Mankavu hub support desk.",
    url: "https://warm-liger-7e5ba3.netlify.app/contact",
    siteName: "Bin Friend",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Bin Friend — Waste Pickup & Cleaning in Kozhikode",
    description:
      "Contact Bin Friend in Mankavu, Kozhikode. Phone: +91 70250 34758 or message directly on WhatsApp.",
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://warm-liger-7e5ba3.netlify.app/contact#webpage",
  name: "Contact Bin Friend",
  url: "https://warm-liger-7e5ba3.netlify.app/contact",
  description:
    "Official contact and support desk for Bin Friend waste pickup and house cleaning services in Kozhikode.",
  mainEntity: {
    "@id": "https://warm-liger-7e5ba3.netlify.app/#organization",
  },
};

export default function ContactPage() {
  const whatsappUrl = buildWhatsAppLink("Hi Bin Friend! I have a general query.");

  const info = [
    {
      icon: Phone,
      label: "Phone Support",
      value: siteConfig.phoneDisplay,
      href: `tel:+${siteConfig.whatsappNumber}`,
      isExternal: false,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      isExternal: false,
    },
    {
      icon: MapPin,
      label: "Service Hub (Mankavu, Calicut)",
      value: `${siteConfig.address} (Open in Maps)`,
      href: "https://www.google.com/maps/search/?api=1&query=Mankavu,+Kozhikode,+Kerala+673007",
      isExternal: true,
    },
    {
      icon: Clock,
      label: "Operational Hours",
      value: siteConfig.hours,
      href: undefined,
      isExternal: false,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Contact Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />

      {/* Header */}
      <div className="text-center">
        <span className="inline-block rounded-full bg-brand-light px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
          Get in Touch · Kozhikode Support Desk
        </span>
        <h1 className="mt-3 text-3xl font-black text-foreground sm:text-5xl">
          We&apos;re Here to Help
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-foreground/80">
          Questions about dustbins, booking an immediate pickup, or custom enterprise solutions?
          Reach out via the form or connect directly with our support team on WhatsApp.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-2 space-y-4">
          {info.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-2xl border border-black/8 bg-white p-5 shadow-sm transition-all hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                <item.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-foreground/75">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="mt-1 inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-foreground hover:text-brand transition-colors"
                  >
                    <span>{item.value}</span>
                    {item.isExternal && <ExternalLink className="h-3.5 w-3.5 text-brand" />}
                  </a>
                ) : (
                  <div className="mt-1 text-sm sm:text-base font-medium text-foreground">
                    {item.value}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Quick WhatsApp Support Box */}
          <div className="rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-light/60 to-emerald-50/50 p-5 shadow-sm">
            <div className="flex items-center gap-2 text-brand-dark font-bold text-sm">
              <MessageCircle className="h-4 w-4 text-brand" /> Fast Response via WhatsApp
            </div>
            <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed">
              Prefer chatting directly? Tap below to open a conversation with our Mankavu operations desk.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-dark"
            >
              <MessageCircle className="h-4 w-4" /> Message on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-3 rounded-3xl border border-black/8 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Send a Message</h2>
          <p className="mt-1 text-xs sm:text-sm text-foreground/60">
            Fill in your details and we&apos;ll get back to you within 2 business hours.
          </p>

          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

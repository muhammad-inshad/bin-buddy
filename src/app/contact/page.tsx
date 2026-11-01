import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig, buildWhatsAppLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us — Bin Buddy",
  description: "Get in touch with Bin Buddy for bins, pickups or custom waste management plans.",
};

export default function ContactPage() {
  const whatsappUrl = buildWhatsAppLink("Hi Bin Buddy! I have a general query.");

  const info = [
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phoneDisplay,
      href: `tel:+${siteConfig.whatsappNumber}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      label: "Service Hub",
      value: siteConfig.address,
      href: undefined,
    },
    {
      icon: Clock,
      label: "Operational Hours",
      value: siteConfig.hours,
      href: undefined,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="text-center">
        <span className="inline-block rounded-full bg-brand-light px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
          Get in Touch
        </span>
        <h1 className="mt-3 text-3xl font-black text-foreground sm:text-5xl">
          We&apos;re Here to Help
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-foreground/65">
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
                <div className="text-xs font-bold uppercase tracking-wider text-foreground/45">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block text-sm sm:text-base font-bold text-foreground hover:text-brand transition-colors truncate"
                  >
                    {item.value}
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
              Prefer chatting directly? Tap below to open a conversation with our operations desk.
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

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

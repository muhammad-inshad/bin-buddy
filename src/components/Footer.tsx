import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "@/components/SocialIcons";
import { siteConfig, buildWhatsAppLink } from "@/lib/config";

const YEAR = 2026;

export default function Footer() {
  const whatsappUrl = buildWhatsAppLink("Hi Bin Friend! I'd like to ask a question.");

  return (
    <footer className="border-t border-black/8 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
          <div>
            <Link href="/" aria-label="Bin Friend homepage" className="inline-flex items-center gap-2.5">
              <div className="relative h-9 w-9 overflow-hidden rounded-full shadow-sm shadow-brand/20">
                <Image
                  src="/icon.svg"
                  alt=""
                  aria-hidden="true"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-foreground">
                Bin<span className="text-brand">Friend</span>
              </span>
            </Link>
            <p className="mt-3.5 max-w-xs text-sm text-foreground/85 leading-relaxed">
              Durable dustbins and doorstep waste pickup, recycling, and cleaning services for cleaner homes and communities.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bin Friend on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 text-foreground/80 transition-colors hover:border-brand hover:bg-brand-light/50 hover:text-brand"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bin Friend on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 text-foreground/80 transition-colors hover:border-brand hover:bg-brand-light/50 hover:text-brand"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bin Friend on Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 text-foreground/80 transition-colors hover:border-brand hover:bg-brand-light/50 hover:text-brand"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-foreground">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm font-medium text-foreground/85">
              <li>
                <Link href="/shop" className="transition-colors hover:text-brand">
                  Shop Bins
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-brand">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/waste-pickup-kozhikode" className="transition-colors hover:text-brand font-medium">
                  Waste Pickup (Kozhikode)
                </Link>
              </li>
              <li>
                <Link href="/services/house-cleaning-kozhikode" className="transition-colors hover:text-brand font-medium">
                  House Cleaning (Kozhikode)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-brand">
                  Eco Guides &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-brand">
                  About Our Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-foreground">Booking &amp; Support</p>
            <ul className="mt-4 space-y-2.5 text-sm font-medium text-foreground/85">
              <li>
                <Link href="/book" className="transition-colors hover:text-brand">
                  Book Doorstep Pickup
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-brand">
                  Contact Customer Care
                </Link>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-dark font-semibold hover:underline"
                >
                  <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" /> WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-foreground">Get In Touch</p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/85">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="font-medium">{siteConfig.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="font-medium">{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 text-xs text-foreground/85 sm:flex-row">
          <div>© {YEAR} Bin Friend Private Limited. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Eco-Friendly Waste Solutions</span>
            <span>Zero Landfill Mission</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

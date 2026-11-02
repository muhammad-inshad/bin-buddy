"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { buildWhatsAppLink } from "@/lib/config";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop Bins" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = buildWhatsAppLink("Hi Bin Friend! I'd like to book a pickup.");

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-transform active:scale-95"
            onClick={() => setOpen(false)}
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full shadow-md shadow-brand/20">
              <Image
                src="/icon.svg"
                alt="Bin Friend Logo"
                width={40}
                height={40}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xl font-black tracking-tight text-foreground">
              Bin<span className="text-brand">Friend</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-brand ${
                  pathname === link.href ? "text-brand" : "text-foreground/75"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand-light/50 px-4 py-2 text-xs font-bold text-brand-dark transition-all hover:bg-brand-light active:scale-95"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
            <Link
              href="/book"
              className="rounded-full bg-brand px-5 py-2.5 text-xs font-bold text-white shadow-sm shadow-brand/20 transition-all hover:bg-brand-dark active:scale-95"
            >
              Book Pickup
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-foreground transition-colors hover:bg-brand-light hover:text-brand active:scale-95 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu (placed OUTSIDE <header> to prevent iOS Safari clipping) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          style={{ top: "65px" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full bg-white border-b border-black/10 rounded-b-3xl shadow-2xl px-5 py-6 max-h-[calc(100vh-80px)] overflow-y-auto space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Navigation Links */}
            <nav className="space-y-1" aria-label="Mobile navigation">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-all ${
                      isActive
                        ? "bg-brand text-white shadow-sm shadow-brand/20"
                        : "text-foreground hover:bg-slate-100"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="h-2 w-2 rounded-full bg-white" />}
                  </Link>
                );
              })}
            </nav>

            {/* Kozhikode Services Highlight */}
            <div className="pt-3 border-t border-black/5 space-y-1.5">
              <div className="px-4 text-xs font-bold uppercase tracking-wider text-brand">
                Kozhikode Services
              </div>
              <Link
                href="/services/waste-pickup-kozhikode"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                  pathname === "/services/waste-pickup-kozhikode"
                    ? "bg-brand text-white font-bold"
                    : "text-foreground hover:bg-emerald-50 bg-emerald-50/50"
                }`}
              >
                <span>Doorstep Waste Pickup (Kozhikode)</span>
                <span className="rounded-full bg-brand-light px-2 py-0.5 text-[11px] font-bold text-brand-dark">
                  Popular
                </span>
              </Link>
              <Link
                href="/services/house-cleaning-kozhikode"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                  pathname === "/services/house-cleaning-kozhikode"
                    ? "bg-brand text-white font-bold"
                    : "text-foreground hover:bg-slate-100"
                }`}
              >
                <span>House Cleaning (Kozhikode)</span>
              </Link>
            </div>

            {/* Action CTAs */}
            <div className="pt-3 border-t border-black/5 space-y-2.5">
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-brand py-3.5 text-center text-sm font-bold text-white shadow-md active:scale-95"
              >
                Book Pickup Form
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand/30 bg-white py-3 text-center text-sm font-bold text-brand-dark shadow-sm active:scale-95"
              >
                <MessageCircle className="h-4 w-4 text-brand" /> Message on WhatsApp
              </a>
            </div>

            {/* Hub info footer */}
            <div className="pt-2 text-center text-xs text-foreground/60">
              Hub: Mankavu, Kozhikode · Tel: +91 70250 34758
            </div>
          </div>
        </div>
      )}
    </>
  );
}

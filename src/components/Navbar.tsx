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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/95 backdrop-blur-md">
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
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/5 text-foreground transition-colors hover:bg-brand-light hover:text-brand active:scale-95 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[61px] z-50 flex flex-col bg-background/98 backdrop-blur-lg md:hidden">
          <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-1.5" aria-label="Mobile navigation">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-bold transition-all ${
                    isActive
                      ? "bg-brand text-white shadow-md shadow-brand/20"
                      : "text-foreground/80 hover:bg-brand-light/50 hover:text-brand"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-white" />}
                </Link>
              );
            })}

            <div className="pt-6 border-t border-black/10 mt-6 space-y-3">
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-2xl bg-brand py-3.5 text-center text-sm font-bold text-white shadow-md"
              >
                Book Pickup Form
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-brand/20 bg-white py-3.5 text-center text-sm font-bold text-brand-dark shadow-sm"
              >
                <MessageCircle className="h-4 w-4" /> Message on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

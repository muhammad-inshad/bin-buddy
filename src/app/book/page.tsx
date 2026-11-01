import type { Metadata } from "next";
import BookPickupForm from "@/components/BookPickupForm";
import { CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Pickup — Bin Buddy",
  description: "Book a waste pickup with Bin Buddy. Share your details and confirm instantly on WhatsApp.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="text-center">
        <span className="inline-block rounded-full bg-brand-light px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
          Doorstep Collection
        </span>
        <h1 className="mt-3 text-3xl font-black text-foreground sm:text-5xl">
          Book Your Waste Pickup
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm sm:text-base text-foreground/65">
          Fill in your details below. We will open WhatsApp with your booking details pre-formatted
          so you can confirm your pickup in one single tap.
        </p>
      </div>

      {/* Trust pill row */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-foreground/70">
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-brand" /> Confirmed within 15 mins
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-brand" /> Verified Collection Crew
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-brand" /> Certified Eco-Recycling
        </span>
      </div>

      <div className="mt-8">
        <BookPickupForm />
      </div>
    </div>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/config";
import { services } from "@/lib/services";

export default function BookPickupForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState(services[0].name);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !address.trim()) {
      setError("Please fill in your name, phone number and address.");
      return;
    }
    setError("");

    const lines = [
      `Hi Bin Friend! I'd like to book a pickup.`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Address:* ${address}`,
      `*Service:* ${service}`,
    ];
    if (date) lines.push(`*Preferred date:* ${date}`);
    if (notes.trim()) lines.push(`*Notes:* ${notes.trim()}`);

    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-black/8 bg-white p-5 sm:p-8 shadow-sm"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-foreground">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="mt-1.5 w-full min-h-[44px] rounded-xl border border-black/10 px-3.5 py-2.5 text-base sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-foreground">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 98765 43210"
            required
            className="mt-1.5 w-full min-h-[44px] rounded-xl border border-black/10 px-3.5 py-2.5 text-base sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-xs sm:text-sm font-semibold text-foreground">
          Pickup address <span className="text-red-500">*</span>
        </label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="House / flat no., building, street, area, pincode"
          rows={3}
          required
          className="mt-1.5 w-full rounded-xl border border-black/10 px-3.5 py-2.5 text-base sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 leading-relaxed"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="block text-xs sm:text-sm font-semibold text-foreground">
            Service
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-1.5 w-full min-h-[44px] rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-base sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
          >
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name} ({s.priceLabel})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-xs sm:text-sm font-semibold text-foreground">
            Preferred date (optional)
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1.5 w-full min-h-[44px] rounded-xl border border-black/10 px-3.5 py-2.5 text-base sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-xs sm:text-sm font-semibold text-foreground">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="e.g. 2nd floor, elevator available, special items..."
          rows={2}
          className="mt-1.5 w-full rounded-xl border border-black/10 px-3.5 py-2.5 text-base sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      {error && (
        <div className="rounded-xl bg-red-50 p-3 text-xs sm:text-sm font-medium text-red-600">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="flex w-full min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-dark active:scale-[0.99]"
      >
        <MessageCircle className="h-5 w-5" />
        Continue to Confirm on WhatsApp
      </button>

      <p className="text-center text-xs text-foreground/50">
        We will open WhatsApp with your details cleanly pre-filled — just tap send to confirm your slot!
      </p>
    </form>
  );
}

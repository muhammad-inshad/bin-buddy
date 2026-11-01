"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/config";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Please fill in your name, phone number and message.");
      return;
    }
    setError("");

    const text = [
      `Hi Bin Buddy! I have an inquiry.`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Message:* ${message}`,
    ].join("\n");

    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-black/8 bg-white p-5 sm:p-8 shadow-sm"
    >
      <div>
        <label htmlFor="c-name" className="block text-xs sm:text-sm font-semibold text-foreground">
          Full name <span className="text-red-500">*</span>
        </label>
        <input
          id="c-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="mt-1.5 w-full min-h-[44px] rounded-xl border border-black/10 px-3.5 py-2.5 text-base sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <div>
        <label htmlFor="c-phone" className="block text-xs sm:text-sm font-semibold text-foreground">
          Phone number <span className="text-red-500">*</span>
        </label>
        <input
          id="c-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. 98765 43210"
          required
          className="mt-1.5 w-full min-h-[44px] rounded-xl border border-black/10 px-3.5 py-2.5 text-base sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <div>
        <label htmlFor="c-message" className="block text-xs sm:text-sm font-semibold text-foreground">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="c-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help? (e.g. bulk dustbins inquiry, society waste plan, pickup scheduling)"
          rows={4}
          required
          className="mt-1.5 w-full rounded-xl border border-black/10 px-3.5 py-2.5 text-base sm:text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 leading-relaxed"
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
        Send Message on WhatsApp
      </button>

      <p className="text-center text-xs text-foreground/75">
        Our customer support team typically responds within a few minutes during business hours.
      </p>
    </form>
  );
}

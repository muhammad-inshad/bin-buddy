"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/config";
import type { Product } from "@/lib/products";
import { trackEvent } from "@/lib/gtm";

export default function BuyNowButton({ product, className }: { product: Product; className?: string }) {
  function handleClick() {
    trackEvent("begin_checkout", {
      item_name: product.name,
      price: product.price,
      currency: "INR",
      capacity: product.capacity,
    });

    const message = `Hi Bin Friend! I'd like to buy the *${product.name}* (${product.capacity}) priced at ₹${product.price}. Please share payment & delivery details.`;
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Buy ${product.name} on WhatsApp`}
      className={
        className ??
        "inline-flex items-center justify-center gap-1.5 rounded-full bg-brand px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-dark active:scale-95"
      }
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      Buy Now
    </button>
  );
}

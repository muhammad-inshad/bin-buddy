"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/config";
import type { Product } from "@/lib/products";

export default function BuyNowButton({ product, className }: { product: Product; className?: string }) {
  function handleClick() {
    const message = `Hi Bin Friend! I'd like to buy the *${product.name}* (${product.capacity}) priced at ₹${product.price}. Please share payment & delivery details.`;
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <button
      onClick={handleClick}
      className={
        className ??
        "inline-flex items-center justify-center gap-1.5 rounded-full bg-brand px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-dark active:scale-95"
      }
    >
      <MessageCircle className="h-4 w-4" />
      Buy Now
    </button>
  );
}

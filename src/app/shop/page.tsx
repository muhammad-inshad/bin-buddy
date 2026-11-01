import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { ShieldCheck, Truck, RefreshCw, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop Bins — Bin Buddy",
  description: "Browse Bin Buddy's range of dustbins — from compact bedroom bins to outdoor wheelie bins.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="text-center">
        <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
          Product Catalog
        </span>
        <h1 className="mt-3 text-3xl font-black text-foreground sm:text-5xl">
          Shop Quality Dustbins
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-foreground/65">
          Durable bins designed for clean aesthetics, hygienic hands-free operation, and long-lasting utility.
          Tap Buy Now to confirm orders instantly on WhatsApp.
        </p>
      </div>

      {/* Trust bar */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm text-xs sm:text-sm font-medium text-foreground/75">
        <div className="flex items-center gap-2">
          <Truck className="h-4 w-4 shrink-0 text-brand" />
          <span>Fast Doorstep Delivery</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 shrink-0 text-brand" />
          <span>Heavy-Duty Plastic</span>
        </div>
        <div className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4 shrink-0 text-brand" />
          <span>Easy 7-Day Exchange</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 shrink-0 text-brand" />
          <span>Instant WhatsApp Order</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}

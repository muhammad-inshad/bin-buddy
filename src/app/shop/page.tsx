import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { ShieldCheck, Truck, RefreshCw, MessageSquare, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop Premium Dustbins & Recycling Bins in Kozhikode | Bin Friend",
  description:
    "Buy durable, odour-resistant dustbins, pedal bins, swing bins, and heavy-duty outdoor wheelie bins in Kozhikode (Calicut) with fast doorstep delivery.",
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "Shop Premium Dustbins & Recycling Bins | Bin Friend",
    description:
      "Durable household and commercial waste bins in Kozhikode. Fast delivery across Kerala.",
    url: "https://warm-liger-7e5ba3.netlify.app/shop",
    siteName: "Bin Friend",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Shop Premium Dustbins in Kozhikode | Bin Friend",
    description:
      "Buy durable dustbins and recycling bins with fast doorstep delivery across Kozhikode.",
  },
};

const shopJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.name,
    description: product.description,
    image: `https://warm-liger-7e5ba3.netlify.app${product.image}`,
    offers: {
      "@type": "Offer",
      price: product.price.toString(),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  })),
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Product Catalog Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopJsonLd) }}
      />

      {/* Header */}
      <div className="text-center">
        <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
          Product Catalog · Kozhikode Delivery
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

      {/* H2 Section: Main Products Collection */}
      <section className="mt-10">
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Available Waste & Recycling Bins
          </h2>
          <span className="text-xs font-semibold text-foreground/60">
            {products.length} Products Available
          </span>
        </div>

        {/* Products Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* H2 Section: Why Choose Our Bins */}
      <section className="mt-16 rounded-2xl border border-black/5 bg-slate-50 p-6 sm:p-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Why Buy Household Bins from Bin Friend?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-foreground/70">
            Specially selected models designed for Kozhikode homes, apartments, and commercial hubs.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <CheckCircle className="h-5 w-5 text-brand mb-2" />
            <h3 className="font-bold text-sm text-foreground">Odour-Sealed Lids</h3>
            <p className="mt-1 text-xs text-foreground/70">Prevents unpleasant smells from spreading indoors.</p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <CheckCircle className="h-5 w-5 text-brand mb-2" />
            <h3 className="font-bold text-sm text-foreground">Hands-Free Pedal Bins</h3>
            <p className="mt-1 text-xs text-foreground/70">Hygienic foot pedal operation for kitchen waste.</p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <CheckCircle className="h-5 w-5 text-brand mb-2" />
            <h3 className="font-bold text-sm text-foreground">Local Calicut Hub</h3>
            <p className="mt-1 text-xs text-foreground/70">Dispatched directly from our Mankavu warehouse.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
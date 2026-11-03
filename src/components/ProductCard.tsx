import Image from "next/image";
import BuyNowButton from "@/components/BuyNowButton";
import type { Product } from "@/lib/products";
import { Check } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image Area */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={`${product.name} - ${product.capacity} waste bin`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Capacity badge */}
        <div className="absolute right-3 top-3">
          <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-dark shadow-sm backdrop-blur">
            {product.capacity}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-brand transition-colors">
            {product.name}
          </h3>
        </div>

        <p className="mt-2 flex-1 text-sm text-foreground/85 leading-relaxed">
          {product.description}
        </p>

        {/* Feature Pills */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {product.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="inline-flex items-center gap-1 rounded-md bg-brand-light/80 px-2 py-0.5 text-xs font-semibold text-brand-dark"
            >
              <Check className="h-3 w-3 text-brand" aria-hidden="true" />
              {f}
            </span>
          ))}
        </div>

        {/* Price & Action */}
        <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-foreground/75 font-semibold">Price</div>
            <div className="text-xl font-black text-foreground">
              ₹{product.price.toLocaleString("en-IN")}
            </div>
          </div>
          <BuyNowButton product={product} />
        </div>
      </div>
    </div>
  );
}

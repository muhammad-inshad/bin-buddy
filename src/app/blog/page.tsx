import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Kozhikode Waste Management Blog & Eco Guides — Bin Friend",
  description:
    "Expert tips on waste segregation in Kozhikode (Calicut), home composting in Kerala's climate, bin sizing, and local green waste guidelines.",
  keywords: [
    "kozhikode waste management blog",
    "waste segregation calicut",
    "composting kerala",
    "bin friend eco guides",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Kozhikode Waste Management Blog & Eco Guides — Bin Friend",
    description:
      "Expert waste segregation and home cleaning guides for Kozhikode (Calicut) residents.",
    url: "https://warm-liger-7e5ba3.netlify.app/blog",
    siteName: "Bin Friend",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kozhikode Waste Management Blog & Eco Guides — Bin Friend",
    description:
      "Expert tips on waste segregation and deep cleaning in Kozhikode (Calicut).",
  },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="text-center">
        <span className="inline-block rounded-full bg-brand-light px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
          Kozhikode Eco Guides &amp; Tips
        </span>
        <h1 className="mt-3 text-3xl font-black text-foreground sm:text-5xl">
          Bin Friend Eco Blog
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-foreground/65">
          Practical advice for Kozhikode households: waste segregation, odour-free composting in Kerala&apos;s climate, bin sizing, and eco-friendly home living.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-3xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Blog Image */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4">
                <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-dark shadow-sm backdrop-blur">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="flex items-center gap-3 text-xs text-foreground/50">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" />
                  {post.author}
                </span>
              </div>

              <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand sm:text-2xl">
                {post.title}
              </h2>

              <p className="mt-3 flex-1 text-sm text-foreground/65 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-brand group-hover:translate-x-1 transition-transform">
                Read full guide <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

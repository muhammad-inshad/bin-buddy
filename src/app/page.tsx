import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Truck, Recycle, Leaf, Sparkles, MessageCircle } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import { products } from "@/lib/products";
import { services } from "@/lib/services";
import { buildWhatsAppLink } from "@/lib/config";

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const whatsappUrl = buildWhatsAppLink("Hi Bin Friend! I'd like to book a doorstep waste pickup.");

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/50 via-brand-light/20 to-transparent py-12 sm:py-16 md:py-24">
        {/* Decorative blur circles */}
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-brand-dark shadow-sm backdrop-blur">
                <Leaf className="h-3.5 w-3.5 text-brand" /> Serving Kozhikode (Calicut) &amp; Kerala
              </div>

              <h1 className="mt-5 text-3xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl sm:leading-[1.12]">
                Bins that fit your home. <br />
                <span className="text-brand bg-gradient-to-r from-brand to-emerald-600 bg-clip-text text-transparent">
                  Pickups that fit your life.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-base sm:text-lg text-foreground/70 leading-relaxed">
                Bin Friend sells premium dustbins and provides doorstep waste pickup, garbage collection,
                and deep cleaning services across Kozhikode — all coordinated effortlessly via WhatsApp.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Link
                  href="/services/waste-pickup-kozhikode"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-brand/20 transition-all hover:bg-brand-dark hover:shadow-lg active:scale-95"
                >
                  Kozhikode Waste Pickup <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand/30 bg-white px-7 py-3.5 text-sm font-bold text-brand-dark transition-all hover:border-brand hover:bg-brand-light/50 active:scale-95 shadow-sm"
                >
                  <MessageCircle className="h-4 w-4 text-brand" /> Book on WhatsApp
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-foreground/75">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> Doorstep collection in Kozhikode
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> 100% verified recycling
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> Based in Mankavu, Calicut
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Featured Showcase Card */}
                <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-3 shadow-xl sm:p-4">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src="/images/service-home-waste-pickup.jpg"
                      alt="Doorstep Waste Pickup in action"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div>
                        <div className="text-xs uppercase tracking-wider font-semibold text-emerald-300">Doorstep Collection</div>
                        <div className="text-sm font-bold sm:text-base">Reliable Home Waste Pickup</div>
                      </div>
                      <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow">
                        Active
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Row: Featured Products */}
                  <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                    {featuredProducts.map((p) => (
                      <Link
                        key={p.slug}
                        href="/shop"
                        className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-black/5 bg-slate-50 p-2 text-center transition-all hover:bg-brand-light/30 hover:border-brand/30"
                      >
                        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-white">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="120px"
                          />
                        </div>
                        <span className="mt-1.5 truncate text-[11px] font-semibold text-foreground">
                          {p.name}
                        </span>
                        <span className="text-[10px] font-bold text-brand">₹{p.price}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Floating Social Proof Pill */}
                <div className="absolute -bottom-4 -left-3 sm:-left-6 flex items-center gap-3 rounded-2xl border border-black/5 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-brand">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-foreground">Local Mankavu Team</div>
                    <div className="text-[11px] text-foreground/60">Serving Kozhikode Homes Daily</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Local Service Strip */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-4 sm:gap-6 sm:px-6 sm:py-10">
          {[
            { label: "Central Operations Hub", value: "Mankavu" },
            { label: "Booking via WhatsApp", value: "< 5 Mins" },
            { label: "Core Service Zone", value: "Kozhikode" },
            { label: "Material Recycling", value: "100% Green" },
          ].map((s) => (
            <div key={s.label} className="text-center p-2">
              <div className="text-2xl font-black text-brand sm:text-3xl lg:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-foreground/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand">Collection Catalog</div>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-foreground sm:text-4xl">
              Popular Bins for Every Space
            </h2>
            <p className="mt-2 text-sm text-foreground/60">
              Durable, odour-resistant dustbins crafted for compact bathrooms to full outdoor yards.
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-dark sm:inline-flex"
          >
            View all bins <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-6 py-3 text-sm font-semibold text-brand"
          >
            View all {products.length} bins <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-slate-50/80 border-y border-black/5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand">Doorstep Solutions</div>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-foreground sm:text-4xl">
                Waste &amp; Cleaning Services
              </h2>
              <p className="mt-2 text-sm text-foreground/60">
                From a weekly segregated pickup to full house deep cleaning and yard debris removal.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-dark sm:inline-flex"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-6 py-3 text-sm font-semibold text-brand"
            >
              View all {services.length} services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-brand">Simple Workflow</div>
          <h2 className="mt-1 text-2xl font-black text-foreground sm:text-4xl">How Bin Friend Works</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-foreground/60">
            Booking a pickup takes under 60 seconds with no complex apps or long sign-ups.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              step: "01",
              icon: Truck,
              title: "1. Pick a slot on WhatsApp",
              desc: "Choose a service, share your pickup address and pick your preferred time.",
            },
            {
              step: "02",
              icon: Recycle,
              title: "2. We arrive on time",
              desc: "Our verified, friendly collection team collects and hauls everything from your door.",
            },
            {
              step: "03",
              icon: Leaf,
              title: "3. 100% certified recycling",
              desc: "Collected waste is segregated and recycled through authorized green facilities.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm sm:p-8"
            >
              <div className="absolute right-4 top-4 text-xs font-black text-brand/20 sm:text-sm">
                STEP {item.step}
              </div>
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-bold text-foreground sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* High-impact CTA Section */}
      <section className="bg-gradient-to-r from-brand-dark to-brand py-14 sm:py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center sm:px-6 text-white">
          <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
            Fast WhatsApp Response
          </span>
          <h2 className="text-2xl font-black sm:text-4xl md:text-5xl">
            Ready for a cleaner, fresher home?
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-white/90">
            Order your new dustbin or schedule a doorstep waste collection in under a minute.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-dark shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-4 w-4 text-brand" /> Chat on WhatsApp
            </a>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Browse Shop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

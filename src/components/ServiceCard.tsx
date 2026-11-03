import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import type { Service } from "@/lib/services";
import { buildWhatsAppLink } from "@/lib/config";

export default function ServiceCard({ service }: { service: Service }) {
  const whatsappUrl = buildWhatsAppLink(
    `Hi Bin Friend! I'd like to book the "${service.name}" service (${service.priceLabel}). Could you share available slots?`
  );

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Service Image Header */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Floating Icon badge */}
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-md">
            <ServiceIcon icon={service.icon} className="h-5 w-5" />
          </span>
          <span className="rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
            {service.priceLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors">
          {service.name}
        </h3>
        <p className="mt-2 text-sm text-foreground/85 leading-relaxed">
          {service.description}
        </p>

        {/* Feature details */}
        {service.details && service.details.length > 0 && (
          <ul className="mt-4 space-y-2 border-t border-black/5 pt-4 text-xs text-foreground/85">
            {service.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Button */}
        <div className="mt-5 flex items-center gap-2 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl bg-brand px-4 py-2.5 text-center text-xs font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            Book on WhatsApp
          </a>
          <Link
            href="/book"
            aria-label={`Book ${service.name} online form`}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 text-foreground/80 transition-colors hover:bg-brand-light hover:text-brand"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

import type { BinVariant } from "@/lib/products";

interface Props {
  color: string;
  variant: BinVariant;
  className?: string;
}

function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.min(255, Math.max(0, (n >> 16) + amt));
  const g = Math.min(255, Math.max(0, ((n >> 8) & 0xff) + amt));
  const b = Math.min(255, Math.max(0, (n & 0xff) + amt));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export default function BinIllustration({ color, variant, className }: Props) {
  const dark = shade(color, -35);
  const light = shade(color, 35);

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Bin illustration">
      <ellipse cx="100" cy="178" rx="52" ry="8" fill="#000000" opacity="0.06" />

      {variant === "wheelie" && (
        <>
          <circle cx="76" cy="172" r="10" fill="#1f2937" />
          <circle cx="124" cy="172" r="10" fill="#1f2937" />
        </>
      )}

      <path
        d={
          variant === "large"
            ? "M55 75 L62 175 Q100 184 138 175 L145 75 Z"
            : "M60 72 L66 170 Q100 178 134 170 L140 72 Z"
        }
        fill={color}
      />
      <path
        d={
          variant === "large"
            ? "M55 75 L145 75 L140 95 Q100 101 60 95 Z"
            : "M60 72 L140 72 L136 90 Q100 96 64 90 Z"
        }
        fill={dark}
        opacity="0.35"
      />

      {(variant === "basic" || variant === "large" || variant === "wheelie") && (
        <>
          <rect x="66" y="105" width="68" height="6" rx="3" fill={light} opacity="0.5" />
          <rect x="66" y="122" width="68" height="6" rx="3" fill={light} opacity="0.5" />
        </>
      )}

      {variant === "large" && (
        <>
          <rect x="48" y="90" width="7" height="22" rx="3" fill={dark} />
          <rect x="145" y="90" width="7" height="22" rx="3" fill={dark} />
        </>
      )}

      {variant === "compost" && (
        <g transform="translate(100,135)">
          <path
            d="M0 -14 C10 -14 16 -6 16 2 C16 10 8 16 0 16 C-8 16 -16 10 -16 2 C-16 -6 -10 -14 0 -14 Z"
            fill={light}
            opacity="0.8"
          />
          <path d="M0 -10 L0 14" stroke={dark} strokeWidth="2" opacity="0.6" />
        </g>
      )}

      {variant === "swing" && (
        <>
          <path d="M60 72 L100 72 L97 92 L64 90 Z" fill={dark} opacity="0.45" />
          <path d="M103 72 L140 72 L136 90 L100 92 Z" fill={dark} opacity="0.2" />
        </>
      )}

      {variant === "pedal" ? (
        <>
          <ellipse cx="100" cy="66" rx="42" ry="10" fill={dark} />
          <ellipse cx="100" cy="62" rx="40" ry="9" fill={light} />
          <rect x="96" y="76" width="8" height="96" rx="2" fill={dark} opacity="0.4" />
          <path d="M94 172 L94 184 L128 184 L108 172 Z" fill="#374151" />
          <rect x="88" y="182" width="46" height="6" rx="3" fill="#1f2937" />
        </>
      ) : (
        <ellipse cx="100" cy="72" rx="42" ry="10" fill={dark} />
      )}

      {variant !== "pedal" && <ellipse cx="100" cy="68" rx="40" ry="9" fill={light} />}

      <rect x="64" y="40" width="72" height="22" rx="8" fill={color} />
      <rect x="64" y="40" width="72" height="9" rx="4" fill={light} opacity="0.6" />
    </svg>
  );
}

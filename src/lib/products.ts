export type BinVariant = "basic" | "pedal" | "wheelie" | "compost" | "swing" | "large";

export interface Product {
  slug: string;
  name: string;
  capacity: string;
  price: number;
  description: string;
  features: string[];
  color: string; // tailwind-ish hex used by theme accents
  variant: BinVariant;
  image: string;
}

export const products: Product[] = [
  {
    slug: "small-dustbin",
    name: "Small Dustbin",
    capacity: "5 L",
    price: 199,
    description:
      "A compact bin for bedrooms, bathrooms and study tables. Light, easy to empty, and sized to fit tight corners.",
    features: ["5 litre capacity", "Swing lid", "Fits under desks", "Durable plastic"],
    color: "#16a34a",
    variant: "swing",
    image: "/images/small-dustbin.webp",
  },
  {
    slug: "medium-dustbin",
    name: "Medium Dustbin",
    capacity: "15 L",
    price: 349,
    description:
      "The everyday bin for kitchens and living rooms. Balanced size that doesn't fill up too fast or take up too much space.",
    features: ["15 litre capacity", "Flip-top lid", "Washable liner", "Odour resistant"],
    color: "#059669",
    variant: "basic",
    image: "/images/medium-dustbin.webp",
  },
  {
    slug: "large-dustbin",
    name: "Large Dustbin",
    capacity: "30 L",
    price: 599,
    description:
      "Built for busy households and small shops. Handles a full day of waste without overflowing.",
    features: ["30 litre capacity", "Reinforced base", "Side handles", "Heavy-duty build"],
    color: "#15803d",
    variant: "large",
    image: "/images/large-dustbin.webp",
  },
  {
    slug: "pedal-dustbin",
    name: "Pedal Dustbin",
    capacity: "10 L",
    price: 449,
    description:
      "Hands-free, hygienic bin with a smooth foot-pedal mechanism. Ideal for kitchens and clinics.",
    features: ["10 litre capacity", "Foot pedal lid", "Soft-close hinge", "Rust-proof pedal arm"],
    color: "#0d9488",
    variant: "pedal",
    image: "/images/pedal-dustbin.webp",
  },
  {
    slug: "kitchen-compost-bin",
    name: "Kitchen Compost Bin",
    capacity: "8 L",
    price: 399,
    description:
      "Keep food scraps separate and odour-free. Comes with a charcoal filter to keep your kitchen smelling fresh.",
    features: ["8 litre capacity", "Charcoal filter lid", "Leak-proof seal", "Compost-ready"],
    color: "#65a30d",
    variant: "compost",
    image: "/images/kitchen-compost-bin.webp",
  },
  {
    slug: "outdoor-wheelie-bin",
    name: "Outdoor Wheelie Bin",
    capacity: "120 L",
    price: 1999,
    description:
      "Heavy-duty wheeled bin for homes, gated communities and offices. Built to handle a full week of outdoor waste.",
    features: ["120 litre capacity", "2 wheels for easy transport", "Lockable lid", "UV-resistant body"],
    color: "#166534",
    variant: "wheelie",
    image: "/images/outdoor-wheelie-bin.webp",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

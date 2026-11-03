export interface Service {
  slug: string;
  name: string;
  description: string;
  priceLabel: string;
  icon: "truck" | "recycle" | "home" | "trees" | "sofa" | "building";
  details: string[];
  image: string;
}

export const services: Service[] = [
  {
    slug: "home-waste-pickup",
    name: "Home Waste Pickup",
    description: "Scheduled doorstep collection — daily, weekly or on demand.",
    priceLabel: "from ₹199/visit",
    icon: "truck",
    image: "/images/service-home-waste-pickup.webp",
    details: [
      "Flexible daily, weekly or on-call pickup slots",
      "Segregated wet & dry waste collection",
      "SMS/WhatsApp reminders before every pickup",
    ],
  },
  {
    slug: "recycling-collection",
    name: "Recycling Collection",
    description: "Plastic, paper, metal and e-waste collected and recycled responsibly.",
    priceLabel: "from ₹149/visit",
    icon: "recycle",
    image: "/images/service-recycling-collection.webp",
    details: [
      "Separate collection for plastic, paper, metal & e-waste",
      "Certified recycling partners",
      "Monthly recycling impact summary",
    ],
  },
  {
    slug: "house-deep-cleaning",
    name: "House Deep Cleaning",
    description: "Full home cleaning — kitchen, bathrooms, floors and more.",
    priceLabel: "from ₹2,499",
    icon: "home",
    image: "/images/service-house-deep-cleaning.webp",
    details: [
      "Kitchen, bathroom, floor & window cleaning",
      "Eco-friendly cleaning products",
      "Trained & background-verified staff",
    ],
  },
  {
    slug: "yard-plot-clearing",
    name: "Yard & Plot Clearing",
    description: "Remove debris, overgrowth and garden waste from your property.",
    priceLabel: "from ₹3,999",
    icon: "trees",
    image: "/images/service-yard-plot-clearing.webp",
    details: [
      "Overgrowth, debris & garden waste removal",
      "Suitable for plots, farmhouses & vacant land",
      "Green waste composted, not dumped",
    ],
  },
  {
    slug: "bulk-junk-removal",
    name: "Bulk Junk Removal",
    description: "Old furniture, appliances and renovation waste hauled away.",
    priceLabel: "from ₹999",
    icon: "sofa",
    image: "/images/service-bulk-junk-removal.svg",
    details: [
      "Furniture, appliance & e-waste haulage",
      "Renovation & construction debris removal",
      "Same-week pickup slots available",
    ],
  },
  {
    slug: "office-commercial",
    name: "Office & Commercial",
    description: "Waste management plans for shops, offices and apartments.",
    priceLabel: "Custom quote",
    icon: "building",
    image: "/images/service-office-commercial.svg",
    details: [
      "Custom pickup schedules for businesses",
      "Compliance-ready waste documentation",
      "Dedicated account support",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

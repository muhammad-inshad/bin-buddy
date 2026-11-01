export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  category: string;
  color: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-tips-to-segregate-waste-at-home",
    title: "5 Simple Tips to Segregate Waste at Home",
    excerpt:
      "Waste segregation doesn't need extra effort once you set up the right bins. Here's how to get it right from day one.",
    date: "2026-09-02",
    author: "Bin Buddy Team",
    category: "Home Tips",
    color: "#16a34a",
    image: "/images/blog-segregation.svg",
    content: [
      "Segregating waste at the source is the single biggest thing a household can do to help recycling actually work.",
      "1. Keep a dedicated wet-waste bin in the kitchen with a liner you can tie and lift out easily.",
      "2. Place a dry-waste bin (paper, plastic, metal) somewhere equally convenient — not tucked away outside.",
      "3. Rinse containers before tossing them in the recycling bin; food residue contaminates entire batches.",
      "4. Use a small bin for e-waste and batteries — never mix these with regular trash.",
      "5. Schedule a regular pickup so bins don't overflow and segregation habits don't break down.",
      "A Bin Buddy pickup plan takes care of step five automatically — book a slot and we handle the rest.",
    ],
  },
  {
    slug: "why-composting-matters",
    title: "Why Composting Your Kitchen Waste Matters",
    excerpt:
      "Nearly half of household waste is organic. Composting it keeps landfills lighter and your garden healthier.",
    date: "2026-08-14",
    author: "Bin Buddy Team",
    category: "Sustainability",
    color: "#65a30d",
    image: "/images/blog-compost.svg",
    content: [
      "Organic waste that ends up in a landfill doesn't compost — it rots without oxygen and releases methane, a potent greenhouse gas.",
      "A dedicated compost bin keeps food scraps aerated and odour-controlled, turning them into usable compost in weeks.",
      "Start small: vegetable peels, tea leaves and eggshells are the easiest to compost and make up most kitchen waste.",
      "Our Kitchen Compost Bin comes with a charcoal filter lid specifically to make this an indoor-friendly habit.",
    ],
  },
  {
    slug: "choosing-the-right-bin-size",
    title: "How to Choose the Right Bin Size for Your Home",
    excerpt:
      "Too small and it overflows daily. Too large and it attracts odour. Here's a quick guide to sizing bins correctly.",
    date: "2026-07-22",
    author: "Bin Buddy Team",
    category: "Buying Guide",
    color: "#0d9488",
    image: "/images/blog-bin-sizes.svg",
    content: [
      "A single person in a studio apartment rarely needs more than a 5–10 litre bin per room.",
      "Families of 3–4 usually do well with a 15–30 litre bin in the kitchen, plus smaller bins elsewhere in the home.",
      "If you have outdoor space and weekly municipal collection, a 120 litre wheelie bin avoids daily indoor trips entirely.",
      "When in doubt, size up slightly rather than down — an overflowing bin is a bigger problem than a half-full one.",
    ],
  },
  {
    slug: "office-waste-management-basics",
    title: "Office Waste Management: Where to Start",
    excerpt:
      "Offices generate more paper and e-waste than homes. A simple pickup schedule prevents it from piling up unnoticed.",
    date: "2026-06-30",
    author: "Bin Buddy Team",
    category: "Business",
    color: "#15803d",
    image: "/images/blog-office.svg",
    content: [
      "Shared office bins fill up fast and are often the most neglected part of facility management.",
      "Start by placing clearly labelled bins for paper, plastic and general waste near high-traffic areas like the pantry.",
      "E-waste — old cables, chargers, broken peripherals — should be collected separately and picked up periodically, not thrown in general trash.",
      "A scheduled commercial pickup plan removes the guesswork and keeps your office audit-ready for compliance checks.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

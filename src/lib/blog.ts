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
    title: "5 Simple Tips to Segregate Waste at Home (Kozhikode Guide)",
    excerpt:
      "Waste segregation doesn't need extra effort once you set up the right bins. Here's a practical guide for Kozhikode households.",
    date: "2026-09-02",
    author: "Bin Friend Team",
    category: "Home Tips",
    color: "#16a34a",
    image: "/images/blog-segregation.svg",
    content: [
      "Segregating waste at the source is the single biggest thing a household in Kozhikode can do to keep our city clean and green.",
      "1. Keep a dedicated wet-waste bin in the kitchen with a liner you can tie and lift out easily.",
      "2. Place a dry-waste bin (paper, plastic, metal) somewhere equally convenient — not tucked away outside.",
      "3. Rinse containers before tossing them in the recycling bin; food residue contaminates entire batches.",
      "4. Use a small bin for e-waste and batteries — never mix these with regular trash.",
      "5. Schedule a regular pickup so bins don't overflow and segregation habits don't break down.",
      "For Kozhikode families, Bin Friend offers scheduled doorstep pickup across Mankavu, Mavoor Road, Nadakkavu, and surrounding areas so you never have overflowing bins.",
    ],
  },
  {
    slug: "why-composting-matters",
    title: "Why Composting Your Kitchen Waste Matters in Kerala",
    excerpt:
      "Nearly half of household waste in Kozhikode is organic. Composting keeps Calicut landfills lighter and gardens healthier.",
    date: "2026-08-14",
    author: "Bin Friend Team",
    category: "Sustainability",
    color: "#65a30d",
    image: "/images/blog-compost.svg",
    content: [
      "In Kerala's humid climate, organic kitchen waste that ends up in a landfill rots without oxygen and releases greenhouse gases.",
      "A dedicated compost bin keeps food scraps aerated and odour-controlled, turning them into rich organic compost in weeks.",
      "Start small: vegetable peels, tea leaves and eggshells are the easiest to compost and make up most kitchen waste in Kozhikode households.",
      "Our Kitchen Compost Bin comes with a charcoal filter lid specifically to make indoor composting easy and completely odour-free.",
    ],
  },
  {
    slug: "choosing-the-right-bin-size",
    title: "How to Choose the Right Bin Size for Your Home",
    excerpt:
      "Too small and it overflows daily. Too large and it attracts odour. Here's a quick guide to sizing bins correctly.",
    date: "2026-07-22",
    author: "Bin Friend Team",
    category: "Buying Guide",
    color: "#0d9488",
    image: "/images/blog-bin-sizes.svg",
    content: [
      "A single person in a studio apartment rarely needs more than a 5–10 litre bin per room.",
      "Families of 3–4 usually do well with a 15–30 litre bin in the kitchen, plus smaller bins elsewhere in the home.",
      "If you have outdoor space and weekly collection in Kozhikode, a 120 litre wheelie bin avoids daily indoor trips entirely.",
      "When in doubt, size up slightly rather than down — an overflowing bin is a bigger problem than a half-full one.",
    ],
  },
  {
    slug: "office-waste-management-basics",
    title: "Office Waste Management in Kozhikode: Where to Start",
    excerpt:
      "From Cyberpark IT offices to Mavoor Road commercial stores, a simple pickup schedule keeps workplaces clean and compliant.",
    date: "2026-06-30",
    author: "Bin Friend Team",
    category: "Business",
    color: "#15803d",
    image: "/images/blog-office.svg",
    content: [
      "From tech startups in Kozhikode Cyberpark to retail stores along Mavoor Road, shared workplace bins fill up surprisingly fast.",
      "Start by placing clearly labelled bins for paper, plastic and general waste near high-traffic areas like the pantry.",
      "E-waste — old cables, chargers, broken peripherals — should be collected separately and picked up periodically, not thrown in general trash.",
      "Bin Friend's commercial waste pickup plans in Kozhikode remove the guesswork and keep your facility audit-ready for environmental compliance.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
